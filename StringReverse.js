function reverseString(str){
    return str.split('').reverse().join('');
}

const str1 = "Hello";
const rev = reverseString(str1);
console.log("Original String: ",str1);
console.log("Reversed String:" ,rev);