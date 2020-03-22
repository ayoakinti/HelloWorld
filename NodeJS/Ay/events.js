var events = require("events");

// var Ay = new events.EventEmitter(); 

// Ay.on("someEvent", function (mssg) {
//     console.log(mssg);
// });

// Ay.emit("someEvent", "I am a fine boy");

const trial = new events.EventEmitter();

trial.on("oneEvent", (mssg) => console.log(mssg));
trial.once("someEvent", (mssg) => console.log(mssg));

trial.emit("someEvent", "scream!!!");
trial.emit("someEvent", "Fight");
trial.emit("oneEvent", "scream!!!");
trial.emit("oneEvent", "Fight");