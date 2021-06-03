import * as Types from "../actions/types";

const init = {
  chatList: [],
  message: null,
  messages: [],
  createdConversation: null,
};

const messagingReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_CHATLIST: {
      console.log("got in");
      return {
        ...state,
        chatList: action.payload.chatList,
      };
    }
    case Types.CREATE_CONVERSATION: {
      return {
        ...state,
        createdConversation: action.payload.conversation,
      };
    }
    case Types.SEND_MESSAGE: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case Types.GET_MESSAGES: {
        return {
          ...state,
          messages: action.payload.messages,
        };
      }

      case Types.LOGOUT: {
        return init;
      }
    default:
      return state;
  }
};

export default messagingReducer;
