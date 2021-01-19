import React from 'react';

import Table from "./table";
import Popup from "./popup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.addPlayers = this.addPlayers.bind(this);
    this.restart = this.restart.bind(this);
    this.state = {
      players: [],
      currentPlayer: {},
      score: "",
      scoreNumber: 0,
      scoreMultiplier: 1
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

    document.querySelector(".table-container").classList.remove("hidden");
    document.querySelector(".btn--green").innerHTML = "add player";
  }

  restart(e) {
    const players = this.state.players.slice();
    const allPlayers = players.length;

    document.querySelector(".table-container").classList.add("hidden");
    document.querySelector(".btn--green").innerHTML = "new game";
    players.splice(0, allPlayers);

    this.setState(state => state.players = players);
  }

  handleChange = (e) => {
    const score = e.target.value;
    
    this.setState(state => state.score = score)
  }

  handleClick(e, index) {
    const players = this.state.players.slice();
    const currentPlayer = this.state.currentPlayer;
    const i = index;
    const name = e.target.headers;
    const id = e.target.id;
    const popup = document.querySelector(".popup").classList;
    const score = this.state.score;
    let scoreNumber = 0;
    let scoreMultiplier = 1;

    console.log(i);

    if(i) {
      this.setState(state => state.currentPlayer = players[i]);
    }

    if(id === "close") {
      popup.add("hidden");
    }
    
    if(id !== "submit") {
      switch(name) {
        // case "name":
        //   players[i].name = value;
        //   break;
        case "ones":
          scoreNumber = 6;
          break;
        case "twos":
          scoreNumber = 6;
          scoreMultiplier = 2;
          break;
        case "threes":
          scoreNumber = 6;
          scoreMultiplier = 3;
          break;
        case "fours":
          scoreNumber = 6;
          scoreMultiplier = 4;
          break;
        case "fives":
          scoreNumber = 6;
          scoreMultiplier = 5;
          break;
        case "sixes":
          scoreNumber = 6;
          scoreMultiplier = 6;
          break;
        case "3oak":
          scoreNumber = 31;
          break;
        case "4oak":
          scoreNumber = 31;
          break;
        case "fullHouse":
          scoreNumber = 2;
          scoreMultiplier = 25;
          break;
        case "smlStraight":
          scoreNumber = 2;
          scoreMultiplier = 30;
          break;
        case "lgStraight":
          scoreNumber = 2;
          scoreMultiplier = 40;
          break;
        case "yahtzee":
          scoreNumber = 2;
          scoreMultiplier = 50;
          break;
        case "chance":
          scoreNumber = 31;
          break;
        case "yahtzeeBonus":
          scoreNumber = 3;
          scoreMultiplier = 100;
          break;
      }

      this.setState({
        scoreNumber: scoreNumber,
        scoreMulitplier: scoreMultiplier
      });
    }
    
    if(id !== "close") {
      popup.remove("hidden");
    }

    if(id === "submit") {
      switch(name) {
        // case "name":
        //   players[i].name = value;
        //   break;
        case "ones":
          currentPlayer.score.upperSection[0] = Number(score);
          break;
        case "twos":
          currentPlayer.score.upperSection[1] = Number(score);
          break;
        case "threes":
          currentPlayer.score.upperSection[2] = Number(score);
          break;
        case "fours":
          currentPlayer.score.upperSection[3] = Number(score);
          break;
        case "fives":
          currentPlayer.score.upperSection[4] = Number(score);
          break;
        case "sixes":
          currentPlayer.score.upperSection[5] = Number(score);
          break;
        case "3oak":
          currentPlayer.score.lowerSection[0] = Number(score);
          break;
        case "4oak":
          currentPlayer.score.lowerSection[1] = Number(score);
          break;
        case "fullHouse":
          currentPlayer.score.lowerSection[2] = Number(score);
          break;
        case "smlStraight":
          currentPlayer.score.lowerSection[3] = Number(score);
          break;
        case "lgStraight":
          currentPlayer.score.lowerSection[4] = Number(score);
          break;
        case "yahtzee":
          currentPlayer.score.lowerSection[5] = Number(score);
          break;
        case "chance":
          currentPlayer.score.lowerSection[6] = Number(score);
          break;
        case "yahtzeeBonus":
          currentPlayer.score.lowerSection[7] = Number(score);
          break;
      }

      // let repIndex = players.findIndex(player => player.id === currentPlayer.id);
      // players.splice(repIndex, 1, currentPlayer);
      // this.setState(state => state.players = players);

      // console.log(currentPlayer.score.upperSection[0]);
    }

    // players[i].score.subtotal = upperSection.reduce((t, n) => t + n);

    // players[i].score.subtotal >= 63 ? players[i].score.upperBonus = 35 : players[i].score.upperBonus = 0;
    // players[i].score.total = players[i].score.subtotal + players[i].score.upperBonus + lowerSection.reduce((t, n) => t + n)

    // this.setState(state => state.players = players);
  }  

  render() {
    const players = this.state.players;
    return (
      <div id="app" className="main-container">
        <h1 className="heading--main">Yahtzee Scoresheet</h1>
        <div className="button-container">
          <button className="btn btn--green" onClick={this.addPlayers}>new game</button>
          <button className="btn btn--yellow" onClick={this.restart}>Reset Game</button>
        </div>
        <div className="table-container hidden">
          <Table
            players={players}
            onClick={(e, index) => this.handleClick(e, index)}
          />
        </div>
        <Popup 
          scoreNumber={this.state.scoreNumber}
          scoreMultiplier={this.state.scoreMulitplier}
          onClick={this.handleClick}
          onChange={this.handleChange}
        />  
      </div>
    )
  }
}

export default App;