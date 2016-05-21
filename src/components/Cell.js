import React, { Component } from 'react'


export default class Cell extends Component {

  shouldComponentUpdate(nextProps) {
    if(this.props.cell.player === nextProps.cell.player) return false;
    return true;
  }

	handleClick = () => {
		const { cell, row, col } = this.props;
    if(cell.player) return;
		this.props.move({
			row,
			col
		})
	};

  render() {
    //console.log(this.props.col)
  	const { cell: { player }, move } = this.props;

  	let className = 'cell ';
  	if(player === 1) className += 'player-1';
    else if(player === 2) className += 'player-2';

    return (
    	<div className={className} onClick={this.handleClick}>
      { player }
      </div>
   	);
  }
}

