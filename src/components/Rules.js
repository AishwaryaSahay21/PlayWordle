import React, { useContext } from 'react'
import {NavContext} from "./Navbar"

function Rules() {
  const {ruleBox, setRuleBox} = useContext(NavContext);
  return (
      <div className={ruleBox ? "dropdown-close" : "dropdown-open"}>
        <ul className="dropping">
            <li>Guess the correct English Letter</li>
            <li>If letter turns green: the letter is present in the correct word and is in it's right place</li>
            <li>If letter turns yellow: the letter is present in the correct word but not in it's right place</li>
            <li>If letter turns grey: the letter is not in the correct word</li>
        </ul>
     </div>
  )
}

export default Rules;
