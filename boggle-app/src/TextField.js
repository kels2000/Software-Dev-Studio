import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function AnswerInput({answers, foundAnswers, rightAnswer}) {
  const [message, setMessage] = useState("Enter your answer!")
  const [answer, setAnswer] = useState('');

  function checkAnswer(){
    if (answers.includes(answer)){
      setMessage(answer + " is right!")
    }
    else if (foundAnswers.includes(answer)){
      setMessage("Whoops! You've already found " + answer)
    }
    else {
      setMessage(answer + " is wrong!")
    }
  }

  function keyPress(e){
    if (e.key === 'Enter'){
      checkAnswer()
    }
  }
  return (
    <div className= "MuiTextField">
      <div>
        {message}
        </div>
      <TextField onKeyPress={(e) => keyPress(e)} onChange={(event) => setAnswer(event.target.value)} id="filled-basic" variant="standard" />
    </div>
  )
}

export default AnswerInput;

  //const classes = useStyles();

