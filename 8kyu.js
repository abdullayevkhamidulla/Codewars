
///////////////  8kyu  /////////////

// 1. Multiply

// function multiply(a, b){
//  return  a * b
// }

// console.log(multiply(1,2));
// console.log(multiply(6,2));
// console.log(multiply(2,2));


// 2. Even or Odd

// function evenOrOdd(number) {
//   return number % 2 == 0 ? "Even":"Odd"
// }

// console.log(evenOrOdd(2));
// console.log(evenOrOdd(7));
// console.log(evenOrOdd(3));


// 3. Convert number to String!

// function numberToString(num) {
//   // Return a string of the number here!
//   return String(num)
// }

// console.log(numberToString(123));
// console.log(numberToString(-123));
// console.log(numberToString(323));


// 4. Reversed Strings

    /// solution 1 ///

    // function solution(str){
    //   let res =""
    //   for(let i = str.length-1; i>=0; i--){
    //     res += str[i]
    //   }
    //   return res
    // }

    // console.log(solution('hello'));
    // console.log(solution(''));
    // console.log(solution('h'));


    /// solution 2 ///

    // function solution(str){
    //   return str.split("").reverse().join("")
    // }

    // console.log(solution('hello'));
    // console.log(solution(''));
    // console.log(solution('h'));


// 5. Convert boolean values to strings 'Yes' or 'No'.

// function boolToWord( bool ){
//   return bool ? "Yes": "No"
// }

// console.log(boolToWord(true));
// console.log(boolToWord(false));


// 6. Opposite number


// function opposite(number) {
//   //your code here
//   return number<0 ? Math.abs(number): number - number*2
// }

// console.log(opposite(12));
// console.log(opposite(-2));
// console.log(opposite(0));


// 7. Sum of positive

// function positiveSum(arr) {
    
//     let res = 0
//     for(let i of arr){
//       if(i>0) res+=i
//     }
//     return res
// }

// console.log(positiveSum([1,2,3,4,5]));
// console.log(positiveSum([1,-2,3,4,5]));
// console.log(positiveSum([]));


// 8. String repeat

// function repeatStr (n, s) {
//   return s.repeat(n)
// }

// console.log(repeatStr(4, "I"));
// console.log(repeatStr(3, "*"));
// console.log(repeatStr(4, "hello"));


// 9. Remove First and Last Character

// function removeChar(str){
//  //You got this!
//   return str.slice(1,-1)
// };

// console.log(removeChar("eloquent"));
// console.log(removeChar("country"));
// console.log(removeChar("place"));
