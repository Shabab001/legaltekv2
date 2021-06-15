import * as Types from "../actions/types";

const init = {
 lawfirmAgencies:[]
};

const lawfirmReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_LAWFIRMS: {
      console.log("got in");
      return {
        ...state,
        lawfirmAgencies: action.payload.lawfirmAgencies,
      };
    }
    case Types.CLEAR_LAWFIRMS: {
      console.log("got in");
      return {
        ...state,
        lawfirmAgencies: [],
      };
    }
    default:
      return state;
  }
};

export default lawfirmReducer;