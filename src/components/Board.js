import React, { Component } from 'react'
import Cell from './Cell'

export default class Board extends Component {

  handleMove = (data) => {

    



    this.props.move(data);
  };

  render() {
    const { board } = this.props;

    return (
      <div className="board">
        <div className="board-inner"></div>
        {
          board.map((row, rowIndex) => row.map((value, colIndex) => <Cell key={colIndex} row={rowIndex} col={colIndex} value={value} move={this.handleMove} />))
        }
      </div>
    );
  }
}

