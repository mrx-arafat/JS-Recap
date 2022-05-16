/// vaai name er moddhei ache je eita for each mane eita array er each element return korbe 


// const cars = ["bmw", "toyota", "seat", "ferrari", "tesla"];

// function gooFn(value) {
//   console.log(value);
// }
// cars.forEach(gooFn);

const nums = [2, 34, 432, 21, 13];

function myFunction(value, index, array) {
  console.log(value*2);
  console.log(index);
  console.log(array);

  console.log("loop shes---------------");
}

nums.forEach(myFunction);
