import React from 'react'
import Letter from './Letter';

function Board() {
  return (
    <div className='board'>
        <div className="row">
            <Letter letterPos={0} attemptNum={0}/>
            <Letter letterPos={1} attemptNum={0}/>
            <Letter letterPos={2} attemptNum={0}/>
            <Letter letterPos={3} attemptNum={0}/>
            <Letter letterPos={4} attemptNum={0}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptNum={1}/>
            <Letter letterPos={1} attemptNum={1}/>
            <Letter letterPos={2} attemptNum={1}/>
            <Letter letterPos={3} attemptNum={1}/>
            <Letter letterPos={4} attemptNum={1}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptNum={2}/>
            <Letter letterPos={1} attemptNum={2}/>
            <Letter letterPos={2} attemptNum={2}/>
            <Letter letterPos={3} attemptNum={2}/>
            <Letter letterPos={4} attemptNum={2}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptNum={3}/>
            <Letter letterPos={1} attemptNum={3}/>
            <Letter letterPos={2} attemptNum={3}/>
            <Letter letterPos={3} attemptNum={3}/>
            <Letter letterPos={4} attemptNum={3}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptNum={4}/>
            <Letter letterPos={1} attemptNum={4}/>
            <Letter letterPos={2} attemptNum={4}/>
            <Letter letterPos={3} attemptNum={4}/>
            <Letter letterPos={4} attemptNum={4}/>    
        </div> 
    </div>
  )
}

export default Board
