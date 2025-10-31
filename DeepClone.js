function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = {
  name: "John",
  age: 30,
  skills: ["JavaScript", "HTML", "CSS"],
  address: { city: "Chennai", country: "India" }
};

const clone = deepClone(original);
clone.name = "Jane"; 
clone.address.city = "Bangalore";

console.log("Original:", original);
console.log("Clone:", clone);
