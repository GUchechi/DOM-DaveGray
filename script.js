const myArray = ["eat", "code", "sleep"];

 const myObj = {
    name: 'Dave',
    hobbies:["eat", "code", "sleep"],
    logName: function() {
        console.log(this.name);
    }
 }


const mySessionData = JSON.parse(localStorage.getItem('mySessionStore'));
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
console.log(myLocalData);