// Eventos
/*
function print() {
    console.log('print')
}
*/

// Eventos de teclado
/*
const input = document.querySelector('input')
// onkeyup onkeydown onkeypress
input.onkeyup = function() {
    console.log('rodei')
}
*/

//Eventos via JS
/*
const h1 = document.querySelector('h1')

h1.addEventListener('mouseover', print)

function print(){
    console.log('print')
}

// outro jeito JS
const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print(){
    console.log(print)
}

h1.addEventListener('click', function() {
    console.log('outro')
})

*/

// argument event
const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}