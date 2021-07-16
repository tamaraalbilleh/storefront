import React , {useEffect} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
// import { productFilter , resetProducts } from '../../store/products.jsx';
// import {setActiveCategory , reset } from '../../store/categories.jsx';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// imports for material ui // 
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import {addToCart} from '../../store/cart.jsx'


// new imports 
import { getRemoteData } from '../../store/actions.jsx';
import { addToRemoteData } from '../../store/actions.jsx';

// style object for the cards //
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

// products component //
const Products = props => {

    // for rendering 
    const dispatch = useDispatch ();
    const state = useSelector ((state)=> {
      return { 
        allProducts : state,
        allCatagories : state.category,
        // cart : state.cart
      }
    })

    // methods for the cards // 
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    useEffect(() => {
      // dispatch(activeCategory('ALL'));
      dispatch(getRemoteData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log ('remote data products' , state.allProducts)
    
console.log ('new props' , state)
    return ( 
        <React.Fragment>
            <div >
            <br/>
                <h1 style={{'display' : 'block' , 'font-family': 'Roboto ,sans-serif'  , fontWeight:'lighter' , 'margin-top':'50px' , 'textAlign' : 'center' , 'fontSize' : '50px'}}>{state.allCatagories.activeCategory?state.allCatagories.activeCategory.toUpperCase(): 'Choose a Category to Display'}</h1> 
                {/* <h3 style={{'display' : 'block' , 'font-family': 'Roboto ,sans-serif'  , fontWeight:'lighter' , 'margin-top':'20px' , 'textAlign' : 'center' , 'margin-bottom' : '50px' , 'fontSize' : '30px'}}>{props.allCatagories.activeCategory.description?props.allCatagories.activeCategory.description: ''}</h3>  */}
                <div style={{'margin-top' : '70px','display' : 'grid' , 'gridTemplateColumns' :'30% 30% 30% '  , 'justifyContent' : 'space-between', 'flexFlow' : 'wrap'}}>
                {
                  state.allProducts.products
                  .filter(product => {

                      if (state.allCatagories.activeCategory === 'ALL'){
                        return product
                      }else if (product.category === (state.allCatagories.activeCategory ? state.allCatagories.activeCategory : product)){
                        return product
                      }
                      })
                    .map ((product , index) =>(
             <Card className={classes.root} key={product.item}>

             <CardMedia className={classes.media} image={product.image} title="Paella dish"/>
             <CardContent>
                 <Typography variant="body2" color="textSecondary" component="h2" style={{'fontSize' : '25px'}}>{product.item}</Typography>
             </CardContent>
             <CardActions disableSpacing>
                 <IconButton aria-label="add to favorites" onClick= {()=> dispatch(  addToRemoteData(product._id,{...product, inventory : product.inventory -1})  )}>
                     <AddShoppingCartIcon/>
                     <small> Add to Cart</small>
                 </IconButton>
                 <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded, })} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" key={index}> 
                     <ExpandMoreIcon />
                 </IconButton>
             </CardActions>
             <Collapse in={expanded} timeout="auto" unmountOnExit>
                 <CardContent>
                     <p style={{'color' : 'purple'}}>price : {product.price}  , there are {product.inventory} pieces left</p>
                     <Typography paragraph>Description :</Typography>
                     <Typography paragraph>
                     {product.description}
                     </Typography>
                 </CardContent>
             </Collapse>
         </Card>
))}
                </div>
            </div>
        </React.Fragment>
    )
}





















// props.allCatagories.activeCategory.displayName || 
// const mapStateToProps = (state) =>{
// // console.log ('state',state)
//     return ({
//         allProducts : state.products,
//         allCatagories : state.category,
//         cart : state.cart
//     });
// } 

// const mapDispatchToProps= { addToCart }
// const mapDispatchToProps = ({setActiveCategory , reset});
// export default connect ( mapStateToProps , mapDispatchToProps) (Products)

export default Products;
   