// Manipulando conteúdo
//textContent
/*
const element = document.querySelector("h1")
*/

// trocar
/*
const element = document.querySelector("h1")
element.textContent = "Olá"

console.log(element.texContent)
*/

// adicionar(concatenar)

/*
const element = document.querySelector("h1")
element.textContent += "Olá"

console.log(element.texContent)
*/

// Manipulando conteúdo
// interText(texto interno)

/*
const element = document.querySelector("h1")

element.innerText ="Olá"

// agroa e trocar o elemento HTMl interno

const element = document.querySelector("h1")

element.innerHTML ="Olá <small>!!!</small>"

*/

// Manipulando conteúdo
// value
/*
const element = document.querySelector("input")
 element.value = "Valor que eu quiser" //atribuir valor 

console.log(element) //pegar o valor
*/

// Manipulando elemento
// Atributos

const header = document.querySelector('header') //adicionou atributos

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class')) // pegou

headerID.removeAttribute('id')
header.removeAttribute('class')

header.setAttribute('class', 'bd header') //adicionando atributos