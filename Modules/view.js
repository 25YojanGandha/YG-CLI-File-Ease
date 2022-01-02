let tree=require("../Views/tree");
let flat=require("../Views/flat");

function viewWrapper(command,path) {
    switch (command) {
        case "tree":
            tree.tree(path);
            break;

        case "flat":
            flat.flat(path);
            break;
    }
}

module.exports={
    view: viewWrapper
}