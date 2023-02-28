function handlesubmit(){
    event.preventDefault();
    document.getElementById("results").innerHTML = ""
    let userinput = document.getElementById("inputbox").value;
    if(userinput.length<8){
        document.getElementById("results").innerHTML = "The password should be exacyly be 8 characters";
    }

    if(userinput.length>8){
        document.getElementById("results").innerHTML += "<br/>The password should be exactly be 8 characters";
    }

    let containsCapital = false;
    Array.from(userinput).forEach(c => {
        if(c.match(/[a-z]/i) && c===c.toUpperCase()){
            containsCapital = true;
        }
    });
    if(!containsCapital){
        document.getElementById("results").innerHTML += "<br/>You need to have atleast 1 uppercase characters";
    } 
    if(!(userinput.includes("!") || userinput.includes("@") || userinput.includes("#") || userinput.includes("$"))){
        document.getElementById("results").innerHTML += "<br/>You need to have one of these symbols (!@#$)";
    }
    
}

