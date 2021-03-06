import React, { Component } from 'react'
import { TURN_ADD, TURN_DEL, TURN_OK } from '../constants/game'

export default class ChooseTurns extends Component {

  handleClick = (e) => {
    let value = e.target.value;
    let turnAction = TURN_ADD;
    if(value === TURN_DEL) turnAction = TURN_DEL;
    else if(value === TURN_OK) turnAction = TURN_OK;

    this.props.prepareMove(Number(value), turnAction);
  };

  render() {
    
    return (
      <div className="choose-turns">
        <button type="button" value={1} onClick={this.handleClick}>1</button>
        <button type="button" value={2} onClick={this.handleClick}>2</button>
        <button type="button" value={3} onClick={this.handleClick}>3</button>
        <button type="button" value={4} onClick={this.handleClick}>4</button>
        <button type="button" value={5} onClick={this.handleClick}>5</button>
        <button type="button" value={6} onClick={this.handleClick}>6</button>
        <button type="button" value={7} onClick={this.handleClick}>7</button>
        <button type="button" value={8} onClick={this.handleClick}>8</button>
        <button type="button" value={9} onClick={this.handleClick}>9</button>
        <button type="button" value={0} onClick={this.handleClick}>0</button>
        <button type="button" className="cancel" value={TURN_DEL} onClick={this.handleClick}>a</button>
        <button type="button" className="ok" value={TURN_OK} onClick={this.handleClick}>n</button>

      </div>
    );
  }
}

