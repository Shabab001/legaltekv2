import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import {Route, Redirect} from 'react-router-dom'

function BusinessPrivateRoute({ component: Component,...rest  }) {
    let authFlag = false
    if(rest.auth && rest.auth.isAuthenticated && rest.auth.user && rest.auth.user.userType === "BUSINESS"){
        authFlag = true
    }
    return (
        <>
               <Route 
               {...rest}
                render={(props) => authFlag
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
            />
        </>
    )
}


function mapStateToProps(state, ownProps) {
    return {
      auth: state.auth,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(userActions, dispatch),
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(BusinessPrivateRoute);
