// Importando o módulo 'http' do Node.js, que fornece funcionalidades para criar um servidor HTTP.
const http = require('http');

// Criando o servidor HTTP com a função 'createServer', que recebe uma função de callback com os parâmetros 'req' (request) e 'res' (response).
const server = http.createServer((req, res) => {
    // Criando um objeto 'resp' para armazenar as respostas associadas a diferentes URLs.
    const resp = [];

    // Definindo a resposta para a URL '/' (página inicial).
    resp['/'] = '<h1>Home</h1>';

    // Definindo a resposta para a URL '/contato'.
    resp['/contato'] = '<h1>Contato</h1>';

    // Definindo uma resposta padrão para URLs que não foram especificadas anteriormente.
    resp['semURL'] = '<h1>URL sem resposta definida!</h1>';

    // Exibindo no console a resposta correspondente à URL solicitada ou a resposta padrão caso não haja correspondência.
    console.log(resp[req.url] || resp['semURL']);

    // Enviando a resposta para o cliente com base na URL solicitada.
    res.end(resp[req.url]);
});

// Fazendo o servidor escutar na porta 3001 e no endereço 'localhost'.
server.listen(3001, 'localhost', () => {
    // Callback executado quando o servidor estiver pronto para receber conexões.
    console.log('Servidor de pé em: http://localhost:3001');

    // Instrução para o usuário sobre como desligar o servidor (pressionando ctrl + c).
    console.log('Para desligar o nosso servidor: ctrl + c');
});
