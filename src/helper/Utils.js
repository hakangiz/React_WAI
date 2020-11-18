
import {Dimensions} from 'react-native'

var window = Dimensions.get('window');
function formatName(label) {
    // your logic
 }
 
 function formatDate(date) {
    // your logic
 }
 
const getWindowWidth=()=>{
    return window.width;
}
const getWindowHeight=()=>{
    return window.height;
}


 export {
    formatName,
    formatDate,
    getWindowWidth,
    getWindowHeight
 };