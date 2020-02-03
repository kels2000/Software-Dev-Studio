import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Board from './BoggleBoard';

const [buttonText, setButtonText] = useState("Start Game!");
const [show, setShow] = useState(false);  

  export function toggleBoard() {
    if (show === false){
      setButtonText("End Game!"); 
    }
    else {
      setButtonText("Start Game!")
    }
    setShow(!show)
  }
  export function startGame(bool) {
    if (bool === true) {
      return <Board/>;
    }
    else if (bool == false) {
      return null;
    }
  }

  export function randomizeBoard() {
    return <Board/>
  }

  export function Buttons(){
    return (
      <div>
      <ButtonGroup
        variant = 'contained'
        orientation="horizontal"
        color= 'default'
        size = 'large'
        aria-label="horizontal outlined white button group"
      >
        <Button onClick={() => toggleBoard()}>{buttonText}</Button>
        <Button onClick={() => randomizeBoard()}>Randomize!</Button>
      </ButtonGroup>
      </div>
    );
  }
    

  


 
