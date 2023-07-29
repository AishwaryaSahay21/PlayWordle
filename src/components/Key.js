import React from 'react'
import { useContext } from 'react' 
import { AppContext } from '../App'

function Key({KeyVal, bigKey, disabled}) {

  const {onLetter, onEnter, onDelete }= useContext(AppContext);
  
  const sellectKey =  () => {

    if(KeyVal === "Enter"){
       onEnter();
    }
    else if(KeyVal === "Delete"){
      onDelete();
    }
    else{
      onLetter(KeyVal);
  }
}

  return (
    <div className='key' id={bigKey ? "big" : disabled &&  "disabled"}
    onClick={sellectKey} >
      {KeyVal}
    </div> 
  )
}

export default Key 
