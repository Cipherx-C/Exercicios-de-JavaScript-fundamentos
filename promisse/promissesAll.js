import axios from "axios"

promisse.all([
    axios.get('https://api.github.com/users/JovemDevv'),
    axios.get('https://api.github.com/users/JovemDevv/repos')
])
.then( responses => {
    console.log(responses[0].data.login)
    console.log(respones[1].data.length)
})
.catch( err => console.log(err.message))
