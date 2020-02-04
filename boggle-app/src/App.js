import React, {useState} from 'react';
import findAllSolutions from './boggle_solver.js';
//import AnswerInput from './TextField.js';
//import AnswersFound from './AnswersFound.js';
import {RandomGrid} from './BoilerPlate';
import NestedGrid from './Board.js';
import './App.css';
import BasicTextFields from './TextField.js';
import Board from './BoggleBoard.js'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import NewBoard from './NewBoard.js'


function App() {
const [buttonText, setButtonText] = useState("Start Game!");
const [show, setShow] = useState(false);  

  function toggleBoard() {
    if (show === false){
      setButtonText("End Game!"); 
    }
    else {
      setButtonText("Start Game!")
    }
    setShow(!show)
  }
  function startGame(bool) {
    if (bool === true) {
      return <Board/>
    }
    else if (bool == false) {
      return null;
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./bogglepic.png")} className="App-logo" alt="logo" />
        <br></br>
        {startGame(show)}
        <br></br>
        {BasicTextFields()}
        <br></br>
        <Button variant = "contained" className= "MuiButton" onClick={() => toggleBoard()}>{buttonText}</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};



export default App;
