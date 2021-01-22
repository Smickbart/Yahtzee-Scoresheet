import React, { Component } from 'react';

class playerName extends Component {
  render() {
    const { index, headers, name } = this.props;
  
    return (
      <th className="scoresheet__cell scoresheet__cell--names" onClick={(e) => this.props.onClick(e, index)} headers={headers}>{name}</th>
    );
  }
}

export default playerName;