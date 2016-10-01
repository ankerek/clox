import React from 'react'

const ChoosePlayer = ({ game, addPlayer }) => {

  return (
    <div>
      <button type="button" value="o" onClick={addPlayer}>Play as O!</button>
      <button type="button" value="x" onClick={addPlayer}>Play as X!</button>
      { /*game.players.length < 2 && <button type="button" onClick={addPlayer}>Play!</button>*/ }
    </div>
  );
}

export default ChoosePlayer;