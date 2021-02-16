var data = []
console.log('test')

fetch('http://localhost:3000/plants')
.then(res => res.json())
.then((data) => {
    // console.log(capitalize(data))
    // console.log(filterBySpeciesPlants(data, 'alnus'))
    // console.log(alphabetizePlants(data))
    // console.log(randomizePlants(data,5))
})

function capitalize(data){
    let capitalizedArray = []
    capitalizedArray = data.map(element => {
        const name = element.name.toUpperCase()
        return name
    });
    console.log(capitalizedArray)
    return capitalizedArray
}

function filterBySpeciesPlants(data,filterString = ''){
    console.log(filterString)
    let loweredFilterString = filterString.toLowerCase()
    const filteredArray = data.filter(element => element.species.toLowerCase().includes(loweredFilterString))
    return filteredArray
}

const alphabetizePlants = (data) => {
    return data.sort((a,b) => a.name.localeCompare(b.name,'en', {ignorePunctuation: true}))
} 

let randomizePlants =  (data,num) => {
    let arr = []
    const length = data.length
    for(let i = 0; i < num; i++){
        const randomInt = Math.floor(Math.random() * (length + 1))
        arr.push(data[randomInt])
    }
    return arr
}
