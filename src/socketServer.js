import SocketIo from 'socket.io'
import { BOARD_SIZE } from './constants'

let board = [];

for (let i = 0; i < BOARD_SIZE; i++) {
  board.push([]);
  for (let j = 0; j < BOARD_SIZE; j++) {
    board[i].push(0);
  }
}

let game = {
	board,
	round: 1,
	turn: 1,
	state: 0,
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
	    
	    const { result: { row, col, player } } = data;

	    game.round += (player === game.starting) ? 0 : 1;
	    game.turn = game.turn === 1 ? 2 : 1;
	    game.board[row][col] = {
	    	player
	    };
	    io.sockets.emit('game change', { 
	    	round: game.round, 
	    	turn: game.turn,
	    	board: game.board 
	    });
	  });

	  socket.on('add player', (data) => {
	    console.log(data);

	    game.players.push(data);

	    socket.broadcast.emit('add player', data.result);
	  });

  });

}