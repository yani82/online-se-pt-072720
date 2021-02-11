// element.addEventListener("event_type", (evt) => {

  // GET SOME VARIABLES TO HELP WITH THE FETCH WORKING WITH EVT.target

  // fetch(url, {})
    // .then(r => r.json())
    // .then(jsonObj => {
      // DO DOM MANIPULATION WITH JSON OBJ
    // })
// })
// const test = () =>{

//   console.log(3)
// }
// console.log(2)
// test()
// setTimeout(() =>{
//   console.log(1)
// },100)
// console.log(4)

// get stuff of the dom
// do stuff with it
// slap it back on the dom

  let dogButton = document.getElementById('hello-button')
 
let dogsUl = document.querySelector("#dogs")
let isItGreen = false

dogButton.addEventListener('click', () => {

  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => turnJSONtoHTML(data))
  if(isItGreen === false){
    dogButton.style.backgroundColor = 'green'
    isItGreen = true
  }
  else{
    dogButton.style.backgroundColor = 'pink'
    isItGreen = false
  }
  

})

let turnJSONtoHTML = (jsonObj) => {
  let newImageTag = document.createElement("img")
  newImageTag.src = jsonObj.message
  newImageTag.alt = "Good dog"

  let newLi = document.createElement("li")
  newLi.append(newImageTag)

  dogsUl.append(newLi)

  newImageTag.addEventListener("click", () => {
    newLi.remove()
  })

}
// dogButton.addEventListener("click", (evt) => {

//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(r => r.json())
//     .then((jsonObj) => {
//       turnJSONtoHTML(jsonObj)

//     })

//     console.log(jsonObj);

// })
// function regularFunction(){
//   console.log("hello")
//   return "hello"
// }
// let arrowFunction = () => {
//   console.log("goodbye");
//   return "goodbye"
// }
// let slickArrowFunction = () => "this is going to be returned"
// // let thePromiseObj = fetch("https://dog.ceo/api/breeds/image/random")
// //
// // let anotherPromise = thePromiseObj.then(function(response){ return response.json() })
// // let yetanotherPromise = anotherPromise.then(function(theReturnValueOfLine10){
// //   console.log(theReturnValueOfLine10)
// //   return 12
// // })
// // yetanotherPromise.then(function(number){console.log("number is", number)})
