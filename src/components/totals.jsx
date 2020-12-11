import React from "react";

function Totals(props) {
  return (
    <td className="scoresheet__cell">
      <p>{props.score}</p>
    </td>
  )
}

export default Totals;