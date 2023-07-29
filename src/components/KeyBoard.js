import React, { useCallback } from 'react'
import Key from './Key'
import { useEffect } from 'react';
import { AppContext } from '../App';
import { useContext } from 'react';

function KeyBoard() {

    const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const line3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const {onDelete, onEnter, onLetter, disabledLetters, setDisabledLetters} = useContext(AppContext);
    
    const handleKeyboard = useCallback((event)=>{
          if(event.key === "Enter"){ 
             onEnter();
          }

          else if(event.key === "Backspace"){
            onDelete();
          }

          else{
            line1.forEach((key) => {
              if(event.key.toLowerCase() === key.toLowerCase()){
                onLetter(key);
              }
            });
            line2.forEach((key) => {
              if(event.key.toLowerCase() === key.toLowerCase()){
                onLetter(key);
              }
            });
            line3.forEach((key) => {
              if(event.key.toLowerCase() === key.toLowerCase()){
                onLetter(key);
              }
            });
          }
    }); 

    useEffect (() => {
       document.addEventListener("keydown", handleKeyboard);
       return () => {
        document.removeEventListener("keydown", handleKeyboard);
       }
    }, [handleKeyboard])

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className="keytitle">
      Keyboard
      </div> 
      <div className="keyrow1">
        {line1.map((key) => {
        return <Key KeyVal={key} disabled={disabledLetters.includes(key)}/>; })
        }
      </div>
      <div className="keyrow2">
        {line2.map((key) => {
        return <Key  KeyVal={key} disabled={disabledLetters.includes(key)} />; })
        }
      </div>
      <div className="keyrow3">
        <Key KeyVal={"Enter"} bigKey/>
        {line3.map((key) => {
        return <Key  KeyVal={key} disabled={disabledLetters.includes(key)} />; })
        }
        <Key KeyVal={"Delete"} bigKey />
      </div>
    </div>
  )
}

export default KeyBoard
