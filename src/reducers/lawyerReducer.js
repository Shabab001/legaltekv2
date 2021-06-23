import * as Types from "../actions/types";

const init = {
 lawyers:[],
 singleLawyer:null
};

const lawfirmReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_LAWYERS: {
      console.log("got in");
      return {
        ...state,
        lawyers: action.payload.lawyers,
      };
    }
    case Types.GET_SINGLE_LAWYER: {
     
      return {
        ...state,
        singleLawyer: action.payload.lawyer,
      };
    }
    case Types.CLEAR_LAWYERS: {
      console.log("got in");
      return {
        ...state,
        lawyers: [],
      };
    }
    default:
      return state;
  }
};

export default lawfirmReducer;