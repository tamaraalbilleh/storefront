let initialState = {
    cart : [],
} 

// let initialState = [
//         {name : 'Surface Studio 2 💻', count : 0},
//         {name : 'ps5 🎮', count : 0},
//         {name : 'HTC Vive Pro 2 👓', count : 0},
//         {name : 'Cheese cake  🍰', count : 0},
//         {name : 'Donut 🍩', count : 0},
//         {name : 'cup cake 🧁', count : 0},

// ];


const cartReducer =(state = initialState  , action) =>{
    let {type , payload} = action;
    
    switch (type){
        case 'ADD_TO_CART':
            let x = payload;
            let y = [...state.cart]
            y.push (x)
            return { cart :[...y]}
        case 'REMOVE' : 
           
            let newCart = state.cart.filter((product) => {
                return product.item !== payload.item;
              });
        
              return { ...state, cart: newCart };
        default :
            return state;
    }
}

export default cartReducer;


export const addToCart = (product)=>{
    return ({
        type : 'ADD_TO_CART',
        payload : product,
    })

}
export const removeFromCart = (product)=>{
    return ({
        type : 'REMOVE_FROM_CART',
        payload : product,
    })

}