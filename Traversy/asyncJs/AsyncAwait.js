const posts3 = [
    { title: "Post One", body: "This is Post one"},
    { title: "Post Two", body: "This is Post two"}    
];

function showPost(array) { 
    setTimeout(() => {
        output = "<ol>";
        array.forEach(post => {
             output += "<li>" +post.title+ "</li>";
        });
        output += "</ol>";
        document.getElementById("AsyncAwait").innerHTML = output;
    }, 1000);
}

function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts3.push(post);
            const error = false;
            if(!error){
                resolve();
            } else{
                reject("Error: something went wrong");
            }
        }, 2000);
    });
}

async function init() {
 await addPost({title: "Post Three", body: "This is Post Three"});
 
 showPost(posts3);
}

init();

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);
}

fetchUsers();
