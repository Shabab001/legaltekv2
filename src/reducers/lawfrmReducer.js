import * as Types from "../actions/types";

const init = {
 lawfirmAgencies:[],
 singleLawfirm:null
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
    case Types.GET_SINGLE_LAWFIRM: {
     
      return {
        ...state,
        singleLawfirm: action.payload.lawfirmAgency,
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