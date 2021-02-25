import React, { Component } from 'react';

import PlayerName from "./playerName";
import Scores from "./scores";
import Totals from "./totals";
import UpperBonus from "./upperBonus";

class Table extends Component {
  render() {
    const players = this.props.players,
          nameRow = [],
          onesRow = [],
          twosRow = [],
          threesRow = [],
          foursRow =[],
          fivesRow = [],
          sixesRow = [],
          subtotalRow = [],
          bonusRow = [],
          threeOfKindRow = [],
          fourOfKindRow = [],
          fullHouseRow = [],
          smallStraightRow = [],
          largeStraightRow = [],
          yahtzeeRow = [],
          chanceRow = [],
          yahtzeeBonusRow = [],
          totalRow = [];

    players.forEach((player, i) => {
      nameRow.push(
        <PlayerName
          key={player.id}
          name={player.name}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="name"
        />);
        onesRow.push(
        <Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="ones"
          score={player.score.upperSection[0]}
          inputs={6}
          scoreMultiplier={1}
        />);
        twosRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="twos"
          score={player.score.upperSection[1]}
          inputs={6}
          scoreMultiplier={2}
        />);
        threesRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="threes"
          score={player.score.upperSection[2]}
          inputs={6}
          scoreMultiplier={3}
        />);
        foursRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="fours"
          score={player.score.upperSection[3]}
          inputs={6}
          scoreMultiplier={4}
        />);
        fivesRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="fives"
          score={player.score.upperSection[4]}
          inputs={6}
          scoreMultiplier={5}
        />);
        sixesRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="sixes"
          score={player.score.upperSection[5]}
          inputs={6}
          scoreMultiplier={6}
        />);
        subtotalRow.push(<Totals 
          key={player.id}
          score={player.score.subtotal}
        />);
        bonusRow.push(<UpperBonus
          key={player.id}
          score={player.score.upperBonus}
        />)
        threeOfKindRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="3oak"
          score={player.score.lowerSection[0]}
          inputs={31}
          scoreMultiplier={1}
        />);
        fourOfKindRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="4oak"
          score={player.score.lowerSection[1]}
          inputs={31}
          scoreMultiplier={1}
        />);
        fullHouseRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="fullHouse"
          score={player.score.lowerSection[2]}
          inputs={2}
          scoreMultiplier={25}
        />);
        smallStraightRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="smlStraight"
          score={player.score.lowerSection[3]}
          inputs={2}
          scoreMultiplier={30}
        />);
        largeStraightRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="lgStraight"
          score={player.score.lowerSection[4]}
          inputs={2}
          scoreMultiplier={40}
        />);
        yahtzeeRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="yahtzee"
          score={player.score.lowerSection[5]}
          inputs={2}
          scoreMultiplier={50}
        />);
        chanceRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="chance"
          score={player.score.lowerSection[6]}
          inputs={31}
          scoreMultiplier={1}
        />);
        yahtzeeBonusRow.push(<Scores 
          key={player.id}
          index={i}
          onClick={(e, index) => this.props.onClick(e, index)}
          headers="yahtzeeBonus"
          score={player.score.lowerSection[7]}
          inputs={4}
          scoreMultiplier={100}
        />);
        totalRow.push(<Totals 
          key={player.id}
          score={player.score.total}
        />);
    });

    return (
        <table className="scoresheet hidden">
          <thead>
            <tr className="scoresheet__row u-names">
              <th className="scoresheet__heading">Players</th>
              {nameRow}
            </tr>
          </thead>
          <tbody>
            <tr className="scoresheet__row u-upper">
              <th className="scoresheet__heading scoresheet__heading--row u-upper">Ones</th>
              {onesRow}
            </tr>
            <tr className="scoresheet__row u-upper">
              <th className="scoresheet__heading scoresheet__heading--row u-upper">Twos</th>
              {twosRow}
            </tr>
            <tr className="scoresheet__row u-upper">
              <th className="scoresheet__heading scoresheet__heading--row u-upper">Threes</th>
              {threesRow}
            </tr>
            <tr className="scoresheet__row u-upper">
              <th className="scoresheet__heading scoresheet__heading--row u-upper">Fours</th>
              {foursRow}
            </tr>
            <tr className="scoresheet__row u-upper">
              <th className="scoresheet__heading scoresheet__heading--row u-upper">Fives</th>
              {fivesRow}
            </tr>
            <tr className="scoresheet__row u-upper">
              <th className="scoresheet__heading scoresheet__heading--row u-upper">Sixes</th>
              {sixesRow}
            </tr>
            <tr className="scoresheet__row u-total">
              <th className="scoresheet__heading scoresheet__heading--row u-total">subtotal</th>
              {subtotalRow}
            </tr>
            <tr className="scoresheet__row u-total">
              <th className="scoresheet__heading scoresheet__heading--row u-total">bonus</th>
              {bonusRow}
            </tr>
            <tr className="scoresheet__row u-lower">
              <th className="scoresheet__heading scoresheet__heading--row u-lower">3 of a kind</th>
              {threeOfKindRow}
            </tr>
            <tr className="scoresheet__row u-lower">
              <th className="scoresheet__heading scoresheet__heading--row u-lower">4 of a kind</th>
              {fourOfKindRow}
            </tr>
            <tr className="scoresheet__row u-lower">
              <th className="scoresheet__heading scoresheet__heading--row u-lower">full house</th>
              {fullHouseRow}
            </tr>
            <tr className="scoresheet__row u-lower">
              <th className="scoresheet__heading scoresheet__heading--row u-lower">s.straight</th>
              {smallStraightRow}
            </tr>
            <tr className="scoresheet__row u-lower">
              <th className="scoresheet__heading scoresheet__heading--row u-lower">l.straight</th>
              {largeStraightRow}
            </tr>
            <tr className="scoresheet__row u-lower">
              <th className="scoresheet__heading scoresheet__heading--row u-lower">yahtzee</th>
              {yahtzeeRow}
            </tr>
            <tr className="scoresheet__row u-lower">
              <th className="scoresheet__heading scoresheet__heading--row u-lower">chance</th>
              {chanceRow}
            </tr>
            <tr className="scoresheet__row u-lower">
              <th className="scoresheet__heading scoresheet__heading--row u-lower">yahtzee bonus</th>
              {yahtzeeBonusRow}
            </tr>
            <tr className="scoresheet__row u-total">
              <th className="scoresheet__heading scoresheet__heading--row u-total">total</th>
              {totalRow}
            </tr>
          </tbody>          
        </table>
    )
  }
}

export default Table;