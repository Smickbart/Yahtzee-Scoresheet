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
      row: "",
      score: "",
      name: "",
      inputs: 0,
      scoreMultiplier: 1
    }
  }

  addPlayers(e) {
    const players = this.state.players.slice();

    const generateId = () => {
      let number = Math.floor(Math.random() * 1000000 +1);
      if(players.every(player => player.id !== number)) {
        return number;
      }
      generateId();
    }
      
    players.push({ 
        name: "",
        score: {
          upperSection: Array(6).fill(null), // These are the scores for ones through sixes.
          subtotal: null,
          upperBonus: null,
          lowerSection: Array(8).fill(null), // scores for 3oak, 4oak, fh, sm.str, lg.str, ytz & chc.
          total: null
        },
        id: generateId()
      });
    
    this.setState(state => state.players = players);

    document.querySelector(".scoresheet").classList.remove("hidden");
    document.querySelector(".btn--green").innerHTML = "add player";

    console.log(this.state.players);
  }

  restart(e) {
    const id = e.target.id;
    const players = this.state.players.slice();
    const allPlayers = players.length;

    if(id === "resScores") {
      players.forEach(player => {
        player.score = {
          upperSection: Array(6).fill(null),
          subtotal: null,
          upperBonus: null,
          lowerSection: Array(8).fill(null),
          total: null
        }
      });    
  
      
    } else {
      players.splice(0, allPlayers);
    }

    this.setState(state => state.players = players);    
  }

  handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value

    if(name === "score" && value !== "") {
      value = Number(value);
    } else if(name === "score" && value === "") {
      value = null;
    }
    
    this.setState(state => state[name] = value);
  }

  handleClick(e, index) {
    let currentPlayer   = this.state.currentPlayer;
    const playerName    = this.state.name;
    const players = this.state.players.slice();
    const score = this.state.score;
    const row = this.state.row;

    const name = e.target.headers;
    const id = e.target.id;
    const i = index;

    let scoreMultiplier = 1;
    let inputs = 0;

    const popup = document.querySelector(".popup").classList;
    const deleteButton = document.getElementById("delete").classList;

    e.preventDefault();

    // A current player is needed in the state because when the submit button on the popup is clicked it wipes the index variable so it won't update the correct player's score.
    if(typeof(i) === "number") {
      currentPlayer = players[i];
      this.setState(state => state.currentPlayer = currentPlayer);
    }

    // This just closes the popup.
    if(id === "close") {
      popup.add("hidden");
    }

    //This is for determining what boxes should appear in the popup for the user to input their score.    
    if(id !== "submit") {
      switch(name) {
        case "name":
          inputs = "name";
          break;
        case "ones":
          inputs = 6;
          break;
        case "twos":
          inputs = 6;
          scoreMultiplier = 2;
          break;
        case "threes":
          inputs = 6;
          scoreMultiplier = 3;
          break;
        case "fours":
          inputs = 6;
          scoreMultiplier = 4;
          break;
        case "fives":
          inputs = 6;
          scoreMultiplier = 5;
          break;
        case "sixes":
          inputs = 6;
          scoreMultiplier = 6;
          break;
        case "3oak":
          inputs = 31;
          break;
        case "4oak":
          inputs = 31;
          break;
        case "fullHouse":
          inputs = 2;
          scoreMultiplier = 25;
          break;
        case "smlStraight":
          inputs = 2;
          scoreMultiplier = 30;
          break;
        case "lgStraight":
          inputs = 2;
          scoreMultiplier = 40;
          break;
        case "yahtzee":
          inputs = 2;
          scoreMultiplier = 50;
          break;
        case "chance":
          inputs = 31;
          break;
        case "yahtzeeBonus":
          inputs = 3;
          scoreMultiplier = 100;
          break;
          default:
            inputs = 0;
      }

      this.setState({
        row: name,
        inputs: inputs,
        scoreMulitplier: scoreMultiplier
      });
    }
    
    if( id !== "close") {
      popup.remove("hidden");
      deleteButton.add("hidden")
    }

    //This if statement updates the score.
    if(id === "submit" && (Number.isInteger(score) || score === null)) {
      switch(row) {
        case "ones":
          currentPlayer.score.upperSection[0] = score;
          break;
        case "twos":
          currentPlayer.score.upperSection[1] = score;
          break;
        case "threes":
          currentPlayer.score.upperSection[2] = score;
          break;
        case "fours":
          currentPlayer.score.upperSection[3] = score;
          break;
        case "fives":
          currentPlayer.score.upperSection[4] = score;
          break;
        case "sixes":
          currentPlayer.score.upperSection[5] = score;
          break;
        case "3oak":
          currentPlayer.score.lowerSection[0] = score;
          break;
        case "4oak":
          currentPlayer.score.lowerSection[1] = score;
          break;
        case "fullHouse":
          currentPlayer.score.lowerSection[2] = score;
          break;
        case "smlStraight":
          currentPlayer.score.lowerSection[3] = score;
          break;
        case "lgStraight":
          currentPlayer.score.lowerSection[4] = score;
          break;
        case "yahtzee":
          currentPlayer.score.lowerSection[5] = score;
          break;
        case "chance":
          currentPlayer.score.lowerSection[6] = score;
          break;
        case "yahtzeeBonus":
          currentPlayer.score.lowerSection[7] = score;
          break;
        default:
          currentPlayer.score.lowerSection[0] = null;
      }

      let repIndex = players.findIndex(player => player.id === currentPlayer.id);
      players.splice(repIndex, 1, currentPlayer);

      if(currentPlayer.score.upperSection.every(score => score === null) && currentPlayer.score.lowerSection.every(score => score === null)) {
        currentPlayer.score.subtotal = null;
        currentPlayer.score.upperBonus = null;
        currentPlayer.score.total = null;
      } else if(currentPlayer.score.upperSection.every(score => score === null) && currentPlayer.score.lowerSection.some(score => Number.isInteger(score))) {
        currentPlayer.score.subtotal = null;
        currentPlayer.score.upperBonus = null;
        currentPlayer.score.total = currentPlayer.score.subtotal + currentPlayer.score.upperBonus + currentPlayer.score.lowerSection.reduce((t, n) => t + n);
      } else {
        currentPlayer.score.subtotal = currentPlayer.score.upperSection.reduce((t, n) => t + n);
        currentPlayer.score.subtotal >= 63 ? currentPlayer.score.upperBonus = 35 : currentPlayer.score.upperBonus = 0;
        currentPlayer.score.total = currentPlayer.score.subtotal + currentPlayer.score.upperBonus + currentPlayer.score.lowerSection.reduce((t, n) => t + n);
      }
      
      this.setState(state => state.players = players);

      popup.add("hidden");
      const radios = document.querySelectorAll(".popup__radio");
      radios.forEach(radio => radio.checked = false);

    } else if(id === "submit" && row === "name") {
      currentPlayer.name = playerName;

      let replaceIndex = players.findIndex(player => player.id === currentPlayer.id);
      players.splice(replaceIndex, 1, currentPlayer);

      this.setState(state => state.players = players);
      popup.add("hidden");

    } else if(id === "delete" && row === "name") {
      let deletePlayerIndex = players.findIndex(player => player.id === currentPlayer.id);
      players.splice(deletePlayerIndex, 1);

      this.setState(state => state.players = players);
      popup.add("hidden");
      deleteButton.add("hidden");
    } else if(id === "submit") {
      popup.add("hidden");
    }
  }

  render() {
    const players = this.state.players;
    return (
      <>
        <h1 className="heading--main">Yahtzee Scoresheet</h1>
        <div className="button-container">
          <button className="btn btn--green" onClick={this.addPlayers}>new game</button>
          <button id="resScores" className="btn btn--yellow" onClick={this.restart}>Reset Scores</button>
          <button id="resGame" className="btn btn--red" onClick={this.restart}>Reset Game</button>
        </div>
        <div className="scoresheet-container">
          <Table
            players={players}
            onClick={(e, index) => this.handleClick(e, index)}
          />
        </div>
        <Popup
          playerName={this.state.name}
          inputs={this.state.inputs}
          scoreMultiplier={this.state.scoreMulitplier}
          row={this.state.row}
          onClick={this.handleClick}
          onChange={this.handleChange}
        />
      </>
    )
  }
}

export default App;