import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NestedGrid from './Board.js';
import {RandomGrid} from './BoilerPlate';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BasicTextFields from './TextField.js'

class App extends Component {
    
  constructor( props ){
      super( props )
      this.state = { show : true };
      
      this.toggleDiv = this.toggleDiv.bind(this)
  }
  
  toggleDiv = () => {
      const { show } = this.state;
      this.setState( { show : !show } )
  }
}

class Boards extends Component {
  render(){
    var gridRandom = RandomGrid();
    return (
      <div id = 'need to hide'>
        {NestedGrid(gridRandom)}
        <br></br>
        {BasicTextFields()}
        <br></br>
        </div>
    )
  }
}

export default function GroupOrientation() {
  return (
    <ButtonGroup
      variant = 'contained'
      orientation="horizontal"
      color= 'default'
      size = 'large'
      aria-label="horizontal outlined white button group"
    >
      <Button onClick={ this.toggleDiv }>Show</Button>
      { this.state.show && <Boards/>}
      <Button>Hide</Button>
      <Button>Reset</Button>
    </ButtonGroup>
  );
}