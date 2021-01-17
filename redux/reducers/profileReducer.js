import {const_actionType} from '../constants';
 
const initialState ={
     profile:[]
 }

const profileReducer =(state=initialState,action)=>{
    switch(action.type){
        case "Profile":
            return {
                ...state,
                profile:action.payload
            };
            default:
                return state;
    }
}

export default profileReducer;