//Credit: Used Krista's GitHub & Travis for assistance

import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import findAllSolutions from './boggle_solver.js';
import AnswerInput from './TextField.js';
//import AnswersFound from './AnswersFound.js';
import './App.css';
//import BasicTextFields from './TextField.js';
import BoggleBoard from './BoggleBoard.js'
import Button from '@material-ui/core/Button';
//import AnswersFound from './AnswersFound.js';


function App() {
const [buttonText, setButtonText] = useState("Start Game!");
const [show, setShow] = useState(false);  
const [allAnswers, setAllAnswers] = useState([]);
const [foundAnswers, setFoundAnswers] = ([]);
const [board, setBoard] = useState([])
console.log(board)
// useEffect(() => {
//   const dictionary = require('./full-wordlist.json');
//   let currAllAnswers = findAllSolutions(board, dictionary.words);
//   setAllAnswers(currAllAnswers);
// }, [board]);

// function AnswersFound({words, title}) {
//   const [words, setWords] = useState([]);

//   return (
//       <div>
//           {words.length > 0 && 
//           <h2>{title}:{words.length}</h2>
//       }
//       <ul>
//           {words.map((solution) => {return <li key={solution}>{solution}</li>})}
//       </ul>
//       </div>
//   );
// }

function rightAnswer(answer) {
  console.log("Right answer: " + answer);
  //setFoundAnswers([...foundAnswers, answer]);
}
  function toggleBoard() {
    if (show === false){
      //setFoundAnswers([]);
      setButtonText("End Game!"); 
    }
    else {
      setButtonText("Start Game!")
      // return <AnswersFound title='Possible Answers: ' words={allAnswers} />
    }
    setShow(!show)
  }
  function startGame(bool) {
    if (bool === true) {
      return <BoggleBoard board={setBoard}/>  
    }
    else if (bool === false) {
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./bogglepic.png")} className="App-logo" alt="logo" />
        <br></br>
        {startGame(show)}
      
        <br></br>
        <AnswerInput answers={allAnswers}
                    foundAnswers={foundAnswers}
                    rightAnswerMessage={(answer) => rightAnswer(answer)} />
        {/* <AnswersFound title = 'Words Found: ' words={foundAnswers} /> */}
        <br></br>
        <Button variant = "contained" className= "MuiButton" onClick={() => toggleBoard()}>{buttonText}</Button>
      </header>
    </div>
  );
};



export default App;
