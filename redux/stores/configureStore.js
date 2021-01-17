//** Diğer **/
// import {createStore} from 'redux';    
// import allReducers from '../reducers';

// function configureStore(
//     state={
//         profile:"AAA"
//     })
//     {
//     return createStore(allReducers,state);
// }

// export default configureStore;
//**Diğer */

// const store=createStore(allReducers,{})

// export default store

import {createStore} from 'redux';
import rootReducer from '../reducers';



export default function configureStore(){
    let store=createStore(rootReducer);
    return store
}