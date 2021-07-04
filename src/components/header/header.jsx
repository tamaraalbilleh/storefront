import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{'background' : 'white' , 'color' : 'gray'}}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              Our Store
            </Typography>
            <Button color="gray">Cart</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  