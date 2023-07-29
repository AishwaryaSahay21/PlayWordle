import React, { useContext } from 'react'
import { AppContext } from '../App';

function GameOver() {
    const {gameOver, setGameOver, currAttempt, correctWord} = useContext(AppContext);

  return (
    <div className='gameover'>
      <h3>{gameOver.guessedRight ? "You Correctly Guessed!" : "You Failed"}</h3>
     <h2>Correct Word : {correctWord}</h2>
     {gameOver.guessedRight && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver
