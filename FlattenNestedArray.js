function flattenArray(arr) {
  let flat = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      flat = flat.concat(flattenArray(item));
    } else {
      flat.push(item);
    }
  }

  return flat;
}

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattened = flattenArray(nestedArray);

console.log("Original Nested Array:", nestedArray);
console.log("Flattened Array:", flattened);
