const left = document.getElementById("left");
const right =  document.getElementById("right");
const restartHtml = document.getElementById("restart-html");

let leftNum = 0;
let rightNum = 0;

function start(){
    leftNum =  Math.floor(Math.random() * 13) + 1; //左のカード番号を決める
    rightNum =  Math.floor(Math.random() * 13) + 1; // 右のカード番号を決める

    left.src = "card/0_" + leftNum + ".png"; // カードを描画

    restartHtml.style.display = "none"; //再戦ボタンを非表示
}

window.onload = start();