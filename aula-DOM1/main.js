// getElementById()
/*
const element = document.getElementById('blog-title')
console.log(element)
*/

// getElementsByClassName()

/*
const element = document.getElementsByClassName('.one');
console.log(element)
*/

// getElementsByTagName()

/*
const element = document.getElementsByTagName('meta')
console.log(element)
*/

// querySelector() seletor CSS

/*
const element = document.querySelector('[src]')
console.log(element)
*/

// querySelectorAll() coleção de nós

const element = document.querySelectorAll(".one")
console.log(element)

element.forEach(el => console.log(el))

// getElementById()  (element)
// getElementsByClassName()  (HTMLColletion)
// getElementsByTagName()  (HTMLColletion)
// querySelector()  (element)
// querySelectorAll()  (NodeList)