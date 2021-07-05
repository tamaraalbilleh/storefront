let initialState = {
    categories: [
        {
            normalizedName : 'ELECTRONICS',
            displayName : 'Electronics 👩‍💻',
            description : 'I do not fear computers. I fear the lack of them. 💻'
        },
        {
            normalizedName : 'FOOD',
            displayName : 'Foods 👩‍🍳',
            description : 'Donut worry, be happy 🍩🥳'
        },
        
    ], 
    activeCategory : 'ALL'
};

const categoryReducer = (state = initialState, action) => {
    let {type , payload} = action ;
    console.log ('this is the state of the cat' , type)
    switch (type) {
        case 'ACTIVATE' :
            let activeCategory = payload;
            let categories = state.categories;
            return { activeCategory, categories };
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