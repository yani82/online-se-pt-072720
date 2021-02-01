// // variable declaration
// const name = 'Mohammed'
// let secName = 'Mohammed'
// // const name = "Mohammed"
// // name = 'Timothy'
// // secName = 'John'
// console.log(name, 'name')
// console.log(secName, 'secName')

// const greeting = `Hi ${name}`




// console.log(student)
// const student = 'Fenty' // in an error

// // function examples
// console.log(greet('Adam')) // work
// function greet(name){
//     return name
// }


// const greeter = (name) => {
//     // console.log(greeting, 'inside the arrow function')
//     return `Hi ${name}`
// }
// // invocation vs definition
// console.log(greeter)
// console.log(greeter('Adam'))

// console.log(Array)


let one = 1
let two = one
two = 2
console.log(one)
console.log(two)


// object
const personOne = {
    name: 'Timothy',
    age: 32,
    hobbies:['Games', 'Eating pizza', 'Drinking monster energy drink'],
    title: 'Professional Gamer'
}
const personTwo = personOne

// console.log(personOne,'beforeChange')
// console.log(personTwo,'beforeChange')

// const personTwo = {
//     name:personOne.name,
//     age: personOne.age,
//     hobbies: personOne.hobbies,
//     title: personOne.title
// }

const personTwo = {
    ...personOne
}

const names = ['test1','Qasim','winner']
// const namesTwo = names
const namesTwo = [...names]

// personTwo.title = 'Developer'

console.log(personOne,'afterChange')
console.log(personTwo,'afterChange')




const names = ['Mohammed', 'Aaron', 'Geoff']
const [nameOne,nameThree] = names

console.log(names[0], 'names 0')
console.log(names[1], 'names 1')
console.log(names[2], 'names 2')





































// console.log('%c HELLO WORLD', 'color: green')
// console.log('%c HELLO WORLD', 'color: gold')
// console.log('%c HELLO WORLD', 'color: firebrick')

// // const header  = document.querySelector('#Title')
// // header.innerHTML= 'Class List'

// const p = document.querySelector('body p')
// p.innerHTML= 'People that are present in class'

// const names = ['Aaron', 'Adam', 'Chaim', 'Fenty']

// const body  = document.querySelector('body')
// const list = document.createElement('ul')

// names.forEach(name => {
//     const li = document.createElement('ol')
//     li.innerHTML = name
//     list.append(li)
//     list.addEventListener('click', () => {
//         li.style.backgroundColor = 'yellow'
//     })
// })

// body.append(list)