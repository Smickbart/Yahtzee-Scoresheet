import React from "react";

import Options from "./options";

function Scores(props) {
  const options = [];
  const index = props.index;
  const scoreNumber = props.scoreNumber;
  const scoreMultiplier = Number(props.scoreMultiplier);
  
  if(scoreMultiplier > 50) {
    for(let i = 1; i < scoreNumber; i++) {
      options.push(<Options score={i*scoreMultiplier}/>)
    }
  } else if(scoreNumber > 6) {
    for(let i = 0; i < scoreNumber; i++) {
      if(i === 1 || i === 2 || i === 3 || i === 4) {
        continue;
      }
      options.push(<Options score={i}/>)
    }
  } else {
    for(let i = 0; i < scoreNumber; i++) {
      options.push(<Options score={i*scoreMultiplier}/>);
    }
  }

  return (
    <td className="scoresheet__cell">
      <select 
        className="scoresheet__score"
        name={props.name}
        onChange={(e) => props.onChange(e, index)}
        >
        <option></option>
        {options}
      </select>
    </td>
  )
}

export default Scores;