let initialState = [
        {name : 'Surface Studio 2 💻', count : 0},
        {name : 'ps5 🎮', count : 0},
        {name : 'HTC Vive Pro 2 👓', count : 0},
        {name : 'Cheese cake  🍰', count : 0},
        {name : 'Donut 🍩', count : 0},
        {name : 'cup cake 🧁', count : 0},

    ];


const cartReducer =(state = initialState  , action) =>{
    let {type , payload} = action;
    
    switch (type){
        case 'ADD_TO_CART':
            return state.map(c => {
                if (c.name === payload.name) {
                    return { name: c.name, count: c.count + 1 }
                }
                return c;
            });
        case 'REMOVE_FROM_CART':
            return state.map(c => {
                if (c.name === payload.name) {
                    return { name: c.name, count: c.count - 1 }
                }
                return c;
            });
        default :
            return state
        // case : 'REMOVE_FROM_CART':
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