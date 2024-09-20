// Afficher qqch en console
// console.log("Hello world !")

/*
// Premiers tests
let name = "Bob"
const age = 33

name = "Michel"
// age = 10 -> impossible de modifier une 'const'

console.log(name, age, typeof name, typeof age)
console.log(name.toUpperCase(), name.length)
*/

/*
// array
let users = ["Michel", "Bob", "Julie"]
users.push("TestPush")

console.log(users, users.length, users[1])
*/

// object
let user = {
    name: "Bob",
    age: 23,
}
user.age += 1
console.log(user, user.name, user['age'])