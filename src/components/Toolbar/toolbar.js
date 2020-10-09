import Button from '@material-ui/core/Button';
import './toolbar.css';
import CreateIcon from '@material-ui/icons/Create';
import Crop54RoundedIcon from '@material-ui/icons/Crop54Rounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import RemoveIcon from '@material-ui/icons/Remove';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React Sketch App
          </Typography>
                <Button onClick={() => props.onChoice("pencil")}><CreateIcon /></Button>
                <Button onClick={() => props.onChoice("rectangle")}><Crop54RoundedIcon /></Button>
                <Button onClick={() => props.onChoice("circle")}><RadioButtonUncheckedRoundedIcon /></Button>
                <Button onClick={() => props.onChoice("line")}><RemoveIcon /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
