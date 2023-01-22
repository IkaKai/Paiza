import * as CON from "./const";
process.stdin.resume();
process.stdin.setEncoding('utf8');

//main();


function main(){
    // 自分の得意な言語で
    // Let's チャレンジ！！
    var lines = readFile(CON.FILE_PATH);
    
    // 問題
    pro01(lines);
}

function readFile(path){
    var reader = require('fs');
    var lines = [];
    var text = reader.readFileSync(path);
    lines.push(text.toString().split("\n"));
    

    return lines;
}

/**
 * 
 * @param {*} lines 
 */
function pro01(lines){
    
    
}