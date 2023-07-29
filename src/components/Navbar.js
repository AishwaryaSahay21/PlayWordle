import React, { createContext, useState } from 'react'
import Rules from './Rules'

export const NavContext = createContext();
function Navbar() {
  
  const [ruleBox, setRuleBox] = useState(true);

  const showRules = () => {
    if(ruleBox == true){
      setRuleBox(false);
    }
    else{
      setRuleBox(true);
    }
  }
 
  return (
    <div className='navbar'>
        <button className="navbtn" onClick={showRules}>Rules</button>
        <NavContext.Provider value={{ruleBox, setRuleBox}}>
          <Rules/> 
        </NavContext.Provider>
      <div className="title">Wordle</div>
      {/* <button className="navbtn"></button> */}
    </div>
  )
}

export default Navbar
