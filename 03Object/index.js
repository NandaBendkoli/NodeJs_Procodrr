const user = {
  id: 1,
  name: "Amit Sharma",
  email: "amit.sharma@example.com",
  age: 24,
  role: "Frontend Developer",
  add: {
    city: "Pune",
    state: "MH",
  },
  name:"neha"
};

for (let key in user) {
  console.log(key, ":", user[key]);
}
