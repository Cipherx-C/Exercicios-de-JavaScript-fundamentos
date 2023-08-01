const timeOut = 3000; // Definição da constante "timeOut" com o valor de 3000 milissegundos (3 segundos)

const finished = () => console.log('done!'); // Definição da função "finished" que imprime 'done!' no console

setTimeout(finished, timeOut); // Agendando a execução da função "finished" após o tempo definido em "timeOut"

console.log('Mostrar'); // Imprimindo 'Mostrar' no console
