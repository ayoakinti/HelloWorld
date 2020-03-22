const posts2 = [
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
        document.getElementById("promises").innerHTML = output;
    }, 1000);
}

function addPost(array, post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            array.push(post);
            const error = false;
            if(!error){
                resolve();
            } else{
                reject("Error: something went wrong");
            }
        }, 2000);
    });
}

addPost(posts2, {title: "Post Three", body: "This is Post Three"})
    .then(() => console.log(posts2));
    // .then(() => showPost(posts2))
    // .catch(err => console.log(err));
setTimeout(() => console.log(posts2), 2000);
    

// Promise.all
// const promise1 = Promise.resolve("Ay is good!");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Goodbye"));
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users"). then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values))
//     .catch(err => console.log(err));
