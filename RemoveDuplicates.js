function removeDuplicates(arr) {
  return [...new Set(arr)];
}


const arr1 = [1, 2, 3, 2, 4, 5, 1, 6, 5];
const uniqueArray = removeDuplicates(arr1);
console.log("Original Array:", arr1);
console.log("Array without Duplicates:", uniqueArray);
