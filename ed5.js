/*
Taking the below Array & the learning from the lesson you need to:
 - flatten it,
 - Times it by 2
 - find the average
 */
arr = [[28, 50, 33],[23,33,55,70],[1]]

flattenedArr = arr.reduce((accumulator, value) => {
    return accumulator.concat(value);
}), [];
console.log(flattenedArr);
let length = flattenedArr.length

let arr2 = flattenedArr.map(x => x * 2);

averagedArr = arr2.reduce((acc, val) => { return acc + val }) / length;
console.log(averagedArr)
// console.log(averagedArr)
//while (i= 0, i < 5, i++)

// total	Required. The initialValue, or the previously returned value of the function
// currentValue	Required. The value of the current element
// currentIndex	Optional. The array index of the current element
// arr	Optional. The array object the current element belongs to
// initialValue	Optional. A value to be passed to the function as the initial value
//(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T

// arr = [20, 19, 25, 50]
// average = arr.reduce(function(acc, val, i, arr){
//  acc += val; 

// **we could choose to do something to the accumulator on each iteration
//  if(i === arr.length - 1){
//  return acc/arr.length; 

// **Or we could choose to do something here to the total
//  } else {
//  return acc 
//  }
// });


// module.exports = {
//     flattenedArr, averagedArr, arr
// }