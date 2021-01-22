import React from "react";

function Totals(props) {
  return (
    <td className="scoresheet__cell" value={props.score}>{props.score}</td>
  )
}

export default Totals;