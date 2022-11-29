const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const fieldCard = document.getElementById("field-card");
const myCard =  document.getElementById("my-card");
const resultField =  document.getElementById("result-field");

let fieldCardNumber = 0;
let myCardNumber = 0;

function start(){
    fieldCardNumber =  Math.floor(Math.random() * 13); //場のカード番号を決める
    myCardNumber =  Math.floor(Math.random() * 13); // 自分のカード番号を決める

    // カードを描画
    fieldCard.innerText = "見えているカード：" + cards[fieldCardNumber];
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

    // 結果を表示
    myCard.innerText = "あなたのカード：" + cards[myCardNumber]; // 自分のカードを表示
    if(result === true) {
        resultField.innerText = "あなたの勝ち！";
    }else{
        resultField.innerText = "あなたの負け...";
    }
}

window.onload = start();