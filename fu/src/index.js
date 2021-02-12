const form = document.querySelector('#create-task-form')

const updateform = document.querySelector('#update-task-form')

const ul = document.querySelector('#tasks')
//destructuring
const {log:l} = console

const baseUrl = 'http://localhost:3000/tasks'
//Get request == read  === index
fetch(baseUrl)
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(data => {
        dataToHtml(data)
    })
})
const handleSubmit =(evt) => {
    evt.preventDefault()
    const[content] = evt.target

    console.log(content.value,'event listener')
    //Post Request === Create from agile === create from rest api
    // fetch === axios
   fetch(baseUrl,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            content: content.value
        })

    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        dataToHtml(data)
    })

}

form.addEventListener('submit', handleSubmit)

function dataToHtml(data){
    const li = document.createElement('li')
    li.innerHTML = data.content
    li.addEventListener('click', function(evt){
        fetch(`${baseUrl}/${data.id}`,{method:'DELETE'})
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            li.remove()
        })
        // console.log('hi') 

    })
    li.addEventListener('contextmenu', (evt) => {
        console.log('selected')
        const input = updateform.querySelector('input')
        l('hello')
        input.value = `${data.content}`

    })
    ul.append(li)

    updateform.addEventListener('submit',(evt) => {
        evt.preventDefault()
        const[content] = evt.target
        fetch(`${baseUrl}/${data.id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                content:content.value
            })

        })
        .then(res => res.json())
        .then(data => console.log(data))
    })
    
}


