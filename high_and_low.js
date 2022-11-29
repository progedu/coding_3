const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let fieldVardNumber = 0;
let myCardNumber = 0;

function start(){
    fieldCardNumber =  Math.floor(Math.random() * 13); //場のカード番号を決める
    myCardNumber =  Math.floor(Math.random() * 13); // 自分のカード番号を決める
    
}

function judge(isHigh) {
    if (cards[fieldCardNumber] < cards[myCardNumber]) { // 自分のカードの方が大きい
        if (isHigh === true){ // isHighがtrueなら勝ち
            return true;
        }else{ // isHighがfalseなら負け
            return false;
        }
    }else{ // 自分のカードの方が小さい
        if (isHigh === true){ // isHighがtrueなら負け
            return false;
        }else{ // isHighがfalseなら勝ち
            return true;
        }
    }
}