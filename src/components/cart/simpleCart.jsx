import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import React , {useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch, useSelector } from 'react-redux';

import {removeFromCart} from '../../store/cart.jsx';
import { getRemoteData } from '../../store/actions.jsx';
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


const SimpleCart = function (props) {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
  
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const dispatch = useDispatch ();
  const state = useSelector ((state)=> {
    return { 
      allProducts : state,
      allCatagories : state.category,
      cart : state.cart
    }
  })

  // onClick={handleClose}
  let totalCount = 0
//   let leader = props.candidates.reduce((winning, record) => {
//     let r = record.votes > winning.votes ? record : winning
//     return r;
// }, currentLeader);
const itemCount = {}
props.cart.forEach(function (x) { itemCount[x.item] = (itemCount[x.item] || 0) + 1; });

  let total = Object.values(itemCount).reduce ((sum , item )=>{
    sum = sum + item
    return sum
    } , totalCount)
  useEffect(() => {
    // dispatch(activeCategory('ALL'));
    dispatch(getRemoteData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log ('this is the cart component ' , props.cart)
  return (
      <React.Fragment>

    <StyledBadge badgeContent={total? total: '0'} color="primary"/>
    <Button color="gray"
     ref={anchorRef}
     aria-controls={open ? 'menu-list-grow' : undefined}
     aria-haspopup="true"
     onClick={handleToggle}
    
    > 🛒  Cart </Button>
     <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
    {({ TransitionProps, placement }) => (
    <Grow
      {...TransitionProps}
      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
    >
      <Paper>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
          {
            Object.entries(itemCount)
            
            .map ( item =>(
              
            <MenuItem >{item[0]} ({item[1]})   <IconButton onClick={
              props.cart.filter (product => product.item = item[0]).then(()=>props.returnToRemoteData(props.cart[0]._id,item))
              
              } aria-label="delete" className={classes.margin}>
    <DeleteIcon fontSize="small" />
    </IconButton></MenuItem>
    
    
            ))
          }
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Grow>
    )}
    </Popper>
      </React.Fragment>
  )

}

const mapStateToProps = (state) => {
    return { cart: state.cart.cart };
  };

  const mapDispatchToProps = { removeFromCart }
  export default connect(mapStateToProps , mapDispatchToProps)(SimpleCart);




