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

/*
// object
let user = {
    name: "Bob",
    age: 23,
}
user.age += 1
console.log(user, user.name, user['age'])
*/

/*
// functions
function sayHello(name) {
    console.log("Hello "+name)
}

// "==" on s'en fou du type, "===" on s'intéresse aussi au type des variables
function add(nbr1, nbr2, operator) {
    if (operator === "sum")
        return nbr1+nbr2
    else
        return 0
}

sayHello("Bob")

nbr1 = 3
nbr2 = 2
console.log(nbr1, " + ", nbr2, " = ", add(nbr1, nbr2, "sum"))
*/

// loop
users = ["Michel", "Bob", "Julie"] // On peut aussi faire des array d'object
users2 = [
    {
        name: "Bob",
        age: 23,
    },
    {
        name: "Paul",
        age: 54,
    },
]

// plus rapide mais on ne voit la différence qu'à partir de très grands array (>> 10^4)
for (let index = 0; index < users.length; index++) {
    const element = users[index]
    console.log(element)
}

users2.forEach((element, index) => { 
    console.log(element, index, element.name)
});
