import React, { Component } from 'react'
import classNames from 'classnames'

export default class Cell extends Component {

  shouldComponentUpdate(nextProps) {
    if(this.props.cell.turns === nextProps.cell.turns && this.props.cell.prepare === nextProps.cell.prepare) return false;
    return true;
  }

	handleClick = () => {
		const { cell, row, col } = this.props;
    if(cell.turns) return;
		this.props.move({
			row,
			col
		})
	};

  render() {
  	const { cell: { player, turns, prepare }, move } = this.props;

    const cellClass = classNames({
      'cell': true,
      [`player-${player}`]: player && turns,
      'prepare': prepare
    })
  	// let className = 'cell ';
  	// if(player === 1) className += 'player-1';
   //  else if(player === 2) className += 'player-2';

   //  if(prepare) className += ' prepare'

    return (
    	<div className={cellClass} onClick={this.handleClick}>
        { turns !== 0 && turns }
      </div>
   	);
  }
}

