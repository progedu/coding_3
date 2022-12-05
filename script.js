const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const left = document.getElementById("left");
const right =  document.getElementById("right");
const resultHtml =  document.getElementById("result-html");
const resultListHtml =  document.getElementById("result-list-html");
const judgeHtml = document.getElementById("judge-html");
const restartHtml = document.getElementById("restart-html");

let leftNum = 0;
let rightNum = 0;

let resultList = [];

function start(){
    leftNum =  Math.floor(Math.random() * 13); //左のカード番号を決める
    rightNum =  Math.floor(Math.random() * 13); // 右のカード番号を決める

    left.src = "card/0_" + cards[leftNum] + ".png"; // カードを描画

    judgeHtml.style.visibility = "visible"; //投票ボタンを表示
    restartHtml.style.visibility = "hidden"; //再戦ボタンを非表示

}

function judge(isHigh) {
    let result = "";

    if (cards[leftNum] < cards[rightNum]) { // 右のカードの方が大きい
        if (isHigh === true){ // isHighがtrueなら勝ち
            result = true;
        }else{ // isHighがfalseなら負け
            result = false;
        }
    }else{ // 右のカードの方が小さい
        if (isHigh === true){ // isHighがtrueなら負け
            result = false;
        }else{ // isHighがfalseなら勝ち
            result = true;
        }
    }

    showResult(result);

    resultList.push(result);
    showResultList(resultList);
}

function showResult(result){
    // 結果を表示
    right.src = "card/1_" + cards[rightNum] + ".png"; // 右のカードを表示
    if(result === true) {
        resultHtml.innerText = "あなたの勝ち！";
    }else{
        resultHtml.innerText = "あなたの負け...";
    }
    
    judgeHtml.style.visibility = "hidden"; //投票ボタンを非表示
    restartHtml.style.visibility = "visible"; //再戦ボタンを表示
}

function showResultList(resultList) {
    let win = 0;
    let lose = 0;
    for(let i = 0; i < resultList.length; i++) {
        if(resultList[i] === true){
            win++;
        }else{
            lose++;
        }
    }
    resultListHtml.innerText = "結果："+ win + "勝" + lose + "敗";
}

function restart(){
    resultHtml.innerText = ""; //結果表示をクリア
    right.src = "card/back.png" //右のカードは隠蔽
    
    start();
}

window.onload = start();