import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

import SimpleCart from '../cart/simpleCart.jsx'






import {removeFromCart} from '../../store/cart.jsx';

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

const Header = function (props) {

  const classes = useStyles();

    console.log ('our cart',props.cart)
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{'background' : 'white' , 'color' : 'gray'}}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              Tama Store 😺
            </Typography>
           <SimpleCart/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  

  const mapStateToProps = (state) => {
    return { cart: state.cart };
  };

  const mapDispatchToProps = { removeFromCart }
  export default connect(mapStateToProps , mapDispatchToProps)(Header);