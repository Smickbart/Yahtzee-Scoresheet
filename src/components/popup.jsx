import React, { Component } from 'react';

class popup extends Component {
  render() {
    const scoreButtons = [];
    let { inputs, scoreMultiplier, playerName, row } = this.props;

    switch(row) {
      case "3oak":
        row = "3 of a kind";
        break;
      case "4oak":
        row = "4 of a kind";
        break;
      case "fullHouse":
        row = "full house";
        break;
      case "smlStraight":
        row = "sml. straight";
        break;
      case "lgStraight":
        row = "lg. straight";
        break;
      case "yahtzeeBonus":
        row = "yahtzee bonus";
        break;
      default:
        // do nothing. 
    }

    if(inputs === "name") {
      scoreButtons.push(
        <input type="text" id="biggyhits" className="popup__text-box" onChange={this.props.onChange} name="name" value={playerName} maxlength="12"/>
      );
    } else {
      for(let i = 0; i < inputs; i++) {
        if(inputs > 6) {
          if(i > 0 && i < 6) {
            continue;
          }
        }
        const score = scoreMultiplier < 100 ? i*scoreMultiplier : (i+1)*scoreMultiplier;
        const id = "btn#" + i;
        scoreButtons.push(
          <input type="radio" name="score" className="popup__radio" id={id} value={score} onChange={this.props.onChange} />,
          <label for={id} className="btn btn__score">{score}</label>
        )
      }
      scoreButtons.push(
        <input type="radio" name="score" className="popup__radio" id="delete-button" value="" onChange={this.props.onChange}/>,
        <label for="delete-button" className="btn btn__score btn__score--del">del</label>
      )
    }

    return (
      <div className="popup hidden">
        <div className="popup__content">
          <p id="close" className="popup__close" onClick={this.props.onClick}>&#215;</p>
          <h2 className="popup__heading">{row}</h2>
          <form className="popup__scores">
            {scoreButtons.map(item => item)}      
            <button type="submit" id="submit" className="btn btn--default btn--submit" onClick={this.props.onClick}>OK</button>
          </form>
        </div>
      </div>
    );

  }
}

export default popup;