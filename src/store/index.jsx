import { createStore , combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from './products.jsx';
import categoryReducer from './categories.jsx';
import cartReducer from './cart.jsx';

// combine the reducers 
let reducers = combineReducers ({products : productsReducer , category : categoryReducer , cart : cartReducer});
// defining a store 
const store = ()=>{
    return createStore ( reducers , composeWithDevTools())
}

export default store();