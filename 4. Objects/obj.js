const person = {
  firstName: "Easin",
  lastName: "Arafat",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
