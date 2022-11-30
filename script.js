const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const left = document.getElementById("left");
const right =  document.getElementById("right");


let leftNum = 0;
let rightNum = 0;


function start(){
    leftNum =  Math.floor(Math.random() * 13); //左のカード番号を決める
    rightNum =  Math.floor(Math.random() * 13); // 右のカード番号を決める

    left.src = "card/0_" + cards[leftNum] + ".png"; // カードを描画

}


window.onload = start();