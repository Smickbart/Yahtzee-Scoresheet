import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function Options(props) {
  return (
    <option>{props.score}</option>
  )
}

function Chance(props) {  
  const options = [];
  for(let i = 0; i < 31; i++) {
    if(i === 1 || i === 2 || i === 3 || i === 4) {
      continue;
    }
    options.push(<Options score={i}/>)
  }
  return (
    <td className="table__cell">
      <select className="table__score">
        <option></option>
        {options}
      </select>
    </td>
  )
}

function Yahtzee(props) {
  const options = [];
  for(let i = 0; i < 2; i++) {
    options.push(<Options score={i*50}/>)
  }
  return (
    <td className="table__cell">
      <select className="table__score">
        <option></option>
        {options}
      </select>
    </td>
  )
}

function LargeStraight(props) {
  const options = [];
  for(let i = 0; i < 2; i++) {
    options.push(<Options score={i*40}/>)
  }
  return (
    <td className="table__cell">
      <select className="table__score">
        <option></option>
        {options}
      </select>
    </td>
  )
}

function SmallStraight(props) {
  const options = [];
  for(let i = 0; i < 2; i++) {
    options.push(<Options score={i*30}/>)
  }
  return (
    <td className="table__cell">
      <select className="table__score">
        <option></option>
        {options}
      </select>
    </td>
  )
}

function FullHouse(props) {
  const options = [];
  for(let i = 0; i < 2; i++) {
    options.push(<Options score={i*25}/>)
  }
  return (
    <td className="table__cell">
      <select className="table__score">
        <option></option>
        {options}
      </select>
    </td>
  )
}

function FourOfKind(props) {
  const options = [];
  for(let i = 0; i < 31; i++) {
    if(i === 1 || i === 2 || i === 3 || i === 4) {
      continue;
    }
    options.push(<Options score={i}/>)
  }
  return (
    <td className="table__cell">
      <select className="table__score">
        <option></option>
        {options}
      </select>
    </td>
  )
}

function ThreeOfKind(props) {
  const options = [];
  for(let i = 0; i < 31; i++) {
    if(i === 1 || i === 2 || i === 3 || i === 4) {
      continue;
    }
    options.push(<Options score={i}/>)
  }
  return (
    <td className="table__cell">
      <select className="table__score">
        <option></option>
        {options}
      </select>
    </td>
  )
}

function Subtotal(props) {
  return (
    <td className="table__cell">
      <p>{props.score}</p>
    </td>
  )
}

function Sixes(props) {
  const options = [];
  const index = props.index;
  for(let i = 0; i < 6; i++) {
    options.push(<Options score={i*6}/>)
  }
  return (
    <td className="table__cell">
      <select 
        className="table__score"
        name="threes"
        onChange={(e) => props.onChange(e, index)}
      >
        <option></option>
        {options}
      </select>
    </td>
  )
}

function Fives(props) {
  const options = [];
  const index = props.index;
  for(let i = 0; i < 6; i++) {
    options.push(<Options score={i*5}/>)
  }
  return (
    <td className="table__cell">
      <select 
        className="table__score"
        name="threes"
        onChange={(e) => props.onChange(e, index)}
      >
        <option></option>
        {options}
      </select>
    </td>
  )
}

function Fours(props) {
  const options = [];
  const index = props.index;
  for(let i = 0; i < 6; i++) {
    options.push(<Options score={i*4}/>)
  }
  return (
    <td className="table__cell">
      <select 
        className="table__score"
        name="threes"
        onChange={(e) => props.onChange(e, index)}
      >
        <option></option>
        {options}
      </select>
    </td>
  )
}

function Threes(props) {
  const options = [];
  const index = props.index;
  for(let i = 0; i < 6; i++) {
    options.push(<Options score={i*3}/>)
  }
  return (
    <td className="table__cell">
      <select 
        className="table__score"
        name="threes"
        onChange={(e) => props.onChange(e, index)}
      >
        <option></option>
        {options}
      </select>
    </td>
  )
}

function Twos(props) {
  const options = [];
  const index = props.index;
  for(let i = 0; i < 6; i++) {
    options.push(<Options score={i*2}/>)
  }
  return (
    <td className="table__cell">
      <select 
        className="table__score"
        name="twos"
        onChange={(e) => props.onChange(e, index)}
        >
        <option></option>
        {options}
      </select>
    </td>
  )
}

function Ones(props) {
  const options = [];
  const index = props.index;
  for(let i = 0; i < 6; i++) {
    options.push(<Options score={i}/>)
  }
  return (
    <td className="table__cell">
      <select 
        className="table__score"
        name="ones"
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
        <Ones 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        twosRow.push(<Twos 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        threesRow.push(<Threes 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        foursRow.push(<Fours 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        fivesRow.push(<Fives 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        sixesRow.push(<Sixes 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        subtotalRow.push(<Subtotal 
          key={player.id}
          score={player.score.subtotal}
        />)
        threeOfKindRow.push(<ThreeOfKind 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        fourOfKindRow.push(<FourOfKind 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        fullHouseRow.push(<FullHouse 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        smallStraightRow.push(<SmallStraight 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        largeStraightRow.push(<LargeStraight 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        yahtzeeRow.push(<Yahtzee 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
        />);
        chanceRow.push(<Chance 
          key={player.id}
          index={i}
          onChange={(e, index) => this.props.onChange(e, index)}
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
          lowerSection: Array(7).fill(0), // scores for 3oak, 4oak, fh, sm.str, lg.str, ytz & chc.
          yahtzeeBonus: null,
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
    }

    players[i].score.subtotal = upperSection.reduce((t, n) => t + n);

    this.setState(state => state.players = players);
    console.log(this.state.players);
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
