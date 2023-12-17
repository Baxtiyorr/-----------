const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;

const CHEESE_CAKE_ORDERED = 'CHEESE_CAKE_ORDERED'
const ICE_CREAM_ORDERED = 'ICE_CREAM_ORDERED'
const CHOCOLATE_CAKE_ORDERED = 'CHOCOLATE_CAKE_ORDERED'
const RESTOCK_ITEM = 'RESTOCK_ITEM'

function orderCheeseCake(quantity = 1){
    return{
        type: CHEESE_CAKE_ORDERED,
        payload: quantity,
    }
}
function orderIceCream(quantity = 1){
    return{
        type: ICE_CREAM_ORDERED,
        payload: quantity,
    }
}

function orderChocolateCake(quantity = 1){
    return{
        type: CHOCOLATE_CAKE_ORDERED,
        payload: quantity,
    }
}


function restockItem (quantity = 1){
return{
    type: RESTOCK_ITEM,
    payload: quantity
}

}


const initialState = {
    numOfCheeseCakes: 10,
    numOfIceCream: 4,
    numOfChocolateCake: 30
    
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case CHEESE_CAKE_ORDERED:
            return{
                ...state,
                numOfCheeseCakes: state.numOfCheeseCakes + action.payload,
                numOfIceCream : state.numOfIceCream + action.payload,    
                numOfChocolateCake: state.numOfChocolateCake + action.payload,    
            }
            
        case RESTOCK_ITEM:
            return{
                ...state,
                numOfCheeseCakes: state.numOfCheeseCakes - action.payload,
                numOfIceCream : state.numOfIceCream - action.payload,    
                numOfChocolateCake: state.numOfChocolateCake - action.payload,

            }
        default:
            return state
    }
}

const store = createStore(reducer);

console.log('initial state', store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('updeted state',  store.getState());
});

const action = bindActionCreator({orderCheeseCake, orderIceCream, orderChocolateCake, restockItem}, store.dispatch)


action.orderCheeseCake(3)
action.orderIceCream(6)
action.orderChocolateCake(5)
action.restockItem(2)


unsubscribe()