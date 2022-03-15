

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    console.log(this.el);
    this.setupBoard();
  }

  setupBoard() {
    // if(!this.el.hasChildNodes()) {
      let ul = document.createElement("ul");
      for( let i = 0; i < 3; i++) {
          for( let j = 0; j < 3; j++) {
        let li = document.createElement("li")
        ul.appendChild(li);
        }
      }
      this.el.appendChild(ul);
    // }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
