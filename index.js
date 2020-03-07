const apple = [4,3,11,13,1]
const facebook = [4,9,2,1,1]
const microsoft = [4,1,1,1,1]
const uber = [24,1,1,1,1]

function highestProfit(array){

  let highestValue = 0;

  for (let i=0; i<array.length; i++){
    for (let j=i+1; j < array.length; j++){
      if (array[j] - array[i] > highestValue) highestValue = array[j] - array[i]
    }
  }
  console.log("Max profit: ", highestValue)
  console.log("---------")
}

highestProfit(apple)
highestProfit(facebook)
highestProfit(microsoft)
highestProfit(uber)

function highestTransaction(arr){

  var minIdx = 0;
  var maxIdx = 1;
  var currMin = 0;
  var maxProfit = 0;

    for(var i = 1; i < arr.length; i++) {

        // new current min.
        if(arr[i] < arr[currMin]) { 
        	currMin = i;
        }
        
        // new best profit
        if(arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
          maxIdx = i;
          minIdx = currMin;
        }

    }

    maxProfit  = arr[maxIdx] - arr[minIdx];
    console.log(maxProfit);

}

// make an algorithm that calculates the highest profit in a weekly transation
// && array.indexOf(min) < i
// && array.indexOf(max) > i

// function highestTransaction(array){

//   let min = Math.min(...array)
//   let max = Math.max(...array)
  

//   for(let i = 0; i < array.length; i++){
//     if (array[i] > max && array.indexOf(min) < i) max = array[i]
//     if (array[i] < min && array.indexOf(max) > i) min = array[i]
//   }

//   console.log(min)
//   console.log(max)
//   console.log("max profit of that week: ", max - min)
//   console.log("-------------")
// // }

highestTransaction(apple)
highestTransaction(facebook)
highestTransaction(microsoft)
highestTransaction(uber)