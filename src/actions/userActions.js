// import jwtDecode from "jwt-decode";
import Axios from "axios";
import * as Types from "./types";
import setAuthToken from "../utils/setAuthToken";
import { message } from "antd";
import { reject } from "async";

export const login = (user, history) => (dispatch) => {
  console.log(history);
  return new Promise((resolve, reject) => {
    Axios.post("/api/login", user)
      .then((response) => {
        console.log(response)
        localStorage.setItem("auth_token", response.data.user.token);
        localStorage.setItem("refresh_token", response.data.user.refresh_token);

        setAuthToken(response.data.user.token);

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
        if (error && error.response) {
          console.log(error.response.data);
          dispatch({
            type: Types.USER_ERRORS,
            payload: {
              error: error.response.data,
            },
          });
        }
        message.error("Could not sign you in!");
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
  return new Promise((resolve, reject) => {
    Axios.post("/api/register", user)
      .then((user) => {
        console.log(user);
        dispatch({
          type: Types.CREATE_USER,
          payload: {
            createdUser: user.data,
          },
        });


        // history.push("/");
        message.success("Signed up successfully!");
        resolve(user.data)
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
        message.error("Sign up failed!");
        resolve(false)
      });
  });
};

export const logout = (history) => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("refresh_token");
  setAuthToken();
  console.log("hi", history);
  message.success("Successfully logged out!");
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
    Axios.post("/api/sendOtp", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.type == "success") {
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
        console.log(error);
        message.success("Otp could not be sent to your phone number.");
        if (error && error.response) {
          console.log(error.response.data);
          dispatch({ type: Types.USER_ERRORS });
          return resolve(false);
        }
      });
  });
};

export const verifyOtp = (data, history) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Axios.post("/api/verifyOtp", data)
      .then((res) => {
        console.log('verified',res.data);
        if (res.data.type == "success") {
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

    Axios.post("/api/getProfile", data)
    .then((res) => {
      console.log(res.data);
      if (res.data.success) {
    

      dispatch({
        type: Types.GET_PROFILE,
        payload: {
          retrievedProfile: res.data.user,
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
});

}