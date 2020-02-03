import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormRow from './FormRow.js'
import {RandomGrid} from './BoilerPlate.js'

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

export default function NestedGrid(grid) {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <Grid container justify = 'center' spacing={1}>
        <Grid container item xs={8} justify = 'center'  spacing={3}>
          {FormRow(grid[0])}
        </Grid>
        <Grid container item xs={8} justify = 'center' spacing={3}>
        {FormRow(grid[1])}
        </Grid>
        <Grid container item xs={8} justify = 'center' spacing={3}>
        {FormRow(grid[2])}
        </Grid>
        <Grid container item xs={8} justify = 'center' spacing={3}>
        {FormRow(grid[3])}
        </Grid>
        <Grid container item xs={8} justify = 'center' spacing={3}>
        {FormRow(grid[4])}
        </Grid>
      </Grid>
    </div>
  );
}
  