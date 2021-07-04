// initial state for the products //
// electronics and foods 
let initialState = {
    products :  [
        {
          category  : 'ELECTRONICS',
          name : 'Surface Studio 2',
          description : 'not in your wildest dreams 😢',
          price : 3500,
          inventory : 12,
          url : 'https://icdn.digitaltrends.com/image/digitaltrends/microsoft-surface-studio-2-feat.jpg'
        },
        {
            category  : 'ELECTRONICS',
            name : 'ps5',
            description : 'soon inshaallah 🥺',
            price : 500,
            inventory : 14,
            url : 'https://cdn.shopify.com/s/files/1/0400/6854/6710/products/LBTPS50012_1_2048x2048.jpg?v=1605875786'
        },
        {
            category  : 'ELECTRONICS',
            name : 'HTC Vive Pro 2',
            description : 'dont try 😭',
            price : 1200 ,
            inventory : 3,
            url : 'https://s.yimg.com/uu/api/res/1.2/YYCMPkkZSlsIPIHnnXfqKQ--~B/Zmk9ZmlsbDtoPTM5Mjt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/bbab1ec0-b26f-11eb-bec5-6150a0d54e22.cf.jpg'
        },
        {
            category  : 'FOOD',
            name : 'Cheese cake  🍰',
            description : 'takes you to infinity and beyond 🎆',
            price : 30,
            inventory : 2,
            url : 'https://i.pinimg.com/originals/fa/93/cd/fa93cd61bd61dd751b76e100181dc647.jpg'
        },
        {
            category  : 'FOOD',
            name : 'Donut 🍩',
            description : 'a taste out of this world 🌠',
            price : 12,
            inventory : 44,
            url : 'https://imgix.bustle.com/mic/alk0zej6x6bq72vpmwy0yshbwfec1zm8dqeqtpjywdgf8qlhzfcdpmft8ojobsec.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format%2Ccompress'
        },
        {
            category  : 'FOOD',
            name : 'cup cake 🧁',
            description : 'milkyway cupcakes 🌌',
            price : 13,
            inventory : 30,
            url : 'https://i.pinimg.com/originals/f1/51/6f/f1516f59318ce951d14c0e18a5c1fc4c.jpg'
        },
    ]
}

// product reducer // 
const productsReducer = (state = initialState, action) => {
    let {type , payload} = action ;
    switch (type) {
        case 'FILTER' :
            let products = state.products.filter(product => product.category === payload );
            return { products };
        case 'RESET' :
            return initialState;
        default :
            return state
    }
}

export default productsReducer;

// actions //
// filter action
export const productFilter = (category) => {
    return {
        type : 'Filter',
        payload : category,
    }
};
// reset action
export const resetProducts = () =>{
    return {
        type : 'RESET',
    }
}