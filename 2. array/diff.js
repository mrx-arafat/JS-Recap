function practice(i) {
  return i + 1;
}

// forEach vs map

var a = [-1, 0, 1, 2, 3, 4, 5];
var b = [0];
var c = [0];
console.log(a);
b = a.forEach(practice);
console.log("=====");
console.log(a);
console.log(b);

c = a.map(practice);
console.log("=====");
console.log(a);
console.log(c);
