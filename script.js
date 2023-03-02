let left = document.getElementById("left");
let right = document.getElementById("right");
let restartHtml = document.getElementById("restart-html");
let resultHtml = document.getElementById("result-html");
let judgeHtml = document.getElementById("judge-html");
let resultListHtml = document.getElementById("result-list-html");

let leftNum = 0;
let rightNum = 0;

function start(){
    leftNum =  Math.floor(Math.random() * 13) + 1;
    rightNum =  Math.floor(Math.random() * 13) + 1;

    left.src = "card/1_" + leftNum + ".png";

    restartHtml.style.display = "none";
    judgeHtml.style.display = "block";
}

function judge(isHigh) {
    let result = "";

    if (leftNum > rightNum) {
        if (isHigh === true) {
            result = false;
        } else {
            result = true;
        }
    }
    if (leftNum < rightNum) {
        if (isHigh === true) {
            result = true;
        } else {
            result = false;
        }
    }
    if (leftNum === rightNum) {
        result = false;
    }

    resultList.push(result);

    right.src = "card/2_" + rightNum + ".png";
    if (result === true) {
        resultHtml.innerText = "あなたの勝ち！";
    } else {
        resultHtml.innerText = "あなたの負け。。。";
    }

    judgeHtml.style.display = "none";
}

window.onload = start();