

     let upResponse=null;
const xhr  = new XMLHttpRequest();
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
     xhr.open(method || 'POST', url, true);
     xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.auth_token);
  
      // Send thexhr
     xhr.send(form);
  
    });
  };