let prices = [7,1,5,3,6,4];

let buy_price = prices[0];
let max_profit = 0;
for(let i = 1;i<prices.length;i++){

    if(prices[i] < buy_price){
        buy_price = prices[i];
    }else{
        let current_profit = prices[i] - buy_price;
        max_profit = Math.max(current_profit,max_profit);
    }

}
console.log(max_profit)
// let minimum = prices[0];
// let profit = 0;
// let maxProfit = 0;
// for(let i = 1;i<prices.length;i++){
//     maxProfit = prices[i] - minimum;
//     console.log(maxProfit)
//     if(maxProfit > profit){
//         minimum = prices[i]
//     }
// }

// console.log(maxProfit,minimum)