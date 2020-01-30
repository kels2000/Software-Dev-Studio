import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { RandomGrid } from './BoilerPlate.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FormRow(row) {
    const classes = useStyles(); 
        return (
            <React.Fragment>
              <Grid item xs={2}>
                <Paper className={classes.paper}>{row[0]}</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>{row[1]}</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>{row[2]}</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>{row[3]}</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>{row[4]}</Paper>
              </Grid>
            </React.Fragment>
          );
        }