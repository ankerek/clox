import SocketIo from 'socket.io'
import { BOARD_SIZE, GAME_STATE_WAITING, GAME_STATE_PLAYING } from './constants/game'
import { checkWin } from './utils/game'

let board = [];

for (let i = 0; i < BOARD_SIZE; i++) {
  board.push([]);
  for (let j = 0; j < BOARD_SIZE; j++) {
    board[i].push({
      turns: 0,
      prepare: false
    });
  }
}

let game = {
  board,
  round: 1,
  turn: 'o',
  state: GAME_STATE_WAITING,
  starting: 1,
  players: []
}

let userId = 0;

export default function startServer(app) {
  const io = new SocketIo(app);

  io.on('connection', (socket) => {
    userId += 1;

    socket.emit('get user', { id: userId });
    socket.emit('load game', game);


    socket.on('game move', (data) => {
      console.log(data);
      const { payload: { row, col, turns, symbol } } = data;

      game.round += 1;
      game.turn = game.turn === 'o' ? 'x' : 'o';
      game.board[row][col] = {
        turns,
        symbol
      };

      // decrease 1 turn of every cell
      game.board.forEach((row) => {
        row.forEach((cell) => {
          if(cell.turns) cell.turns -= 1;
        })
      })

      io.sockets.emit('game change', { 
        round: game.round, 
        turn: game.turn,
        board: game.board,
        movePrep: null
      });

      // check for win in this move
      const isWin = checkWin({
        board: game.board,
        row,
        col,
        symbol,
      });

      if(isWin) {
        io.sockets.emit('game end', {
          winner: symbol
        })
      }

    });

    // add player to game
    socket.on('add player', (data) => {
      console.log(data);

      game.players.push(data);

      socket.broadcast.emit('add player', data.payload);

      // start game
      if(game.players.length === 2) io.sockets.emit('game change', {
        state: GAME_STATE_PLAYING
      });

    });

  });

}