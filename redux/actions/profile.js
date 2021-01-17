//import {const_type} from '../constants';
// import {store} from '../stores/configureStore'

// export default setProfile = (profile) => {
//     store.dispatch({
//         type:"Profile",
//         payload:{
//             profile
//         }
//     })
     
// }

//****Diğeri
// const setProfile = (profile) => {
//     return {
//         type:"Profile",
//         payload:profile
//     }
// }

// export default setProfile;
//****Diğeri

import { COUNTER_CHANGE } from '../constants';
export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count
  }
}