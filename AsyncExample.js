// const getDadJoke = async () => {
//     const res = await fetch('https://icanhazdadjoke.com/', {
//         method: 'GET',
//         headers: {
//             Accept: 'application/json',
//         }
//     })
//     const jokeData = await res.json();
//     console.log(jokeData);
// }

// getDadJoke()

// Post request

const jokeObject = {
    id: '5h399pWLmyd', 
    joke: "What did the beaver say to the tree? It's been nice gnawing you."}

    const postData = async (jokeObj) => {
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jokeObj),
        });
        const jokeData = await response.json();
        console.log(jokeData.headers);
    }
    postData();