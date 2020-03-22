console.log(__dirname);

console.log(__filename);

console.log("Hello, Ayomide");

setTimeout(function() {
    console.log("Hello again, after 3 seconds");
}, 3000);

var time = 0;

var timer = setInterval(() => {
    time += 4;
    console.log(time + " seconds have passed");
    if (time >= 15) {
        clearInterval(timer);
    }
}, 4000);