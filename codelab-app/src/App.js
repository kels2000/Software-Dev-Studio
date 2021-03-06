import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './text-input.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Kelsi's React App! Period. 
        </p>
        <TextInput promptText="Name?"/>
        <TextInput promptText="Hometown?"/>
        <br></br>
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
