import React, { Component } from 'react';

class scores extends Component {
  render() {
    const { index, scoreNumber, scoreMultiplier, headers } = this.props;

    return (
      <td className="scoresheet__cell" onClick={this.props.onClick} headers={headers}></td>
    );
  }
}

export default scores;