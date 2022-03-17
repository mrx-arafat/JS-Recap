const cars = { name: "BMW", model: "z4", price: "120k" };
// object er moddhe loop calate hole for in
for (let x in cars) {
  console.log(x + ":");

  console.log(cars[x]);
}
