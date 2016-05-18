import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Board from './Board'
import { move } from '../actions/game'

@connect(
  state => ({
    game: state.game,
  }),
  dispatch => bindActionCreators({move}, dispatch)
)
export default class Counter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { game: { board }, move } = this.props;

    return (
      <Board board={board} move={move} />
    );
  }
}

