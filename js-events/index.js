//add an h2 tag "Some of My Favorites"

//add a card with an img, header, and p 

//add all info from books list in book.js


const book_list = document.querySelector('#book-list')
const body  = document.querySelector('body')

//propogation exxample
body.addEventListener('click', (evt) => {
	console.log('from the body')
})
book_list.addEventListener('click', (dfd) => {
	dfd.stopPropagation()
	console.log('this is from the book list')
})
// using form to update the dom
const form = document.querySelector('.newBookForm')
// console.log(form)

form.addEventListener('submit',function(evt) {
	evt.preventDefault()
	// dfd.stopPropagation()
	console.log(evt)
	console.log(evt.target[0].value) //title
	console.log(evt.target[1].value) // author
	console.log(evt.target[2].value) //book url
	const div = document.createElement('div')

	div.className = 'card'

	const img = document.createElement('img')

	img.src = evt.target[2].value

	const h3 = document.createElement('h3')

	h3.textContent = evt.target[0].value

	const p = document.createElement('p')

	p.textContent = evt.target[1].value

	//add all elements to div

	div.appendChild(img)

	div.appendChild(h3)

	div.appendChild(p)

	book_list.appendChild(div)

})




books.map(book =>{

	const div = document.createElement('div')

	div.className = 'card'

	const img = document.createElement('img')

	img.src = book.img

	const h3 = document.createElement('h3')

	h3.textContent = book.title

	const p = document.createElement('p')

	p.textContent = book.author

	//add all elements to div

	div.appendChild(img)

	div.appendChild(h3)

	div.appendChild(p)

	book_list.appendChild(div)


})



