import React, { Component } from 'react'
import ChooseLives from './ChooseLives'

export default class Board extends Component {


  addPlayer = () => {
    const { game: { players }, user, addPlayer } = this.props;
    if(players.length < 2) {
      addPlayer({
        userId: user.id
      }, true)
    }
  };

  render() {
    const { game, user } = this.props;
    //console.log(players)
    return (
      <div className="panel">
        <div>Round: {game.round}</div>
        <div>Turn: {game.turn}</div>
        <div>UserId: {user.id}</div>
        <div></div>
        { game.players.length < 2 && <button type="button" onClick={this.addPlayer}>Play!</button>}

        <ChooseLives />
      </div>
    );
  }
}

