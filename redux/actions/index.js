import {ADD_ARTICLE,DELETE_ARTICLE} from '../constants/action-types'

export function addArticle(payload) {
        return {type:ADD_ARTICLE,payload}
}
export function deleteArticle(payload) {
        return {type:DELETE_ARTICLE,payload}
}
//action Creator yaratıldı. addArticle ile reducer'a ne iş yapılacağı yazılıyor ve verilen parametre 
//reducer'a aktarılabiliyor


