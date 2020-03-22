const posts1 = [
    { title: "Post One", body: "This is Post one"},
    { title: "Post Two", body: "This is Post two"}    
];

function showPost(array) {
    setTimeout(() => {
        output = "<ul>";
        array.forEach(post => {
             output += "<li>" +post.title+ "</li>";
        });
        output += "</ul>";
        document.getElementById("callbacks").innerHTML = output;
    }, 1000);
}

// Function "addPost" calls back function "showPost"
function addPost(array, newPost, callback) {
    setTimeout(() => {
        array.push(newPost);
        callback(posts1);
    }, 2000);    
}

addPost(posts1, {title: "Post Three", body: "This is Post Three"}, showPost);
// showPost(posts1);

