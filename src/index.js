import io from 'socket.io-client'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './utils/configureStore'
import clientSockets from './clientSockets'
import App from './components/App'


const socket = io.connect('http://localhost:3000');

const rootEl = document.getElementById('root');
const store = configureStore(undefined, socket);

clientSockets(socket, store);

ReactDOM.render(
  <AppContainer>
    <App store={store} socket={socket} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp store={store} />
      </AppContainer>,
      rootEl
    );
  });
}