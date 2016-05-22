import React, { Component } from 'react'

export default class ChooseTurns extends Component {

  handleClick = (e) => {
    const value = e.target.value;
    let action = 'add';
    if(value === 'del') action = 'del';
    else if(value === 'ok') action = 'ok';

    this.props.prepareMove(value, action);
  };

  render() {
    const { game, user } = this.props;
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
        <button type="button" className="cancel" value="del" onClick={this.handleClick}>a</button>
        <button type="button" className="ok" value="ok" onClick={this.handleClick}>n</button>

      </div>
    );
  }
}

