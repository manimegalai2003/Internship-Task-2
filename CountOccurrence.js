function countOccurrences(arr) {
  const counts = {};
  for (let element of arr) {
    counts[element] = counts[element] ? counts[element] + 1 : 1;
  }
  return counts;
}
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const occurrences = countOccurrences(fruits);

console.log("Array:", fruits);
console.log("Occurrences:", occurrences);

for (const element in occurrences) {
  console.log(element + " appears " + occurrences[element] + " time(s)");
}
