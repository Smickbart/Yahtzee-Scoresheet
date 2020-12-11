import React from 'react';

import Table from "./table";

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
    const players = this.state.players.slice();
    let idNum = players.length + 1;
      
    players.push({ 
        name: "",
        score: {
          upperSection: Array(6).fill(0), // These are the scores for ones through sixes.
          subtotal: null,
          upperBonus: null,
          lowerSection: Array(8).fill(0), // scores for 3oak, 4oak, fh, sm.str, lg.str, ytz & chc.
          total: null
        },
        id: "player#" + idNum
      });
    
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
      <div className="main-container">
        <h1 className="heading--main">Yahtzee Scoresheet</h1>
        <div className="button-container">
          <button className="button button--green" onClick={this.addPlayers}>add player</button>
        </div>
        <div className="table-container">
          <Table
            players={players}
            onChange={(e, index) => this.handleChange(e, index)}
          />
        </div>        
      </div>
    )
  }
}

export default App;