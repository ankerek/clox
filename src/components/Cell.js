import React, { Component } from 'react'
import { TURN_ADD, TURN_OK, TURN_DEL } from '../constants/game'
import classNames from 'classnames'

export default class Cell extends Component {

  shouldComponentUpdate(nextProps) {
    if(this.props.cell.turns === nextProps.cell.turns && this.props.cell.prepare === nextProps.cell.prepare) return false;
    return true;
  }

  handleClick = (e) => {
    const { cell, row, col } = this.props;
    const key = e.key;

    //if(cell.turns && !cell.prepare || (e.type === 'keydown' && key !== 'Enter' && key !== 'Backspace' && isNaN(key))) return;

    // let turnAction = TURN_ADD;
    // if(key === 'Enter') turnAction = TURN_OK;
    // else if(key === 'Backspace') turnAction = TURN_DEL;
    
    this.props.move(row, col);
  };

  render() {
    const { cell: { symbol, turns, prepare } } = this.props;
    
    const cellClass = classNames({
      'cell': true,
      [`symbol-${symbol}`]: symbol && turns,
      prepare
    })

    return (
      <div className={cellClass} onClick={this.handleClick} tabIndex="1">
        { turns !== 0 && turns }
      </div>
    );
  }
}

