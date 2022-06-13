const arr = [
  { name: "arafat poor", wealth: 20000000000 },
  { name: "arafat middleclass", wealth: 30000000000 },
  { name: "arafat king", wealth: 40000000000 },
];

console.log(arr.name);
for (i = 0; i < arr.length; i++) {
  console.log("boom: ");
  console.log(arr[i]);

  arr[i].wealth = arr[i].wealth - 69;
}

console.log(arr[2].wealth);
