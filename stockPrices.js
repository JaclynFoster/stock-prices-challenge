// This challenge, you’ll write a function, called best, that returns the maximum profit 
//possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened 
//throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the 
//stock at $10 and sell it at $22. So the profit would be $12:

// best([15, 10, 20, 22, 1, 9])
// 12
const best = arr => {
  let greatestVal = 0
  for (let i = 0; i < arr.length; i++) {
    let outerNum = arr[i]
    console.log('Outer Num:', outerNum)
    for (let j = 0; j <= i; j++) {
      let innerNum = arr[j]
      // console.log("Inner Num:", innerNum)
      if (outerNum > innerNum) {
        let difference = outerNum - innerNum
        if (difference > greatestVal) greatestVal = difference
      }
    }
  }
  return greatestVal
}

console.log('Best Value:', best([15, 40, 28, 33, 22, 53]))
