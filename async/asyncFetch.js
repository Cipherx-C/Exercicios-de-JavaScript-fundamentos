async function start() {
    const url = 'https://api.github.com/users/JovemDevv'
    const user = await fetch(url).then( r => r.json())
    const repos = fetch(user.repos_url).then(r => r.json())
    console.log(repos)
}

start().catch(e => console.log(e))