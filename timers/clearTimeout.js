// Declaração da constante "timeOut" com valor de 3000 milissegundos (3 segundos)
const timeOut = 3000;

// Declaração da função "finished" usando uma arrow function que imprime 'done!' no console
const finished = () => console.log('done!');

// Agendando a execução da função "finished" após o tempo definido em "timeOut" e armazenando o identificador do timer na variável "timer"
let timer = setTimeout(finished, timeOut);

// Cancelando a execução agendada do "setTimeout" usando o identificador do timer (armazenado na variável "timer")
clearTimeout(timer); // Isso evita que a função "finished" seja executada após o tempo definido em "timeOut"
