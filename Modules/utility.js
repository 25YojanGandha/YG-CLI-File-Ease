let childProcess=require("child_process");

function utilityWrapper(command) {
    switch (command) {
        case "notepad":
            childProcess.execSync("notepad.exe");
            break;
    
        case "calculator":
            childProcess.execSync("calc");
            break;

        case "browser":
            childProcess.execSync("start chrome google.com");
            break;
    }
}

module.exports={
    utility: utilityWrapper
}