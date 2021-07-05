import React from 'react';
import { connect } from 'react-redux';
import { productFilter , resetProducts } from '../../store/products.jsx';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {setActiveCategory } from '../../store/categories.jsx';
// import  { reset } from '../../store/categories.jsx';
// import categoryReducer from '../../store/categories.jsx';

// this is the style object from material ui //
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

// the categories component // 
const Categories = (props) => {
    const classes = useStyles();
    console.log ('de hea el props',props)
    return (
        <React.Fragment>
            <h2  style={{ 'margin-left' : '20px' , 'font-family': 'Roboto, sans-serif'}}>Browse Our Categories</h2>

            <div className={classes.root} style={{'float' : 'left' , 'margin-left' : '20px'}}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">


                {props.allCatagories.categories.map((category) => {
                    return <Button   onClick={() => props.setActiveCategory(category)} >{category.normalizedName}</Button>
                })}

                    {/* <Button onClick={() => {props.setActiveCategory('ALL'); props.resetProducts()}}>All Products</Button> */}
                </ButtonGroup>
               
            </div>

        </React.Fragment>
    )
}

// binding the state with the props //
const mapStateToProps = (state) =>{
  console.log (state , 'his')
  return({
  
  allCatagories : state.category,
})};

// binding the actions to the props //
const mapDispatchToProps = { setActiveCategory,productFilter , resetProducts };

// connecting the state and the actions while passing the component as an argument and exporting them //
export default connect(mapStateToProps, mapDispatchToProps)(Categories);




