// Midudev Curso 2024

//Ejercicio 1
// Nuevo método de array: at

const animals = ["🐶", "🦊", "🐸"]

// Implementa una función at que reciba un array y un índice y devuelva el valor de la posición del array correspondiente al índice proporcionado. Si el índice está fuera del rango del array, la función deberá devolver undefined.

console.log(animals.at(0)) // 🐶
console.log(animals.at(1)) // 🦊
console.log(animals.at(2)) // 🐸
console.log(animals.at(3)) // undefined

//Ejercicio 2

//Método with en arrays

const fruits = ["🍎", "🍌", "🍒"]

//Antes de este la implementación de este método, si queríamos hacer algo con un array y luego devolverlo, teníamos que hacer algo así:

const fruitsCopy = [...fruits]
fruitsCopy[1] = "🍉"

console.log(fruitsCopy) // ["🍎", "🍉", "🍒"]

//Ahora con el método with, podemos hacerlo de la siguiente manera:

const newFruits = fruits.with(1, "🍉")

console.log(newFruits) // ["🍎", "🍉", "🍒"]

//Ejercicio 3

//Agrupar datos en javascript utilizando Object.groupBy

const numbers = [1, 2, 3, 4, 5, 6]

/*
agrupado: {
  pares: [2, 4, 6],
  impares: [1, 3, 5]
} 
*/

let groupedOld = {
  pares: [],
  impares: [],
}

numbers.forEach((number) => {
  if (number % 2 === 0) {
    groupedOld.pares.push(number)
  } else {
    groupedOld.impares.push(number)
  }
})

console.log(groupedOld) // { pares: [2, 4, 6], impares: [1, 3, 5] }

//Ahora con el métidi groupBy, podemos hacerlo de la siguiente manera:

const grouped = Object.groupBy(numbers, (number) =>
  number % 2 === 0 ? "pares" : "impares"
)

console.log(grouped) // { pares: [2, 4, 6], impares: [1, 3, 5] }

const wizards = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley",
  "Ginny Weasley",
  "Neville Longbottom",
]

const groupedWizards = Object.groupBy(wizards, (wizard) => wizard[0])

console.log(groupedWizards)

const avengers = [
  { name: "Iron Man", powerLevel: 500 },
  { name: "Hulk", powerLevel: 9000 },
  { name: "Thor", powerLevel: 4500 },
  { name: "Captain America", powerLevel: 2000 },
  { name: "Black Widow", powerLevel: 9999 },
]

//Agrupar los superheroes por powerLevel

const avengersAgroupedByPowerLevel = Object.groupBy(avengers, (avenger) => {
  if (avenger.powerLevel <= 500) return "alpha"
  if (avenger.powerLevel <= 5000) return "beta"
  return "omega"
})

console.log(avengersAgroupedByPowerLevel)
