
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

function Letter({letterPos, attemptNum}) {
   const {board, correctWord, currAttempt, disabledLetters, setDisabledLetters} = useContext(AppContext);
   const letter = board[attemptNum][letterPos];

   const correct = letter === correctWord.toUpperCase()[letterPos] ;
   const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
// dont forget !correct as almost correct should not contain all correct
  
   const letterState= currAttempt.attempt > attemptNum &&  (correct ? "correct" : almost ? "almost" : "error" );
  // as soon as we enter the attempt current will become +1 (new line)

  useEffect(()=>{
    if(letter !== "" && letterState!=="correct" && letterState!=="almost"){
        setDisabledLetters((prev)=>[...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className='letter' id={letterState}>
      {letter}
    </div>
  )
}

export default Letter
