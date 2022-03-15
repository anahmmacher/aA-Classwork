import React from 'react';
import Board from './board.jsx';
import * as Minesweeper from "../frontend/minesweeper.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(10, 5)
    }
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagged) {
    if(flagged){
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board})
  }

  restartGame(){
    const board = new Minesweeper.Board(10, 5)
    this.setState({board: board})
  }

  render() {
    if(this.state.board.won() || this.state.board.lost()) {
      if(this.state.board.won()) {
        return( 
          <div>
          <div className="modal-screen">
            <div className="modal-content">You Win! Congrats or whatever.</div>
            <button onClick={this.restartGame}>New Game</button>
          </div>
            <Board board={this.state.board} updateGame={this.updateGame} />
          </div>
        )
      } else {
        return (
          <div>
          <div className="modal-screen">
            <div className="modal-content">
              <p>You Lose! Git gud.
            <button onClick={this.restartGame}>New Game</button>
            </p>
            </div>
          </div>
            <Board board={this.state.board} updateGame={this.updateGame} />
          </div>
        )
      }

    }else {
    return <Board board={this.state.board} updateGame={this.updateGame} />
  }
  }
}

export default Game;