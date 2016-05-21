import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Board from './Board'
import Panel from './Panel'
import { move, addPlayer } from '../actions/game'

@connect(
  state => ({
    game: state.game,
    user: state.user
  }),
  dispatch => bindActionCreators({ 
    move,
    addPlayer
  }, dispatch)
)
export default class Counter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { game, user, socket, move, addPlayer } = this.props;

    return (
      <div>
        <Board game={game} user={user} move={move} />
        <Panel game={game} user={user} addPlayer={addPlayer} />
      </div>
    );
  }
}

