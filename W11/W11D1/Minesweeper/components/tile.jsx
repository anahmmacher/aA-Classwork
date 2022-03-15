import React from 'react';
import * as Minesweeper from "../frontend/minesweeper.js";
import Board from './board.jsx';
// const flags = [☢, ⚑];

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let flagged = e.altKey ? true : false;
    const tile = this.props.tile;
    this.props.updateGame(tile, flagged);
  }

  render() {
    const tile = this.props.tile;
    let text = "";
    let klass = ""
    if (tile.flagged === true) {
      klass = 'flagged';
      text = "⚑";
    }
    if (tile.explored === true) {
      if (tile.bombed === true) {
        klass = 'bombed';
        text = "☢";
      } else {
        klass = 'explored';
        if (tile.adjacentBombCount() > 0) {
        text = tile.adjacentBombCount(); 
      }
    }
    }
      klass = "tile " + klass
    return (
      <div className={klass} onClick={this.handleClick}>{text}</div>
    )
  }
}

export default Tile;