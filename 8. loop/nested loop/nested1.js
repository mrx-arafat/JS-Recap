let i, j;

for (i = 1; i <= 3; i++) {
  console.log("this is Outer Loop " + i);
  for (j = 1; j <= i; j++) {
    console.log("*");
  }
}
