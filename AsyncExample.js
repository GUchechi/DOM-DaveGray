const getDadJoke = async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
    const jokeData = await res.json();
    console.log(jokeData);
}

getDadJoke()