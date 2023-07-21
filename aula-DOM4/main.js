/*
// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText =  "Olá"

// append prepend
const body = document. querySelector( 'body')

body.append(div)

// adicionar antes. antes do header

body.prepend(div)
*/

// Adicionando elementos
const div = document.createElement('div')
div.innerText = 'Olá'

// insertBefore(recebe 2 argumentos)
const body = document.querySelector('body')
const script = body.querySelector('header')

body.insertBefore(div, header,nextSubling)