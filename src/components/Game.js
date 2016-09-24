import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Board from './Board'
import Panel from './Panel'
import { prepareMove, move, addPlayer } from '../actions/game'

@connect(
  state => ({
    game: state.game,
    user: state.user
  }),
  dispatch => ({
    actions: bindActionCreators({ 
      prepareMove,
      move,
      addPlayer
    }, dispatch)
  })
)
export default class Counter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { game, user, socket, actions } = this.props;

    const player = game.players.findIndex((pl) => pl.userId === user.id) + 1;

    const gameClass = `player-${player}`;
    
    return (
      <div className={gameClass}>
        <Board game={game} player={player} user={user} actions={actions} />
        <Panel game={game} user={user} actions={actions} />
      </div>
    );
  }
}

