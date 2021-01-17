import store from './stores/configureStore';
import {addArticle} from './actions/index';

window.store=store;
window.addArticle=addArticle;