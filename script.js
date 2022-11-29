const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const round = 5

const fieldCard = document.getElementById("field-card");
const myCard =  document.getElementById("my-card");
const resultField =  document.getElementById("result-field");
const roundResultField =  document.getElementById("round-result-field");
const judgeButton = document.getElementById("judge-button");
const restartButton = document.getElementById("restart-button");

let fieldCardNumber = 0;
let myCardNumber = 0;

let roundResult = [];
let nowRound = 0;

function start(){
    fieldCardNumber =  Math.floor(Math.random() * 13); //場のカード番号を決める
    myCardNumber =  Math.floor(Math.random() * 13); // 自分のカード番号を決める

    fieldCard.innerHTML = "<img src=card/0_" + cards[fieldCardNumber] + ".png width=60px height=90px>"; // カードを描画
    myCard.innerHTML = "<img src=card/back.png width=60px height=90px>" //自分のカードを隠蔽

    judgeButton.style.visibility = "visible"; //投票ボタンを表示
    restartButton.style.visibility = "hidden"; //再戦ボタンを非表示

}

function judge(isHigh) {
    let result = "";

    if (cards[fieldCardNumber] < cards[myCardNumber]) { // 自分のカードの方が大きい
        if (isHigh === true){ // isHighがtrueなら勝ち
            result = true;
        }else{ // isHighがfalseなら負け
            result = false;
        }
    }else{ // 自分のカードの方が小さい
        if (isHigh === true){ // isHighがtrueなら負け
            result = false;
        }else{ // isHighがfalseなら勝ち
            result = true;
        }
    }

    roundResult.push(result);
    nowRound++;

    showResult(result);
    showRoundResult(roundResult);
}

function showResult(result){
    // 結果を表示
    myCard.innerHTML =  "<img src=card/0_" + cards[myCardNumber] + ".png width=60px height=90px>"; // 自分のカードを表示
    if(result === true) {
        resultField.innerText = "あなたの勝ち！";
    }else{
        resultField.innerText = "あなたの負け...";
    }
    
    judgeButton.style.visibility = "hidden"; //投票ボタンを非表示
    if(nowRound < round) {
        restartButton.style.visibility = "visible"; //再戦ボタンを表示
    }
}

function showRoundResult(roundResult){
    resultText = "";
    for(let i = 0; i < round; i++) {
        if(roundResult[i] === true){
            resultText = resultText + "o";
        }else if(roundResult[i] === false){
            resultText = resultText + "x";
        }
    }
    roundResultField.innerText = resultText;
    
}

function restart(){
    start();
}

window.onload = start();