import { createStore , combineReducers ,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import productsReducer from './products.jsx';
import productsReducerConnected from './productReducer.jsx';

import categoryReducer from './categories.jsx';
import cartReducer from './cart.jsx';
import thunk from './middleware/thunk.jsx';
// combine the reducers 
// let reducers = combineReducers ({products : productsReducer , category : categoryReducer , cart : cartReducer});
let reducers = combineReducers ({
    products : productsReducerConnected ,
    category : categoryReducer ,
    cart : cartReducer
});

// defining a store 
const store = ()=>{
    return createStore ( reducers , composeWithDevTools(applyMiddleware(thunk)))
}

export default store();