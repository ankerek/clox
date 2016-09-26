import React, { Component } from 'react'
import { handleMove } from '../utils/game'
import Cell from './Cell'

export default class Board extends Component {

  handleMove = (newMove, turnAction) => {
    const { game, user, player } = this.props;

    // if (player !== -1 && game.turn === player) {
    //   this.props.actions.prepareMove({
    //     ...data, 
    //     userId: user.id,
    //     player,
    //     //turns: 0
    //   });
    // } else if(game.turn !== player) console.log('It is not your turn!')

    if (player !== -1 && game.turn === player) {
      handleMove({
        props: this.props,
        newMove,
        turnAction
      })
    }

  };

  render() {
    const { game: { board } } = this.props;

    return (
      <div className="board">
        <div className="board-inner"></div>
        { board.map((row, rowIndex) => row.map((cell, colIndex) => <Cell key={colIndex} row={rowIndex} col={colIndex} cell={cell} move={this.handleMove} />)) }
      </div>
    );
  }
}

