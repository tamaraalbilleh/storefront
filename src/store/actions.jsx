// imports
import axios from 'axios';
import { addToCart, removeFromCart } from './cart';

// the api 
let apiUrl = 'https://api-server-0.herokuapp.com/products';

// the async functions
export const getRemoteData = () => (dispatch , state) => {
    return axios.get (apiUrl , {
        headers: { 'Content-Type': 'application/json' },
        cache:'no-cache',
        mode: 'cors',
    }).then (res => {
        dispatch (getAction (res.data))
    }).catch((err) => {
        console.error(err);
    })
}




export const addToRemoteData = (id, product ) => (dispatch , state) => {
    if (id ) {
      const url2 = `${apiUrl}/${id}`
      return axios.put (url2,product,{
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({...product , inventory :  product.inventory - 1 }),
          cache:'no-cache',
          mode: 'cors',
            
          })
          .then ((res)=> {
            dispatch(getRemoteData()); dispatch(addToCart(product));})

        .catch((err) => {
          console.error(err);
        })
    }
}


export const returnToRemoteData = (id, product ) => (dispatch , state) => {
    if (id ) {
      const url2 = `${apiUrl}/${id}`
      return axios.put (url2,product,{
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({...product , inventory :  product.inventory + 1 }),
          cache:'no-cache',
          mode: 'cors',
            
          })
          .then ((res)=> {
            dispatch(getRemoteData()); dispatch(removeProduct(product));})

        .catch((err) => {
          console.error(err);
        })
    }
}





// new actions


export const getAction = payload => {
    return {
        type : 'GET',
        payload : payload,
    }
}

export const putAction = payload => {
    return {
        type : 'ADD_TO_CART',
        payload : payload,
    }
}
export const removeProduct = payload =>{
    return {
        type : 'REMOVE',
        payload : payload
    }
}