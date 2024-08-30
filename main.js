// 0-100 -> 15%
//100-500 -> 10%
//500+ -> 5%

let tip = 0;

//const amount = prompt ("Add amount: ");

function tipCalculator(amount) {
    if ( amount >=0 && amount <= 100) {
        tip = amount * 0.15;

        return true;

    } 

    if (amount >100 && amount <= 500 ) {
        tip = amount * 0.10;

        return true;

    } 

    tip = amount * 0.05;

    return true;

}

tipCalculator(100);
console.log(tip);


