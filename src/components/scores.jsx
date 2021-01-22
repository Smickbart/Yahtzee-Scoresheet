import React, { Component } from 'react';

class scores extends Component {
  render() {
    const { index, headers } = this.props;
    let { score } = this.props;

    if(isNaN(score)) {
      score = null;
    }

    return (
      <td className="scoresheet__cell" onClick={(e) => this.props.onClick(e, index)} headers={headers}>{score}</td>
    );
  }
}

export default scores;