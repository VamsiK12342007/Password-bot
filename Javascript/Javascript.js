function handlesubmit() {
    event.preventDefault();
    document.getElementById("results").innerHTML = "";
    let userinput = document.getElementById("inputbox").value;
    let resultMessage = ""
    
    if (userinput.length < 8) {
    resultMessage = "The password should be exactly be 8 characters";
    }
    
    if (userinput.length > 8) {
    resultMessage += "The password should be exactly be 8 characters";
    }
    
    let containsCapital = false;
    Array.from(userinput).forEach((c) => {
    
        if (c.match(/[a-z]/i) && c === c.toUpperCase()) {
    containsCapital = true;
    }
    });
    
    if (!containsCapital) {
    resultMessage += "<br/>You need to have atleast 1 uppercase characters";
    }
    
    if (!(userinput.includes("!") || userinput.includes("@") || userinput.includes("#") || userinput.includes("$"))) {
    resultMessage += "<br/>You need to have one of these symbols (!@#$)";
    }
    
    if(resultMessage == "") resultMessage = "Bravo! You win"
    document.getElementById("results").innerHTML = resultMessage;
}
