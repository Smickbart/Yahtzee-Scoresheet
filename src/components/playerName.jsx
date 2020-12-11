import React from 'react';

function PlayerName(props) {
  const index = props.index;
  return (
    <th className="scoresheet__cell">
      <input 
        className="scoresheet__name"
        type="text"
        name="name"
        value={props.name}
        onChange={(e) => props.onChange(e, index)}
      />
    </th>
  );
}

export default PlayerName;