const users = fetch("https://jsonplaceholder.typicode.com/users")
console.log(users)

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    }).then (data => {
        data.forEach(user => {
            console.log(user);
        })
    })

    // ASYNC

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunction = async () => {
    const data = await myCoolFunction();
    console.log(data);
}

anotherFunction();