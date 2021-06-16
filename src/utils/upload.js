import { AiFillCodeSandboxCircle } from "react-icons/ai";

   
const xhr  = new XMLHttpRequest();
let upResponse=null;

export const deleteRequest = function (url, method) {


  
    // Return it as a Promise
    return new Promise(function (resolve, reject) {
  
      // Setup our listener to process compeleted requests
     xhr.onreadystatechange = function () {
        console.log(xhr)
        // Only run if thexhr is complete
        if (xhr.readyState !== 4) return true;
  
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
     xhr.open(method || 'DELETE', url, true);
     xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.auth_token);
  
      // Send thexhr
     xhr.send();
  
    });
  };
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