function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

const testStrings = ["racecar", "hello", "A man a plan a canal Panama", "madam", "javascript"];

testStrings.forEach(str => {
  if (isPalindrome(str)) {
    console.log(`"${str}" is a Palindrome`);
  } else {
    console.log(`"${str}" is Not a Palindrome`);
  }
});
