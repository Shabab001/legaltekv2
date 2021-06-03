import Axios from "axios";
import * as Types from "./types";
import setAuthToken from "../utils/setAuthToken";
import { message } from "antd";


export const getChatList = (props, history) => (dispatch) => {

    return  new Promise((resolve, reject) => {

        Axios.get("/api/messaging/getConversations/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.auth_token,
          },
        })
          .then((response) => {
            console.log(response);
            console.log('conversations', response.data.conversations)
            dispatch({
              type: Types.GET_CHATLIST,
              payload: {
                chatList: response.data.conversations,
              },
            });
            // message.success(response.data.message)
            resolve(true);
          })
          .catch((error) => {
            message.error("Chatlist retrieval failed")
            resolve(false);
            console.log(error.response);
          });
      });

}

export const createConversation = (props, history) => (dispatch) => {

  return  new Promise((resolve, reject) => {

      Axios.post("/api/messaging/createConversation/",props.obj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.auth_token,
        },
      })
        .then((response) => {
          console.log(response);
          console.log('chatList', response.data.conversations)
          dispatch({
            type: Types.CREATE_CONVERSATION,
            payload: {
              createdConversation: response.data.conversation,
            },
          });
          message.success(response.data.message)
          resolve(true);
        })
        .catch((error) => {
          message.error("Conversation creation failed")
          resolve(false);
          console.log(error.response);
        });
    });

}


export const getMessages = (props, history) => (dispatch) => {

  return  new Promise((resolve, reject) => {

      Axios.get(`/api/messaging/getMessages/${props.obj.conversationId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.auth_token,
        },
      })
        .then((response) => {
          console.log(response);
          console.log('conversations', response.data.messages)
          dispatch({
            type: Types.GET_MESSAGES,
            payload: {
              messages: response.data.messages,
            },
          });
          message.success(response.data.message)
          resolve(true);
        })
        .catch((error) => {
          message.error("Messages retrieval failed")
          resolve(false);
          console.log(error.response);
        });
    });

}


export const sendMessage = (props, history) => (dispatch) => {

  return  new Promise((resolve, reject) => {

      Axios.post(`/api/messaging/sendMessage/`,props.obj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.auth_token,
        },
      })
        .then((response) => {
          console.log(response);
          console.log('sent message', response.data.message)
          // dispatch({
          //   type: Types.SEND_MESSAGE,
          //   // payload: {
          //   //   messages: response.data.messages,
          //   // },
          // });
          // message.success(response.data.message)
          resolve(true);
        })
        .catch((error) => {
          console.log(error)
          message.error("Messages sending failed")
          resolve(false);
          console.log(error.response);
        });
    });

}
