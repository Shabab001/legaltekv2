import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const middleware = [thunk]

const reduxDevTools = (process.env.NODE_ENV=='development' && window.__REDUX_DEVTOOLS_EXTENSION__)? window.__REDUX_DEVTOOLS_EXTENSION__() : ""

let composeEnhancers = null
if(process.env.NODE_ENV == 'development'  && window.__REDUX_DEVTOOLS_EXTENSION__){
    composeEnhancers = compose( applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__())    
}
else{
    composeEnhancers = compose(applyMiddleware(...middleware))
}

const store = createStore(rootReducer, composeEnhancers)

export default store;