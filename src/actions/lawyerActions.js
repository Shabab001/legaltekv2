import Axios from "axios";
import * as Types from "./types";
import { message } from "antd";






const {REACT_APP_API}= process.env

export const getLawyers = () => (dispatch) => {
    return new Promise((resolve, reject) => {
   
  
      
  
      Axios.get(`${REACT_APP_API}/lawyer-users?_limit=10&_start=0`)
      .then((res) => {
        if (res) {
          console.log(res.data);
      
  
        dispatch({
          type: Types.GET_LAWYERS,
          payload: {
            lawyers: res.data,
          },
        });
       
       
        return resolve(true); 
        }
      })
      .catch((error) => {

        if (error && error.response) {
          console.log(error.response.data);
        
          message.error(error.response.data.message[0].messages[0].message);
          return resolve(false)
        }
      
      });
    
    
  });
    
  }
  export const getLawyerById = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
   
  
      
  
      Axios.get(`${REACT_APP_API}/lawyer-users/${id}`)
      .then((res) => {
        if (res) {
          console.log(res.data);
      
  
        dispatch({
          type: Types.GET_SINGLE_LAWYER,
          payload: {
            lawyer: res.data,
          },
        });
       
       
        return resolve(true); 
        }
      })
      .catch((error) => {

        if (error && error.response) {
          console.log(error.response.data);
        
          message.error(error.response.data.message[0].messages[0].message);
          return resolve(false)
        }
      
      });
    
    
  });
    
  }