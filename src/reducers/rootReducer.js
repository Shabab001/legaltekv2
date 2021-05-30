import {combineReducers} from 'redux'
import auth from './authReducer'
import admin from './adminReducer'
import settings from './settings'
import blog from "./blogReducer"

 const rootReducer = combineReducers({
     auth,
     admin,
     settings,
     blog,
})

export default rootReducer






