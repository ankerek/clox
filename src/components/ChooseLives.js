import React, { Component } from 'react'

export default class ChooseLives extends Component {

  handleClick = (e) => {
    console.log(e.target.value)
  };

  render() {
    const { game, user } = this.props;
    return (
      <div className="choose-lives">
        <button type="button" value={1} onClick={this.handleClick}>1</button>
        <button type="button" value={2} onClick={this.handleClick}>2</button>
        <button type="button" value={3} onClick={this.handleClick}>3</button>
        <button type="button" value={4} onClick={this.handleClick}>4</button>
        <button type="button" value={5} onClick={this.handleClick}>5</button>
        <button type="button" value={6} onClick={this.handleClick}>6</button>
        <button type="button" value={7} onClick={this.handleClick}>7</button>
        <button type="button" value={8} onClick={this.handleClick}>8</button>
        <button type="button" value={9} onClick={this.handleClick}>9</button>

      </div>
    );
  }
}

