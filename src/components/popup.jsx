import React, { Component } from 'react';

class popup extends Component {
  render() {
    const scoreButtons = [];
    let { scoreNumber, scoreMultiplier } = this.props;

    for(let i = 0; i < scoreNumber; i++) {
      if(scoreNumber > 6) {
        if(i > 0 && i < 6) {
          continue;
        }
      }
      const score = i*scoreMultiplier;
      const id = "btn#" + i;
      scoreButtons.push(
        <input type="radio" name="score" className="popup__radio" id={id} value={score} onChange={this.props.onChange}/>,
        <label for={id} className="btn btn__score">{score}</label>
      )
    }

    return (
      <div className="popup hidden">
        <div className="popup__content">
          <p id="close" className="popup__close" onClick={this.props.onClick}>&#215;</p>
          <h2 className="popup__heading">Heading</h2>
          <form className="popup__scores">
            {scoreButtons.map(item => item)}      
            <button type="button" id="submit" className="btn btn--default btn--submit" onClick={this.props.onClick}>OK</button>
          </form>
        </div>
      </div>
    );
  }
}

export default popup;