import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store/index'
import * as serviceWorker from './serviceWorker';
import jwtDecode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import * as Types from './actions/types'
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { message } from 'antd';



message.config({
  maxCount: 1
})



const token = localStorage.getItem('auth_token')
const user = localStorage.getItem('user_session')

if(token && user){
  console.log(JSON.parse(user))
    let decode = jwtDecode(token)
    
    setAuthToken(token)
    store.dispatch({
        type: Types.SET_USER,
        payload: {
            user: JSON.parse(user)
        }
    })
}



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
