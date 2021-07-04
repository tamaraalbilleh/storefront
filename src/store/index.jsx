import { createStore , combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from './products.jsx';
// combine the reducers 
let reducers = combineReducers ({products : productsReducer});
// defining a store 
const store = ()=>{
    return createStore ( reducers , composeWithDevTools())
}

export default store();