// Gretting Fucntion

// function greeting(firstname: string) {
//   console.log(`Hello ${firstname}`);
// }

// greeting("Ankit");

// function SumTwoValue(a: number, b: number) {
//   return a + b;
// }

// console.log(SumTwoValue(23, 34));

// function isLegal(age: number) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isLegal(34));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function sum(a: number, b: number): number {
//   return a + b;
// }

// console.log(sum(2345, 2345));

// INERFACE

// interface User {
//   name: string;
//   age: number;
//   adress: address;
// }

// interface address {
//   city: string;
//   country: string;
//   pincode: number;
// }

// let user1: User = {
//   name: "ankit",
//   age: 18,
//   adress: {
//     city: "rudrapur",
//     country: "India",
//     pincode: 263153,
//   },
// };

// let user2: User = {
//   name: "ankit1",
//   age: 34,
//   adress: {
//     city: "adfg",
//     country: "dfg",
//     pincode: 2134,
//   },
// };

// function isLegal(user: User): boolean {
//   if (user.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// interface people {
//   name: string;
//   age: number;
//   greet: () => string;
// }

// let person: people = {
//   name: "ankit",
//   age: 21,
//   greet: () => {
//     return person.name;
//   },
// };

// console.log(person.gree
// t());

interface Admin {
  name: "string";
  permision: "string";
}
interface User {
  name: "string";
  age: number;
}

type UserorAdmin = User | Admin;

function greet(user: UserorAdmin) {
  console.log(user.name);
}
