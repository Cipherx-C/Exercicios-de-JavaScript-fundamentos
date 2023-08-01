// Importante: Este código funciona em um ambiente de terminal (linha de comando).

// Matriz de perguntas que serão feitas ao usuário
const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecida e poderia fazer para melhorar",
    "O que me deixou muito feliz hoje",
    "Quantas pessoas eu ajudei"
]

// Função que faz a pergunta atual ao usuário com base no índice fornecido
const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

// Chama a função para fazer a primeira pergunta (índice 0)
ask()

// Evento que será acionado quando houver entrada do usuário (assincronismo)
const answers = []
process.stdin.on("data", data => {
    // Armazena a resposta do usuário na matriz de respostas, removendo quaisquer espaços extras
    answers.push(data.toString().trim())

    // Verifica se ainda há perguntas não respondidas
    if (answers.length < questions.length) {
        // Se ainda houver perguntas não respondidas, chama a função ask() para a próxima pergunta
        ask(answers.length)
    } else {
        // Caso todas as perguntas tenham sido respondidas, exibe as respostas coletadas e encerra o processo
        console.log(answers)
        process.exit() // desligando o processo
    }
})

// Evento que será acionado quando o processo estiver prestes a ser encerrado
process.on('exit', () => {
    // Exibe uma mensagem de despedida e resume as respostas coletadas
    console.log(`Olá Carol!
        O que você aprendeu hoje foi:
        ${answers[0]}
        
        O que te aborreceu e você poderia melhorar foi:
        ${answers[1]}
        
        O que te deixou feliz hoje:
        ${answers[2]}
        Você ajudou ${answers[3]} pessoas hoje!
        
        Volte amanhã para novas reflexões
    `)
})
