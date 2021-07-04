let initialState = {
    catagories: [
        {
            normalizedName : 'ELECTRONICS',
            displayName : 'Electronics 👩‍💻',
            description : 'I do not fear computers. I fear lack of them. 💻'
        },
        {
            normalizedName : 'FOOD',
            displayName : 'Foods 👩‍🍳',
            description : 'Donut worry, be happy 🍩🥳'
        },
        
    ], 
    activeCategory : {
        normalizedName : 'FOOD',
        displayName : 'Foods 👩‍🍳',
        description : 'Donut worry, be happy 🍩🥳'
    }
};

const categoryReducer = (state = initialState, action) => {
    let {type , payload} = action ;
    switch (type) {
        case 'ACTIVATE' :
            let active = state.categories.filter(category => category.category === payload );
            return { active };
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