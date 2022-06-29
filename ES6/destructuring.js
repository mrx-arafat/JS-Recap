const user = {
  name: "arafat",
  id: 202014049,
  mist: { dept: "cse", degree: "bsc", cgpa: 3.0 },
};

const {
  name,
  id,
  mist: { dept, cgpa },
} = user;

console.log(dept);
