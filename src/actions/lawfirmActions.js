import Axios from "axios";
import * as Types from "./types";
import { message } from "antd";






const {REACT_APP_API}= process.env

export const getLawfirms = () => (dispatch) => {
    return new Promise((resolve, reject) => {
   
  
      
  
      Axios.get(`${REACT_APP_API}/lawfirm-users`)
      .then((res) => {
        if (res) {
          console.log(res.data);
      
  
        dispatch({
          type: Types.GET_LAWFIRMS,
          payload: {
            lawfirmAgencies: res.data,
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