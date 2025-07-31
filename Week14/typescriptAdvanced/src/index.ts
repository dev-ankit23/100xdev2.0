// // interface User {
// //   name: string;
// //   age: number;
// // }

// // function SumOfAge(user1: User, user2: User) {
// //   return user1.age + user2.age;
// // }

// // const age = SumOfAge({ name: "ankit", age: 18 }, { name: "raman", age: 10 });
// // console.log(age);

// // PICK

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   age: number;
// }

// type UserProfile = Pick<User, "name" | "email">;

// const DisplayUserProfile = (user: UserProfile) => {
//   console.log(`Name is ${user.name} and email is ${user.email}`);
// };

// DisplayUserProfile({
//   name: "ankit",
//   email: "mailankit@devankit.com",
// });

import { z } from "zod";
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return;
  }
  // update database here
  res.json({
    message: "User updated",
  });
});

app.listen(3000);
