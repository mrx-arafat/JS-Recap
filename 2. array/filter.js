const nums = [2, 43, 4, 3, 42, 3, 4, 33];

function myFunction(value) {
  return value < 10;
}

const newNums = nums.filter(myFunction);
console.log(nums);
console.log(newNums);

// filter act like map both will give you a new array, just filter kore dibe
