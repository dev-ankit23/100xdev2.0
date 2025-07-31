"use strict";
// interface User {
//   name: string;
//   age: number;
// }
const DisplayUserProfile = (user) => {
    console.log(`Name is ${user.name} and email is ${user.email}`);
};
DisplayUserProfile({
    name: "ankit",
    email: "mailankit@devankit.com",
});
