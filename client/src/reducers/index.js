import {combineReducers} from "redux";
import homeNewWordsReducer from './homeNewWordsReducer';

export default combineReducers({
    newWords: homeNewWordsReducer
})