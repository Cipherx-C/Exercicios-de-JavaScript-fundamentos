const timeOut = 1000; // Definição da constante "timeOut" com o valor de 1000 milissegundos (1 segundo)

const checking = () => console.log('checking!'); // Definição da função "checking" que imprime 'checking!' no console

let interval = setInterval(checking, timeOut); // Agendando a execução periódica da função "checking" a cada 1000 milissegundos (1 segundo) e armazenando o identificador do intervalo na variável "interval"

setTimeout(() => clearInterval(interval), 3000); // Agendando o cancelamento do intervalo após 3000 milissegundos (3 segundos)
