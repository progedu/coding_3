const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const round = 5

const left = document.getElementById("left");
const right =  document.getElementById("right");
const resultDisplay =  document.getElementById("resultDisplay");
const finalDisplay =  document.getElementById("finalDisplay");
const judgeButton = document.getElementById("judgeButton");
const restartButton = document.getElementById("restartButton");

let leftNum = 0;
let rightNum = 0;

let roundResult = [];
let nowRound = 0;

function start(){
    leftNum =  Math.floor(Math.random() * 13); //左のカード番号を決める
    rightNum =  Math.floor(Math.random() * 13); // 右のカード番号を決める

    left.src = "card/0_" + cards[leftNum] + ".png"; // カードを描画
    right.src = "card/back.png" //右のカードは隠蔽

    judgeButton.style.visibility = "visible"; //投票ボタンを表示
    restartButton.style.visibility = "hidden"; //再戦ボタンを非表示

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

    roundResult.push(result);
    nowRound++;

    showResult(result);
}

function showResult(result){
    // 結果を表示
    right.src = "card/1_" + cards[rightNum] + ".png"; // 右のカードを表示
    if(result === true) {
        resultDisplay.innerText = "あなたの勝ち！";
    }else{
        resultDisplay.innerText = "あなたの負け...";
    }
    
    judgeButton.style.visibility = "hidden"; //投票ボタンを非表示
    if(nowRound < round) {
        restartButton.style.visibility = "visible"; //再戦ボタンを表示
    }else{
        finalResult(roundResult);
    }
}

function finalResult(roundResult) {
    let win = 0;
    let lose = 0;
    for(let i = 0; i < round; i++) {
        if(roundResult[i] === true){
            win++;
        }else if(roundResult[i] === false){
            lose++;
        }
    }
    finalDisplay.innerText = "結果："+ win + "勝" + lose + "敗";

}

function restart(){
    start();
}

window.onload = start();