const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const oi = new Character('Hello');
oi.on('help', () => console.log(`${oi.name} World`))

console.log('começando a programar')
oi.emit('help')