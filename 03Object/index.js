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
  name: "neha",
};

// for (let key in user) {
//   console.log(key, ":", user[key]);
// }

for (let key in user) {
  if (typeof user[key] === "object" && user[key] !== null) {
    for (let key2 in user[key]) {
      console.log(key2, ": ", user[key][key2]);
    }
  } else {
    console.log(key, ":", user[key]);
  }
}

const a = {};
const b = { key: "b" };
const c = { key: "c" };
console.log(a);
console.log(b);
console.log(c);

a[b] = 123; 
console.log(a[b]);
console.log(a);
a[c] = 456; 
// a[b] == a = {b : 123}  //{ '[object Object]': 123 }
//? means u are using b object as key in a object so u get '[object object]' : 123;

// Looks like you are using object b as a key.
// But JavaScript cannot store object as key in a normal object.
// So JS converts it to string.
// It silently runs:
// String(b)
// For any normal object:
// String(b) → "[object Object]"


console.log(a[c]);
console.log(a);