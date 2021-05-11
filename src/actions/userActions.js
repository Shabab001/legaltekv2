// import jwtDecode from "jwt-decode";
import Axios from "axios";
import * as Types from "./types";
import setAuthToken from "../utils/setAuthToken";
import { message } from "antd";
import { reject } from "async";

const {REACT_APP_API}= process.env


export const login = (user, history) => (dispatch) => {
  console.log(history);
  return new Promise((resolve, reject) => {
    Axios.post(`${REACT_APP_API}/auth/local`, user)
      .then((response) => {
        console.log(response)
        localStorage.setItem("auth_token", response.data.jwt);
        localStorage.setItem("refresh_token", response.data.jwt);
        localStorage.setItem("user_session", JSON.stringify(response.data.user));

        setAuthToken(response.data.jwt);
        console.log(response.data.user)

        dispatch({
          type: Types.SET_USER,
          payload: {
            user: response.data.user,
          },
        });
        console.log(response.data)
        if(response.data.user && response.data.user.role.type == "authenticated"){
          history.push('/user/profile')
        }
        else if(response.data.user && response.data.user.role.type == "lawfirm"){
          console.log('hi')
          history.push('/business/profile')
        } else if(response.data.user && response.data.user.role.type == "lawyer"){
          console.log('hi')
          history.push('/lawyer/profile')
        }

        message.success("Signed in successfully!");
        resolve(true);
      })
      .catch((error) => {
        console.log(error)
        if (error && error.response) {
          console.log(error.response.data);
          dispatch({
            type: Types.USER_ERRORS,
            payload: {
              error: error.response.data,
            },
          });
        }
       
         message.error(error.response.data.data[0].messages[0].message);
        resolve(false);
      });
  });
};

export const googleLogin = (data, history) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Axios.post("/api/googleLogin", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        setAuthToken(response.data.token);

        dispatch({
          type: Types.SET_USER,
          payload: {
            user: response.data.user,
          },
        });
        console.log(response.data)
        if(response.data.user && response.data.user.userType == "CUSTOMER"){
          history.push('/user/profile')
        }
        else if(response.data.user && response.data.user.userType == "BUSINESS"){
          console.log('hi')
          history.push('/business/profile')
        }
        message.success("Signed in successfully!");
        resolve(true);
      })
      .catch((error) => {
        console.log(error)
        if (error) {
          console.log(error.response.data);
          dispatch({
            type: Types.USER_ERRORS,
            payload: {
              error: error.response.data,
            },
          });
        }
        message.error("Google Sign in failed!");
        resolve(false);
      });
  });
};

export const facebookLogin = (data, history) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Axios.post("/api/facebookLogin", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        setAuthToken(response.data.token);

        dispatch({
          type: Types.SET_USER,
          payload: {
            user: response.data.user,
          },
        });
        if(response.data.user && response.data.user.userType == "CUSTOMER"){
          history.push('/user/profile')
        }
        else if(response.data.user && response.data.user.userType == "BUSINESS"){
          history.push('/business/profile')
        }
        message.success("Signed in successfully!");
        resolve(true);
      })
      .catch((error) => {
        if (error && error.response) {
          console.log(error.response.data);
          dispatch({
            type: Types.USER_ERRORS,
            payload: {
              error: error.response.data,
            },
          });
        }
        message.error("Facebook sign in failed!");
        resolve(false);
      });
  });
};

export const register = (user, history) => (dispatch) => {
  console.log(user)
  return new Promise((resolve, reject) => {
    Axios.post(`${REACT_APP_API}/auth/local/register`, user,{mode:'cors'})
      .then((response) => {
        console.log("database called")
        console.log(response.data.user);
        dispatch({
          type: Types.CREATE_USER,
          payload: {
            createdUser: response.data.user,
          },
        });


        // history.push("/");
        message.success("Signed up successfully!");
        resolve(response.data.user)
      })
      .catch((error) => {
        if (error && error.response) {
          console.log(error.response);
          dispatch({
            type: Types.USER_ERRORS,
            payload: {
              error: error.response.data,
            },
          });
        }
        message.error(error.response.data.data[0].messages[0].message);
        resolve(false)
      });
  });
};

export const logout = (history) => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user_session");
  setAuthToken();
  console.log("hi", history);
  message.success("Successfully logged out!");
  history.push("/")
  return {
    type: Types.SET_USER,
    payload: {
      user: {},
    },
  };
};

export const forgotPassword = (data, history) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Axios.post("/api/forgot-password", data)
      .then((res) => {
        console.log(res);
        message.success("Email sent to your mail");
        // history.push("/");
        dispatch({ type: Types.FORGOT_PASSWORD });
        return resolve(true);
      })
      .catch((error) => {
        console.log(error);
        if (error && error.response) {
          console.log(error.response.data);
          dispatch({ type: Types.USER_ERRORS });
          return resolve(false);
        }
      });
  });
};

export const sendOtp = (data, history) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Axios.post(`${REACT_APP_API}/auth/send-otp`, data)
      .then((res) => {
        console.log(res);
        if (res) {
          message.success("Otp sent to your phone number.");
          dispatch({
            type: Types.SEND_OTP,
            payload: {
              message: "message sent",
              data: data,
            },
          });
          return resolve(true);
        }
      })
      .catch((error) => {
        if (error && error.response) {
          console.log(error.response);
          dispatch({
            type: Types.USER_ERRORS,
            payload: {
              error: error.response.data,
            },
          });
        }
        message.error(error.response.data.data[0].messages[0].message);
        resolve(false)
      });
  });
};

export const verifyOtp = (data, history) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Axios.post(`${REACT_APP_API}/auth/verify-otp`, data)
      .then((res) => {
        console.log('verified',res.data);
        if (res.data == "success") {
          message.success("OTP verified.");
          dispatch({
            type: Types.VERIFY_OTP,
            payload:{
              message: "OTP verified.",
              data: data,
            }
           
          });
          
          return resolve(true);
        }
      })
      .catch((error) => {
        console.log(error);
        message.success("OTP could not be verified.");
        if (error && error.response) {
          console.log(error.response.data);
          dispatch({ type: Types.USER_ERRORS });
          return resolve(false);
        }
      });
  });
};

export const loginWithPhone = (data, history) => (dispatch) => {
  console.log(data)
  return new Promise((resolve, reject) => {
    Axios.post("/api/loginWithPhone", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.token) {
          localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        setAuthToken(res.data.token);

        dispatch({
          type: Types.SET_USER,
          payload: {
            user: res.data.user,
          },
        });
        message.success("Logged in successfully!");
        history.push('/profilePage')
        return resolve(true); 
        }
      })
      .catch((error) => {
        // console.log(error);
        if (error && error.response) {
          console.log(error.response.data);
          // dispatch({ type: Types.USER_ERRORS,error:"" });
          message.error(error.response.data.message);
          return resolve(false)
        }
        // message.success("Logged in successfully!");
        // return resolve(false)
      });
  });
};

export const saveProfile = (data, history) => (dispatch) => {
  return new Promise((resolve, reject) => {

    Axios.post("/api/saveProfile", data)
    .then((res) => {
      console.log(res.data);
      if (res.data.success) {
    

      dispatch({
        type: Types.SAVE_PROFILE,
        payload: {
          savedProfile: res.data.user,
        },
      });
      message.success("Changes Saved!");
      // history.push('/profilePage')
      return resolve(true); 
      }
    })
    .catch((error) => {
      // console.log(error);
      if (error && error.response) {
        console.log(error.response.data);
        // dispatch({ type: Types.USER_ERRORS,error:"" });
        message.error(error.response.data.message);
        return resolve(false)
      }
      // message.success("Logged in successfully!");
      // return resolve(false)
    });
});
};
export const resetPassword = (data, history) => (dispatch) => {
return new Promise((resolve,reject)=>{

    Axios.post("/api/resetPassword", data)
    .then((res) => {
      console.log(res.data)
      if(res.data.success){
        message.success("Password Reset Successful")
        dispatch({ type: Types.RESET_PASSWORD,data: "Reset Password Successful" });
        return resolve(true)
      }
    })
    .catch((error) => {
      // console.log(error);
      if (error && error.response) {
        console.log(error.response.data);
        // dispatch({ type: Types.USER_ERRORS,error:"" });
        message.error(error.response.data.message);
        return resolve(false)
      }
      // message.success("Logged in successfully!");
      // return resolve(false)
    });


})}

export const getProfile = (data, history) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const token =localStorage.getItem('auth_token')
    if(token){

    

    Axios.get(`${REACT_APP_API}/users/me`,{
      headers: {
        Authorization:
          `Bearer ${token}`,
      }
      },)
    .then((res) => {
      console.log(res.data);
      if (res) {
    

      dispatch({
        type: Types.GET_PROFILE,
        payload: {
          retrievedProfile: res.data,
        },
      });
      // history.push('/profilePage')
      return resolve(true); 
      }
    })
    .catch((error) => {
      // console.log(error);
      if (error && error.response) {
        console.log(error.response.data);
        // dispatch({ type: Types.USER_ERRORS,error:"" });
        message.error(error.response.data.message);
        return resolve(false)
      }
      // message.success("Logged in successfully!");
      // return resolve(false)
    });
  }
  
});
  
}