import React, { Component } from 'react'
import Cell from './Cell'

export default class Board extends Component {

  handleMove = (data) => {
    const { game, user } = this.props;

    const player = game.players.findIndex((pl) => pl.userId === user.id) + 1;
    if(player !== -1 && game.turn === player)
      this.props.move({
        ...data, 
        userId: user.id,
        player: player
      });
  };

  render() {
    const { game: { board } } = this.props;

    return (
      <div className="board">
        <div className="board-inner"></div>
        {
          board.map((row, rowIndex) => row.map((cell, colIndex) => <Cell key={colIndex} row={rowIndex} col={colIndex} cell={cell} move={this.handleMove} />))
        }
      </div>
    );
  }
}

