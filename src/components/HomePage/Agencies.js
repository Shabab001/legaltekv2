import React,{useEffect,memo} from 'react'
import "./Agencies.css"
import AgencyBox2 from './AgencyBox2'
import store from "../../store/index"
import { bindActionCreators } from "redux";

import { connect } from "react-redux"
import * as lawfirmActions from "../../actions/lawfirmActions";
import {Link } from "react-router-dom"
const Agencies = (props) => {



    useEffect(()=>{
        console.log("SSSSSSSSSSSSSSSSSSSSSSSS")
           props.actions.getLawfirms();
      
    },[])
    return (
        <div className="agency-main">
                    <div className="lawyers-heading" >
        <h4 >Featured Law Firms in Your Area</h4>
        <p>Law Firm profiles are always kept up-to-date with accurate and verified information and details. We thoroughly review a Law Firm's information, registration credentials to confirm requirements and prerequisites are met. We ensure that the advice and services you receive meet your expectations from Legal Professional licensed and has the practice privileges in your area and affiliated with a registered Law Firm. Benefit from our global list of verified Legal Professional at reputed Law Firms.</p>
      </div>
            <div className="agency-container">
    
                <div className="agency-grid">
                    {props.lawfirmAgencies && props.lawfirmAgencies.map((lawfirm,index)=>{
                            return <Link style={{color:"black"}} to ={`/lawfirm-view/${lawfirm.id}`} key={index}>
                                  <AgencyBox2  lawfirm={lawfirm} />
                                   </Link>
                    })}
                 

                </div>

            </div>
        
        </div>
    )
}


const mapStateToProps = (state) => ({
    lawfirmAgencies: state.lawfirmAgencies.lawfirmAgencies,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(lawfirmActions, dispatch),
  });
export default connect(mapStateToProps, mapDispatchToProps)(memo(Agencies));
