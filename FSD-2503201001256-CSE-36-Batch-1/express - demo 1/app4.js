const EventEmitter = require('events');

// Create EventEmitter object
const user = new EventEmitter();

// Event handler for login
user.on("login", (username) => {
    console.log(username + " has logged in.");
});

// Another handler for login
user.on("login", (username) => {
    console.log("Welcome " + username + "!");
});

// Event handler for logout
user.on("logout", (username) => {
    console.log(username + " has logged out.");
});

// Emit events
user.emit("login", "Uday");
user.emit("logout", "Uday");