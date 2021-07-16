const initialState = [];

const productsReducerConnected = (state = initialState , action) =>{
    const { type , payload } = action;
    switch (type) {
        case 'GET' :
            
            return payload;
        case 'PUT' :
           
            return state;

        // case 'ADD_TO_CART':
        //     // let newProducts = state.map((product) => {
        //     //     if (product.name === payload.name) {
        //     //         product = { ...product, inventory : payload.inventory};
        //     //         return product;
        //     //     }
        //     //     return product;
        //     // });
            
        //     // return [...state ,newProducts ];
        //     let productsAfterDecrement = state.products.map((product) => {
        //         if (product.name === payload.name) {
        //           product = { ...product, inventory: product.inventory - 1 };
        //           return product;
        //         }
        //         return product;
        //       });
        
        //       return { products: productsAfterDecrement };
        default:
            return state;
    }
}

export default productsReducerConnected;


