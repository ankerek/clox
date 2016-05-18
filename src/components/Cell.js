import React, { Component } from 'react'


export default class Cell extends Component {

	handleClick = () => {
		const { row, col } = this.props;
		this.props.move({
			row,
			col,
			player: 2
		})
	};

  render() {
  	const { value, move } = this.props;
  	let className = 'cell ';
  	if(value === 2) className += 'orange';
    return (
    	<div className={className} onClick={this.handleClick}>
      { value }
      </div>
   	);
  }
}

