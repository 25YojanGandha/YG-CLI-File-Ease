let fs = require('fs');
let path = require('path');

let types = {
    media: [".mp4", ".mkv", ".mp3"],
    document: [".txt", ".docx", ".pdf", ".xlsx", ".xls", ".odt", ".ods", ".odp", ".odg", ".tex", ".ps"],
    app: [".exe", ".dmg", ".pkg", ".deb"],
    archive: [".zip", ".rar", ".tar", ".gz", ".ar", ".iso", ".7z", ".git"],
    images: [".png", ".jpg", ".jpj", ".jpeg"],
    // others
}

function organiser(srcPath, orgFolderPath){
    let allContent = fs.readdirSync(srcPath);

    for(let i = 0; i < allContent.length; i++){
        let childFilePath = path.join(srcPath,allContent[i]);

        if(fs.lstatSync(childFilePath).isFile()){
            let category = categoryFilter(allContent[i]);

            console.log(category);
            sendToDestination(childFilePath,orgFolderPath,category,allContent[i]);
        }
    }
}

function categoryFilter(file) {
    let ext = path.extname(file);
    let category = "other";

    for(let type in types){
        let arr = types[type];
        arr.find((e,i)=>{
            if(e==ext){
                category=type;
            }
        });
    }

    return category;
}

function sendToDestination(filePath,destPath,category,filename) {
    let deepestPath = path.join(destPath,category);

    if(!fs.existsSync(deepestPath)){
        fs.mkdirSync(deepestPath);
    }

    fs.copyFileSync(filePath,path.join(deepestPath,filename));
    fs.unlinkSync(filePath);
    
    console.log(deepestPath+"-->"+category);
}

function organiseWrapper(srcPath){
    let orgFolderPath = path.join(srcPath+"\\organise");

    if(!fs.existsSync(orgFolderPath)){
        fs.mkdirSync(orgFolderPath);
    }

    organiser(srcPath,orgFolderPath);
}

module.exports = {
    organise: organiseWrapper
}