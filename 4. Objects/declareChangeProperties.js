const person = {
  name: "arafat",
  salary: 200000,
  future: "billionaire",

  title: function () {
    // return this.name + " " + this.future;
    // return "mara khau";

    console.log(this.name + " " + this.future);
  },
};

for (x in person) {
  person.name = "king";

  console.log(`${x} :`);
  console.log(person[x]);
}
console.log(person.title);
