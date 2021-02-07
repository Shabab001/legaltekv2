import {combineReducers} from 'redux'
import auth from './authReducer'
import admin from './adminReducer'
import settings from './settings'

 const rootReducer = combineReducers({
     auth,
     admin,
     settings,
})

export default rootReducer






