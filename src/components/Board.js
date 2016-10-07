import React, { Component } from 'react'
import { GAME_STATE_PLAYING } from '../constants/game'
import { handleMove } from '../utils/game'
import Cell from './Cell'

export default class Board extends Component {

  handleMove = (row, col) => {
    const { game, symbol, actions } = this.props;

    if (game.state === GAME_STATE_PLAYING && symbol && game.turn === symbol) {
      actions.prepareMove({
        row,
        col,
        symbol
      });

      // handleMove({
      //   props: this.props,
      //   newMove,
      //   turnAction
      // })
    }

  };

  render() {
    const { game: { board }, symbol } = this.props;

    return (
      <div className="board">
        <div className="board-inner"></div>
        { board.map((row, rowIndex) => row.map((cell, colIndex) => <Cell key={colIndex} row={rowIndex} col={colIndex} cell={cell} move={this.handleMove} />)) }
      </div>
    );
  }
}

