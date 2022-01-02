let fs=require("fs");

function flatWrapper(path) {
    if(!fs.lstatSync(path).isDirectory()){
        console.log(path+".");
    }else{
        console.log(path+"*");
        let allContent = fs.readdirSync(path);
        for(let i=0;i<allContent.length;i++){
            flatWrapper(path+"\\"+allContent[i]);
        }
    }
}

module.exports={
    flat:flatWrapper
}