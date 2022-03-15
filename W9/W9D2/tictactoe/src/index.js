

const View = require("./ttt-view")

const Game = require("../ttt_node/game")
console.log("webpack")
document.addEventListener("DOMContentLoaded", () => {
    let game = new Game();
    let ttt = document.querySelector(".ttt");
    new View(game, ttt);
    // ttt.document.createElement("h2")
    console.log("loaded")
});
