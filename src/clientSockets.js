import { getUser } from './actions/user'
import { loadGame, gameChange, gameEnd, addPlayer } from './actions/game'

export default function(socket, store) {

  socket.on('get user', (data) => {
    store.dispatch(getUser(data));
  });

  socket.on('load game', (data) => {
    store.dispatch(loadGame(data));
  });

  socket.on('game change', (data) => {
    store.dispatch(gameChange(data));
  });

  socket.on('game end', (data) => {
    store.dispatch(gameEnd(data));
  });

  socket.on('add player', (data) => {
    store.dispatch(addPlayer(data));
  });
}