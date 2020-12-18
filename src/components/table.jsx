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
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        onesRow.push(
        <Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="ones"
          scoreNumber={6}
          scoreMultiplier={1}
        />);
        twosRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="twos"
          scoreNumber={6}
          scoreMultiplier={2}
        />);
        threesRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="threes"
          scoreNumber={6}
          scoreMultiplier={3}
        />);
        foursRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="fours"
          scoreNumber={6}
          scoreMultiplier={4}
        />);
        fivesRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="fives"
          scoreNumber={6}
          scoreMultiplier={5}
        />);
        sixesRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="sixes"
          scoreNumber={6}
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
          onChange={(e, index) => this.props.onChange(e, index)}
          name="3oak"
          scoreNumber={31}
          scoreMultiplier={1}
        />);
        fourOfKindRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="4oak"
          scoreNumber={31}
          scoreMultiplier={1}
        />);
        fullHouseRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="fullHouse"
          scoreNumber={2}
          scoreMultiplier={25}
        />);
        smallStraightRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="smlStraight"
          scoreNumber={2}
          scoreMultiplier={30}
        />);
        largeStraightRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="lgStraight"
          scoreNumber={2}
          scoreMultiplier={40}
        />);
        yahtzeeRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="yahtzee"
          scoreNumber={2}
          scoreMultiplier={50}
        />);
        chanceRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="chance"
          scoreNumber={31}
          scoreMultiplier={1}
        />);
        yahtzeeBonusRow.push(<Scores 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
          name="yahtzeeBonus"
          scoreNumber={4}
          scoreMultiplier={100}
        />);
        totalRow.push(<Totals 
          key={player.id}
          score={player.score.total}
        />);
    });

    return (
        <table className="scoresheet">
          <thead>
            <tr className="scoresheet__row names">
              <th className="scoresheet__heading names">Players</th>
              {nameRow}
            </tr>
          </thead>
          <tbody>
            <tr className="scoresheet__row upper">
              <th className="scoresheet__heading scoresheet__heading--row upper">Ones</th>
              {onesRow}
            </tr>
            <tr className="scoresheet__row upper">
              <th className="scoresheet__heading scoresheet__heading--row upper">Twos</th>
              {twosRow}
            </tr>
            <tr className="scoresheet__row upper">
              <th className="scoresheet__heading scoresheet__heading--row upper">Threes</th>
              {threesRow}
            </tr>
            <tr className="scoresheet__row upper">
              <th className="scoresheet__heading scoresheet__heading--row upper">Fours</th>
              {foursRow}
            </tr>
            <tr className="scoresheet__row upper">
              <th className="scoresheet__heading scoresheet__heading--row upper">Fives</th>
              {fivesRow}
            </tr>
            <tr className="scoresheet__row upper">
              <th className="scoresheet__heading scoresheet__heading--row upper">Sixes</th>
              {sixesRow}
            </tr>
            <tr className="scoresheet__row upper">
              <th className="scoresheet__heading scoresheet__heading--row upper">subtotal</th>
              {subtotalRow}
            </tr>
            <tr className="scoresheet__row upper">
              <th className="scoresheet__heading scoresheet__heading--row upper">bonus</th>
              {bonusRow}
            </tr>
            <tr className="scoresheet__row lower">
              <th className="scoresheet__heading scoresheet__heading--row lower">3 of a kind</th>
              {threeOfKindRow}
            </tr>
            <tr className="scoresheet__row lower">
              <th className="scoresheet__heading scoresheet__heading--row lower">4 of a kind</th>
              {fourOfKindRow}
            </tr>
            <tr className="scoresheet__row lower">
              <th className="scoresheet__heading scoresheet__heading--row lower">full house</th>
              {fullHouseRow}
            </tr>
            <tr className="scoresheet__row lower">
              <th className="scoresheet__heading scoresheet__heading--row lower">s.straight</th>
              {smallStraightRow}
            </tr>
            <tr className="scoresheet__row lower">
              <th className="scoresheet__heading scoresheet__heading--row lower">l.straight</th>
              {largeStraightRow}
            </tr>
            <tr className="scoresheet__row lower">
              <th className="scoresheet__heading scoresheet__heading--row lower">yahtzee</th>
              {yahtzeeRow}
            </tr>
            <tr className="scoresheet__row lower">
              <th className="scoresheet__heading scoresheet__heading--row lower">chance</th>
              {chanceRow}
            </tr>
            <tr className="scoresheet__row lower">
              <th className="scoresheet__heading scoresheet__heading--row lower">yahtzee bonus</th>
              {yahtzeeBonusRow}
            </tr>
            <tr className="scoresheet__row total">
              <th className="scoresheet__heading scoresheet__heading--row total">total</th>
              {totalRow}
            </tr>
          </tbody>          
        </table>
    )
  }
}

export default Table;