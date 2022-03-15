import React from 'react';
import Tile from './tile.jsx';
import {default as Minesweeper} from "../frontend/minesweeper.js";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.board = this.props.board;
  }

  render() {
    const board = this.props.board;
    const grid = board.grid;
    return (
      <div>
        {grid.map((row, i) => {
          return (<div className="row" key={i}>
            {row.map((tile, j) => {
              return <Tile tile={tile} updateGame={this.props.updateGame} key={j}/>
            })}
          </div>)
        })}
      </div>
    )
  }
}

export default Board;