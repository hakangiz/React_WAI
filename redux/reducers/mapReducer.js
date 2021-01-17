//import {const_actionType} from '../constants';
 
const initialState ={
     map:[]
 }

const mapReducer =(state=initialState,action)=>{
    switch(action.type){
        case "Map":
            return {
                ...state,
                map:action.payload
            };
            default:
                return state;
    }
}

export default mapReducer;