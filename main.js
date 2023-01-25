import * as CON from "./const.mjs";
import * as pro from "./problemB.mjs";
import { readFileSync } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf8');

main();

function main(){
    // 自分の得意な言語で
    // Let's チャレンジ！！
    var lines = readFile(CON.FILE_PATH);
    
    // 問題
    pro.problemMain(lines);
}

function readFile(path){
    //var reader = require('fs');
    var lines = [];
    var text = readFileSync(path);
    lines.push(text.toString().split("\n"));

    return lines;
}

