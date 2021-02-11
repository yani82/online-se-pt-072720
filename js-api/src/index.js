// const [name,gender,species] = evt.target
const baseURL = 'http://localhost:3000/animals'

const tbody = document.querySelector('tbody')

const form = document.querySelector('.form')
console.log(form)
fetch(baseURL)
.then(res => res.json())
.then(data => {
  console.log(data)
  data.forEach(data => {
    dataToHtml(data)
    
  })
})

function dataToNode(data){
  const tr = document.createElement('tr')
  const tdName = document.createElement('td')
  const tdGender = document.createElement('td')
  const tdSpecies = document.createElement('td')
  let {id, name, species, gender} = data
  tdName.innerHTML = name
  tdGender.innerHTML = gender
  tdSpecies.innerHTML = species
  tr.append(tdName,tdGender,tdSpecies)
  return [tr,id]
}

function dataToHtml(data){
  const instance = dataToNode(data)
  instance[0].addEventListener('click',() => {
    fetch( `${baseURL}/${instance[1]}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      instance[0].remove()
    })
  })
  tbody.append(instance[0])
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const [name,gender,species] = evt.target
  console.log(name.value)
  fetch(baseURL,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      gender:gender.value,
      species:species.value
    })
  })
  .then(res => res.json())
  .then(data => {
    dataToHtml(data)
    console.log(data)
  })
})



























































// //tbody
// //form
// const form = document.querySelector('.form')

// const tbody = document.querySelector('tbody')

// const baseURL = 'http://localhost:3000/animals/'

// const getAnimal = () => getAnimal(baseURL)

// const createAnimal = params => post(baseURL, params)

// const get = url => fetch(url).then(res => res.json())

// const post = async (url, body) => {
//   const res = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json'
//     }
//   })
//   return await res.json()
// }



//   getAnimals().then(json => {
//     json.forEach(animalData => {
//       const animal = new Animal(animalData)
//       tbody.append(animal.render())
//     })
//   })

//   $form.on('submit', function(e) {
//     e.preventDefault()
//     const body = {}
//     console.log(this)
//     $(this)
//       .serializeArray()
//       .forEach(input => {
//         body[input.name] = input.value
//       })

//     createAnimal(body).then(json => {
//       const animal = new Animal(json)
//       $tbody.append(animal.render())
//     })
//   })
// })