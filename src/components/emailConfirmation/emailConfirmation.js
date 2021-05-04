import React,{useEffect} from 'react'
import {useParams} from "react-router-dom"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import Axios from "axios";

const EmailConfirmation = (props) => {

    const{token}= useParams();

    useEffect(()=>{
        (async()=>{

            let response = await Axios.get(`http://localhost:1337/auth/verify-confirmation-email/${token}` )
            if(response){
    
                console.log(response);
                console.log(props.actions)
            let newUser=await props.actions.register(response.data)
            if(newUser){
                props.history.push("/");
               
            }
            }
        })()
    
    },[])
console.log(token)


    return (
        <div>
                   <h1>HI</h1>
        </div>
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
  export default connect(mapStateToProps, mapDispatchToProps)(EmailConfirmation);
       