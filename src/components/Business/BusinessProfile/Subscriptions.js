import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";

function Subscriptions() {
    return (
        <div className='user-profile tab'>
        <h1>Subscriptions</h1>   
       
   
       </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);