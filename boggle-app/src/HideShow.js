import React, {Component} from 'react';
import Board from './Board.js';
import {RandomGrid} from './BoilerPlate';
import NestedGrid from './Board.js';

class GameContainer extends Component {

    state = {
      words: [],
      letters: '                ',
      isGameStarted: false,
      gameHasEnded: false
    }

    startGame = () => {
        var gridRandom = RandomGrid()
        {NestedGrid(gridRandom)}
          then(json => this.setState({
            letters: json.setup,
            isGameStarted: true,
            gameHasEnded: false,
            words: [],
          }
        ))
      }
    }

   
