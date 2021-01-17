import {ADD_ARTICLE,DELETE_ARTICLE} from '../constants/action-types'

const initialState={
    articles:[{title:"İlk title",id:1},]
};

function articleReducer(state=initialState,action) {
    switch (action.type)
    {
        case ADD_ARTICLE:
            //return {
                //articles:[...state.articles,action.payload]
            //};
            return Object.assign({},state,{
                    articles:state.articles.concat(action.payload)
            });
        case DELETE_ARTICLE:
            debugger
            // return{
            //     articles:state.articles.filter(p=>p.id !== action.payload.id)
            // };
            return Object.assign({},state,{
                articles:state.articles.filter(p=>p.id !== action.payload)
        });
        default:
            return state;
    }
    // if (action.type===ADD_ARTICLE)
    //     {
    //         return Object.assign({},state,{
    //               articles:state.articles.concat(action.payload)  
    //         });
    //     }
    // return state;
};

export default articleReducer;