import React,{useEffect,memo} from 'react'
import "./Agencies.css"
import { connect } from "react-redux"
import AgencyBox2 from './AgencyBox2'
import store from "../../store/index"
import { bindActionCreators } from "redux";
import * as Types from "../../actions/types"
import * as lawfirmActions from "../../actions/lawfirmActions";
const Agencies = (props) => {



    useEffect(()=>{
        console.log("SSSSSSSSSSSSSSSSSSSSSSSS")
           props.actions.getLawfirms();
        return()=>{
              store.dispatch({
                  type:Types.CLEAR_LAWFIRMS
              })
        }
    },[])
    return (
        <div className="agency-main">
                    <div className="lawyers-heading" >
        <h4 >Featured Law Firms</h4>
      </div>
            <div className="agency-container">
    
                <div className="agency-grid">
                    {props.lawfirmAgencies && props.lawfirmAgencies.map((lawfirm,index)=>{

                                   return <AgencyBox2 key={index} lawfirm={lawfirm} />
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
