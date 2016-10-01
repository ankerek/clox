import React, { Component } from 'react'
import { handleMove } from '../utils/game'
import ChoosePlayer from './ChoosePlayer'
import ChooseTurns from './ChooseTurns'

export default class Board extends Component {


  addPlayer = ({ target: { value }}) => {
    const { game: { players }, user, actions } = this.props;
    if(players.length < 2) {
      actions.addPlayer({
        userId: user.id,
        symbol: value
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
        <div>State: {game.state}</div>
        <div>Round: {game.round}</div>
        <div>Turn: {game.turn}</div>
        <div>UserId: {user.id}</div>
        <div></div>
        <ChoosePlayer game={game} addPlayer={this.addPlayer} />
        { /*game.players.length < 2 && <button type="button" onClick={this.addPlayer}>Play!</button> */}

        <ChooseTurns prepareMove={this.prepareMove} />
      </div>
    );
  }
}

