import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
import {RandomGrid} from './BoilerPlate';
import NestedGrid from './Board.js';
import GroupOrientation from './HideShowButtons.js'
import BasicTextFields from './TextField.js'
//import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./bogglepic.png")} className="App-logo" alt="logo" />
        <br></br>
        {GroupOrientation()}
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
}

export default App;
