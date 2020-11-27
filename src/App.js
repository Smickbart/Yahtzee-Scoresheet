import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function Options(props) {
  return (
    <option>{props.score}</option>
  )
}

function UpperBonus(props) {
  return (
    <td className="table__cell">
      <p>{props.score}</p>
    </td>
  )
}

function Totals(props) {
  return (
    <td className="table__cell">
      <p>{props.score}</p>
    </td>
  )
}

function Scores(props) {
  const options = [];
  const index = props.index;
  const scoreNumber = props.scoreNumber;
  const scoreMultiplier = Number(props.scoreMultiplier);
  
  if(scoreMultiplier > 50) {
    for(let i = 1; i < scoreNumber; i++) {
      options.push(<Options score={i*scoreMultiplier}/>)
    }
  } else if(scoreNumber > 6) {
    for(let i = 0; i < scoreNumber; i++) {
      if(i === 1 || i === 2 || i === 3 || i === 4) {
        continue;
      }
      options.push(<Options score={i}/>)
    }
  } else {
    for(let i = 0; i < scoreNumber; i++) {
      options.push(<Options score={i*scoreMultiplier}/>);
    }
  }

  return (
    <td className="table__cell">
      <select 
        className="table__score"
        name={props.name}
        onChange={(e) => props.onChange(e, index)}
        >
        <option></option>
        {options}
      </select>
    </td>
  )
}

function PlayerName(props) {
  const index = props.index;
  return (
    <th className="table__heading">
      <input 
        className="table__names"
        type="text"
        name="name"
        value={props.name}
        onChange={(e) => props.onChange(e, index)}
      />
    </th>
  );
}

class Table extends React.Component {
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
      <div className="scoresheet">
        <table className="table">
          <tr className="table__row">
            <th className="table__heading">Upper Section</th>
            {nameRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">Ones</td>
            {onesRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">Twos</td>
            {twosRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">Threes</td>
            {threesRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">Fours</td>
            {foursRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">Fives</td>
            {fivesRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">Sixes</td>
            {sixesRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">subtotal</td>
            {subtotalRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">bonus</td>
            {bonusRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">3 of a kind</td>
            {threeOfKindRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">4 of a kind</td>
            {fourOfKindRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">full house</td>
            {fullHouseRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">sm. straight</td>
            {smallStraightRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">lg. straight</td>
            {largeStraightRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">yahtzee</td>
            {yahtzeeRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">chance</td>
            {chanceRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">yahtzee bonus</td>
            {yahtzeeBonusRow}
          </tr>
          <tr className="table__row">
            <td className="table__cell--key">total</td>
            {totalRow}
          </tr>
        </table>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addPlayers = this.addPlayers.bind(this);
    this.state = {
      players: []
    }
  }

  addPlayers(e) {
    const players = [];
    const quantity = e.target.value;

    for(let i = 0; i < quantity; i++) {
      players.push({ 
        name: "",
        score: {
          upperSection: Array(6).fill(0), // These are the scores for ones through sixes.
          subtotal: null,
          upperBonus: null,
          lowerSection: Array(8).fill(0), // scores for 3oak, 4oak, fh, sm.str, lg.str, ytz & chc.
          total: null
        },
        id: "player#" + (i+1)
      }); 
    }
    
    this.setState(state => state.players = players);
  }

  handleChange(e, index) {
    const players = this.state.players.slice();
    const value = e.target.value;
    const name = e.target.name;
    const i = index;
    let upperSection = players[i].score.upperSection;
    let lowerSection = players[i].score.lowerSection;

    switch(name) {
      case "name":
        players[i].name = value;
        break;
      case "ones":
        upperSection[0] = Number(value);
        break;
      case "twos":
        upperSection[1] = Number(value);
        break;
      case "threes":
        upperSection[2] = Number(value);
        break;
      case "fours":
        upperSection[3] = Number(value);
        break;
      case "fives":
        upperSection[4] = Number(value);
        break;
      case "sixes":
        upperSection[5] = Number(value);
        break;
      case "3oak":
        lowerSection[0] = Number(value);
        break;
      case "4oak":
        lowerSection[1] = Number(value);
        break;
      case "fullHouse":
        lowerSection[2] = Number(value);
        break;
      case "smlStraight":
        lowerSection[3] = Number(value);
        break;
      case "lgStraight":
        lowerSection[4] = Number(value);
        break;
      case "yahtzee":
        lowerSection[5] = Number(value);
        break;
      case "chance":
        lowerSection[6] = Number(value);
        break;
      case "yahtzeeBonus":
        lowerSection[7] = Number(value);
        break;
    }

    players[i].score.subtotal = upperSection.reduce((t, n) => t + n);

    players[i].score.subtotal >= 63 ? players[i].score.upperBonus = 35 : players[i].score.upperBonus = 0;
    players[i].score.total = players[i].score.subtotal + players[i].score.upperBonus + lowerSection.reduce((t, n) => t + n)

    this.setState(state => state.players = players);
  }
  

  render() {
    const players = this.state.players;
    return (
      <div>
        <h1 className="heading__main">Yahtzee Scoresheet</h1>
        <div>
          <select onChange={this.addPlayers}>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <Table
          players={players}
          onChange={(e, index) => this.handleChange(e, index)}
        />
      </div>
    )
  }
}

export default App;
