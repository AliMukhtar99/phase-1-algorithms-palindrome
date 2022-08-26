function isPalindrome(str) {
  // Write your algorithm herefunction isPalindrome(str) {
  const strArr = str.split("");
  const strReversedArr = str.split("").reverse();
  let a = 0;
  for (let i in strReversedArr) {
    if (strReversedArr[i] === strArr[i]) {
      a++;
    }
  }
  if (a === strArr.length) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
Add written explanation of your solution here
- splitting the string to get an array 
- reversing that array to get another array 
- declaring a variable and assign the value 0 to it 
- looping on one of the arrays 
- if the elemnts with the same indexes are the same :
      increase a by 1 
- lastly if a was the same as the length of the array means all elements were the same 
      so return true
      */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
