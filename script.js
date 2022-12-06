const left = document.getElementById("left");
const right =  document.getElementById("right");
const resultHtml =  document.getElementById("result-html");
const judgeHtml = document.getElementById("judge-html");

let leftNum = 0;
let rightNum = 0;


function start(){
    leftNum =  Math.floor(Math.random() * 13) + 1; //左のカード番号を決める
    rightNum =  Math.floor(Math.random() * 13) + 1; // 右のカード番号を決める

    left.src = "card/0_" + leftNum + ".png"; // カードを描画

    judgeHtml.style.display = "block"; //投票ボタンを表示
    restartHtml.style.display = "none"; //再戦ボタンを非表示
}

function judge(isHigh) {
    let result = false; //デフォルトは負け

    if (leftNum < rightNum) { // 右のカードの方が大きい
        if (isHigh === true){ // isHighがtrueなら勝ち
            result = true;
        }
    }else if(leftNum > rightNum){ // 右のカードの方が小さい
        if (isHigh === false){ // isHighがfalseなら勝ち
            result = true;
        }
    }

    showResult(result);
}

function showResult(result){
    // 結果を表示
    right.src = "card/1_" + rightNum + ".png"; // 右のカードを表示
    if(result === true) {
        resultHtml.innerText = "あなたの勝ち！";
    }else{
        resultHtml.innerText = "あなたの負け...";
    }
    
    judgeHtml.style.display = "none"; //投票ボタンを非表示
}

window.onload = start();