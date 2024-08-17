function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome('abba'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('a'));
console.log(isPalindrome('robot'));
console.log(isPalindrome('ab'));

/* 
  call the word for the palindrome. 
      if return true
         it is a palidrome
        if it is not a palidrome 
      false will be given
*/

/*
  if the word is reverse give true, if it is not reverse give false
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
