//Решение для тестового задания2
//Элдияр Омуралиев
//Точные условия не помню, но было как то так:
// У нас есть массив чисел [13, 6, 3, 4, 10, 2, 3], 
// каждое число представляет цену покупки и цену продажи товара. 
// Например, в индексе 0 у нас есть 13, это значит, что мы купили за 13, 
// и это также означает, что мы можем продать за 13. Поэтому нам нужна функция, 
// которая возвращает максимальную прибыль, это значит, что мы должны покупать меньше 
// днем раньше и продавать больше днем позже. В этом массиве функция должна вернуть индексы 2 и 4,
//  так как мы покупаем за 3 и продаем позже за 10. 

function maxProfit(prices) {
  let minPrice = Math.max(...prices);
  let maxProfit = 0;
  let buyIndex = 0;
  let sellIndex = 0;
  
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      buyIndex = i;
    }
    if (prices[i] - minPrice > maxProfit && i > buyIndex) {
      maxProfit = prices[i] - minPrice;
      sellIndex = i;
    }
  }
  
  if (sellIndex <= buyIndex) {
    let newMinProfit = Math.min(...prices);
    let newBuyIndex = 0;
    let newSellIndex = 0;
    
    for (let i = 0; i < prices.length - 1; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        let profit = prices[j] - prices[i];
        if (profit > newMinProfit) {
          newMinProfit = profit;
          newBuyIndex = i;
          newSellIndex = j;
        }
      }
    }
    
    return [newBuyIndex, newSellIndex];
  } else {
    return [buyIndex, sellIndex];
  }
}

let prices = [13, 6, 3, 4, 10, 2, 3];

console.log(maxProfit(prices)); 
// ответ: [2, 4]
