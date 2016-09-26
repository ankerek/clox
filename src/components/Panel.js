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
    // const { game, actions } = this.props;

    // if(game.movePrep) 
    //   if(gameAction === 'ok') {
    //     if(game.movePrep.turns === 0) {
    //       alert('You can\'t play 0!');
    //       return;
    //     }
    //     actions.move({
    //       row: game.movePrep.row,
    //       col: game.movePrep.col,
    //       turns: game.movePrep.turns,
    //       player: game.movePrep.player
    //     })
    //   } else {
    //     actions.prepareMove({
    //       row: game.movePrep.row,
    //       col: game.movePrep.col,
    //       turns,
    //       player: game.movePrep.player,
    //       gameAction
    //     })
    //   }

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
    //console.log(players)
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

