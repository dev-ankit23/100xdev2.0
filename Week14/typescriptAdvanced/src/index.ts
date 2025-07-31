// interface User {
//   name: string;
//   age: number;
// }

// function SumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// const age = SumOfAge({ name: "ankit", age: 18 }, { name: "raman", age: 10 });
// console.log(age);

// PICK

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}

type UserProfile = Pick<User, "name" | "email">;

const DisplayUserProfile = (user: UserProfile) => {
  console.log(`Name is ${user.name} and email is ${user.email}`);
};

DisplayUserProfile({
  name: "ankit",
  email: "mailankit@devankit.com",
});
