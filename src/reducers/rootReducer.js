import {combineReducers} from 'redux'
import auth from './authReducer'
import admin from './adminReducer'
import settings from './settings'
import blog from "./blogReducer"
import message from "./messagingReducer"
import lawfirmAgencies from "./lawfrmReducer"

 const rootReducer = combineReducers({
     auth,
     admin,
     settings,
     blog,
     message,
     lawfirmAgencies,
})

export default rootReducer






