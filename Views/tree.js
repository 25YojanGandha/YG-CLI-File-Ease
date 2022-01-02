let fs = require('fs');

function treeWrapper(path) {
   viewHelper(path,"");
}

function viewHelper(path, indent) {
    if(!fs.lstatSync(path).isDirectory()){
        console.log(indent+path+".");
    }else{
        console.log(indent+path+"*");
        let allContent = fs.readdirSync(path);
        for(let i=0;i<allContent.length;i++){
            viewHelper(path+"\\"+allContent[i],indent+"     ");
        }
    }
}

module.exports={
    tree: treeWrapper
}