import './App.css';
import Navbar from './components/Navbar';
import Board from './components/Board';
import KeyBoard from './components/KeyBoard'
import { useEffect, useState, createContext } from 'react';
import { boardDef, generateWordSet } from './Words';
import GameOver from './components/GameOver';

export const AppContext = createContext();
// this is used to pass values directly to components present inside it

function App() {
  const [board, setBoard] = useState(boardDef);
  const [currAttempt, setCurrAttempt] = useState({attempt:0, letterPos:0});
  const [correctWord, setCorrectWord] = useState(""); 
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver:false, guessedRight: false})

  useEffect(()=>{
    generateWordSet().then((words) => {
        // console.log(wordSet);
        setWordSet(words.wordSet);
        setCorrectWord(words.chosenWord);
    });
  }, []);  //since the sq brackets are empty, it will rum once

  const onLetter = (KeyVal) => {
    if(currAttempt.letterPos > 4){return; }
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos]= KeyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
  }

  const onEnter = () => {
    if(currAttempt.letterPos !== 5){return;}
    let currWord ="";
    for(let i=0; i<5; i++){
      currWord += board[currAttempt.attempt][i];
    }
    // console.log(currWord.toLowerCase());

    if(wordSet.has(currWord.toLowerCase())){
     setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
  }else{
    alert("Word not found");
  }

  if(currWord === correctWord){
    // alert("You Won!")
    setGameOver({gameOver: true, guessedRight: true});
    return; //returning  cuz we dont need to go further
  }

  if(currAttempt.attempt === 4 && wordSet.has(currWord.toLowerCase())){
    setGameOver({gameOver:true, guessedRight:false});
  }
};

  const onDelete = () => {
    if(currAttempt.letterPos === 0){return;}
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos-1] = "";
      setBoard(newBoard);
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos-1});
  } 
  return (
    <div className="App">
    <Navbar/>
    <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt, onLetter, onDelete, onEnter, correctWord, disabledLetters, setDisabledLetters, gameOver, setGameOver}}>
      <Board/>
      {gameOver.gameOver ? <GameOver/> : <KeyBoard/>}
    </AppContext.Provider>
    </div>
  );
}

export default App; 
