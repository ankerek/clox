import { BOARD_SIZE } from '../constants'

export function checkWin({ board, row, col, player }) {
	let r = row;
  let c = col ? col - 1 : 0;
  let sum = 0;

  // check rows *****
  while(c >= 0 && board[r][c] === player) {
  	sum++;
  	c--;
  }

  c = col;
  while(c < BOARD_SIZE && board[r][c] === player) {
  	sum++;
  	c++;
  }

  if(sum >= 5) return true;  

  // check columns 
  // *
  // *
  // *
  
  r = row ? row - 1 : 0;
  c = col;
  sum = 0;

  while(r >= 0 && board[r][c] === player) {
  	sum++;
  	r--;
  }

  r = row;
  while(r < BOARD_SIZE && board[r][c] === player) {
  	sum++;
  	r++;
  }

  if(sum >= 5) return true; 
  // diagonals
  // 
  
  r = row ? row - 1 : 0;
  c = col ? col - 1 : 0;
  sum = 0;
  while(r >= 0 && c >= 0 && board[r][c] === player) {
  	sum++;
  	r--;
  	c--;
  }
  r = row;
  c = col;
  while(r < BOARD_SIZE && c < BOARD_SIZE && board[r][c] === player) {
  	sum++;
  	r++;
  	c++;
  }

  if(sum >= 5) return true; 

  r = row ? row + 1 : 0;
  c = col ? col - 1 : 0;
  sum = 0;
  while(r < BOARD_SIZE && c >= 0 && board[r][c] === player) {
  	sum++;
  	r++;
  	c--;
  }
  r = row;
  c = col;
  while(r >= 0 && c < BOARD_SIZE && board[r][c] === player) {
  	sum++;
  	r--;
  	c++;
  }

  if(sum >= 5) return true; 

  return false;
}