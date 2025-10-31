Array.prototype.myMap = function(callback) {
  const result = [];
  
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.myMap(num => num * 2);

console.log("Original array:", numbers);
console.log("Doubled array:", doubled);
