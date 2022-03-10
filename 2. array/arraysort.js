const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

/// numeric sorting

const num = [21, 43, 12, 22, 98, 65, 76];
num.sort(function (a, b) {
  return b - a;
});
//boro theke choto
console.log(num);
num.sort(function (a, b) {
  return a - b;
});
//choto theke boro
console.log(num);
