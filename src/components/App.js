import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Game from './Game'

require('../theme/styles/main.css')

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  render() {
    const { store, socket } = this.props;
    return (
      <Provider store={store}>
        <Game socket={socket} />
      </Provider>
    );
  }
}
