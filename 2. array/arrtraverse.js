const arr = [156, 662, 33, 40, 5, 69, 7, 8, 9];
for (var i = 0; i < arr.length; i++) {
  // Regular For loop
  console.log(arr[i]);
}
console.log("------");
arr.forEach(function (item, index, array) {
  // forEach
  console.log(item, index);
});
console.log("------");
for (const x of arr) {
  // for/of
  console.log(x);
}
