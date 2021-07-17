let initialState = {activeCategory:'ALL'};

// let initialState = {
//     categories: [
//         {
//             normalizedName : 'ELECTRONICS',
//             displayName : 'Electronics 👩‍💻',
//             description : 'I do not fear computers. I fear the lack of them. 💻'
//         },
//         {
//             normalizedName : 'FOOD',
//             displayName : 'Foods 👩‍🍳',
//             description : 'Donut worry, be happy 🍩🥳'
//         },
//         {
//             normalizedName : 'ALL',
//             displayName : 'All Products 🤩',
//             description : 'Brows everything in one place 😸'
//         }
        
//     ], 
//     activeCategory : 'ALL'
// };

const categoryReducer = (state = initialState, action) => {
    let {type , payload} = action ;
    switch (type) {
        case 'ACTIVATE' :
            let newActiveCategory = payload;
           
            // console.log({ activeCategory, categories });

            return { ...state,activeCategory :newActiveCategory };
            // let activeCategory = state.categories.filter((c)=> c.normalizedName === payload.normalizedName);
            // console.log (state , 'newState');
            // console.log (payload , 'payload');
            // console.log ('active cat' , activeCategory)
           
            // console.log( { ...state, activeCategory: activeCategory[0] });
            // break;
        case 'RESET' :
            return initialState;
        default :
            return state
    }
}

export default categoryReducer;

export const setActiveCategory = (category) =>{
    return {
        type : 'ACTIVATE',
        payload : category
    }
}


export const reset =()=>{
    return {
        type : 'RESET',
    }
}