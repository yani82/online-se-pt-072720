// Code your solution here

const listGroup = document.querySelector(".list-group")
const shoesIndexUrl = "http://localhost:3000/shoes" 
const mainShoeBox = document.querySelector("#main-shoe")
let currentShoe = document.querySelector(".list-group-item")

fetch(shoesIndexUrl)
  .then(response => response.json())
  .then((shoes) => {
      let shoesHTML = shoes.map(function(shoe) {
        return `<li class="list-group-item">${shoe.name}</li>`
      })
    listGroup.innerHTML += shoesHTML.join("")
  });

  









