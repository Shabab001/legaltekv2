import { AiFillCodeSandboxCircle } from "react-icons/ai";
import axios from "axios";

   
const xhr  = new XMLHttpRequest();
let upResponse=null;

export const deleteRequest = async (url, method) =>{


  
    try{
          let del =await axios.delete(`${url}`,{
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.auth_token,
            },
          })
          if(del){
           return del
          }
    }
    catch(er){
      console.log(er)
    }
                     



    }
  export const makeRequest = function (url, method,form) {


  
    // Return it as a Promise
    return new Promise(function (resolve, reject) {
  
      // Setup our listener to process compeleted requests
     xhr.onreadystatechange = function () {
  
        // Only run if thexhr is complete
        if (xhr.readyState !== 4) return;
  
        // Process the response
        if (xhr.status >= 200 &&xhr.status < 300) {
          // If successful
          upResponse=JSON.parse(xhr.responseText)[0]
          resolve(upResponse);
        } else {
          // If failed
          reject({
            status:xhr.status,
            statusText:xhr.statusText
          });
        }
  
      };
  
      // Setup our HTTP request
     xhr.open(method || 'GET', url, true);
     xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.auth_token);
  
      // Send thexhr
     xhr.send(form);
  
    });
  };