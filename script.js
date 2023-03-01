let left = document.getElementById("left");
let right = document.getElementById("right");
let restartHtml = document.getElementById("restart-html");
let resultHtml = document.getElementById("result-html");
let judgeHtml = document.getElementById("judge-html");
let resultListHtml = document.getElementById("result-list-html");

let leftNum = 0;
let rightNum = 0;

let resultList = [];

function start() {
    leftNum = Math.floor(Math.random() * 13) + 1; //左のカード番号を決める
    rightNum = Math.floor(Math.random() * 13) + 1; // 右のカード番号を決める

    left.src = "card/1_" + leftNum + ".png"; // カードを描画

    restartHtml.style.display = "none"; //再戦ボタンを非表示
    judgeHtml.style.display = "block"; //投票ボタンを表示
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

    // 結果を表示
    right.src = "card/2_" + rightNum + ".png"; // 右のカードを表示
    if (result === true) {
        resultHtml.innerText = "あなたの勝ち！";
    } else {
        resultHtml.innerText = "あなたの負け。。。";
    }

    judgeHtml.style.display = "none"; //投票ボタンを非表示
    restartHtml.style.display = "block"; //再戦ボタンを表示

    // 今までの結果を表示
    let text = "";
    for (let i = 0; i < resultList.length; i++) {
        if (resultList[i] === true) {
            text += "○";
        } else {
            text += "×";
        }
    }
    resultListHtml.innerText = text;
}

function restart() {
    resultHtml.innerText = ""; //結果表示をクリア
    right.src = "card/back.png" //右のカードは隠す

    start();
}

window.onload = start();