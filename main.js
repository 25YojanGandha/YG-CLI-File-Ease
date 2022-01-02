#!/usr/bin/env node

let fs=require('fs');
let path=require('path');

let organise=require("./Modules/organise");
let view=require("./Modules/view");
let utility=require("./Modules/utility");
let help=require("./Modules/help");

let input=process.argv.slice(2);

let command=input[0];
let param2=input[1];
let param3=input[2];


switch (command) {
    case "organise":
        organise.organise(param2);
        break;

    case "view":
        view.view(param2,param3);
        break;

    case "utility":
        utility.utility(param2);
        break;

    default:
        help.help();
}



