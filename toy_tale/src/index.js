// imgtag className toy-avatar
// new div className card
// buttin className = like-btn
// const input = e.target["name"].value
// const img = e.target["image"].value

{/* <div class="card">
<h2>Little Green Men</h2>
<img src="http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png" class="toy-avatar">
<p>10</p>
<button class="like-btn">Like &lt;3</button>
</div> */}
let {createElement} = document

const baseUrl = 'http://localhost:3000/toys'
let addToy = false


document.addEventListener("DOMContentLoaded", ()=>{
  const toyCollection = document.querySelector('#toy-collection')
  const addToyBttn = document.querySelector('#new-toy-btn')
  const formContainer = document.querySelector('.container')
 //Read
  fetch(baseUrl)
  .then(res => res.json())
  .then(data => {
    data.forEach(createNewToy)
  })

  const createNewToy = (toy) => {
    const newDiv = document.createElement("div"), 
    imgTag = document.createElement("img"), 
    hTag = document.createElement("h2"),
    pTag = document.createElement("p"),
    bttn = document.createElement("button")
  
    newDiv.className = "card" 
    hTag.innerText = toy.name
    imgTag.src = `${toy.image}`
    imgTag.className = "toy-avatar"
    pTag.innerText = toy.likes
    bttn.innerText = "Like <3"
    bttn.className = "like-btn"
    newDiv.append(hTag,imgTag,pTag,bttn)
    toyCollection.append(newDiv)

    bttn.addEventListener('click', function(){
      let likes = Number(pTag.innerText) + 1
      fetch(`${baseUrl}/${toy.id}`,{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          likes 
        })
      })
      pTag.innerText = likes
    })


  }

  addToyBttn.addEventListener('click', () => {
    console.log('hi')
    addToy = !addToy
    if (addToy) {
      formContainer.style.display = 'block'
    } else {
      formContainer.style.display = 'none'
    }
  })


    formContainer.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log('hi from the form')
      const name = e.target["name"].value
      const image = e.target["image"].value

      fetch(baseUrl,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name,image
        })
      })
      .then(res => res.json())
      .then(createNewToy)


    })

})




