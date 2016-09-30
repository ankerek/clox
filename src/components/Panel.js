import React, { Component } from 'react'
import { handleMove } from '../utils/game'
import ChooseTurns from './ChooseTurns'

export default class Board extends Component {


  addPlayer = () => {
    const { game: { players }, user, actions } = this.props;
    if(players.length < 2) {
      actions.addPlayer({
        userId: user.id
      }, true)
    }
  };

  prepareMove = (turns, turnAction) => {

    const { game: { movePrep } } = this.props;

    if(this.props.game.movePrep) 
      handleMove({ 
        props: this.props,
        newMove: {
          row: movePrep.row,
          col: movePrep.col,
          turns
        },
        turnAction
      })
  };

  render() {
    const { game, user } = this.props;
    
    return (
      <div className="panel">
        <div>Round: {game.round}</div>
        <div>Turn: {game.turn}</div>
        <div>UserId: {user.id}</div>
        <div></div>
        { game.players.length < 2 && <button type="button" onClick={this.addPlayer}>Play!</button>}

        <ChooseTurns prepareMove={this.prepareMove} />
      </div>
    );
  }
}

