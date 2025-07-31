"use strict";
// Gretting Fucntion
function filteredUsers(user) {
    return user.filter((x) => x.age > 18);
}
console.log(filteredUsers([
    {
        firstname: "harkirat",
        lastname: "Singh",
        age: 21,
    },
    {
        firstname: "Raman",
        lastname: "Singh",
        age: 16,
    },
]));
