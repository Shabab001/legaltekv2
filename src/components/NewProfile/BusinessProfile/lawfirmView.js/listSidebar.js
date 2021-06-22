import React,{useState,useEffect} from 'react'
import "./listSidebar.css"
import { connect } from "react-redux";
const ListSidebar = (props) => {
  let schedule=null
    console.log(props.index)
 

        if(props.lawfirmAgency.branches && props.lawfirmAgency.branches[props.index]){
            
            schedule=props.lawfirmAgency.branches[props.index].availability
        }

    console.log(schedule)
    return (
        <>

        <div className="lawfirm-view-sidebar">
            <div className="lawfirm-view-box1">
                <div className="lawfirm-view-box1-header">
                    <p>Hours of Operation</p>
                </div>
                <div className="lawfirm-view-box1-body">
                {props.lawfirmAgency.branches && props.lawfirmAgency.branches[props.index]&&props.lawfirmAgency.branches[props.index].setAvailability&&schedule?
                <>
                    <div className="lawfirm-view-timezone">
                        <p>TimeZone: {props.lawfirmAgency.branches[props.index].availability.timezone.value} </p>
                    </div>
                    <div className="lawfirm-view-schedule">
                        {schedule&&schedule.sunday.active?

                            <p>Sunday: {schedule.sunday.startTime}-{schedule.sunday.endTime}</p>:null
                        }
                         {schedule&&schedule.monday.active?

                            <p>Monday: {schedule.monday.startTime}-{schedule.monday.endTime}</p>:null
                        }
                         {schedule&&schedule.tuesday.active?

                            <p>Tuesday: {schedule.tuesday.startTime}-{schedule.tuesday.endTime}</p>:null
                        }
                         {schedule&&schedule.wednesday.active?

                            <p>Wednesday: {schedule.wednesday.startTime}-{schedule.wednesday.endTime}</p>:null
                        }
                          {schedule&&schedule.thursday.active?

                            <p>Thursday: {schedule.thursday.startTime}-{schedule.thursday.endTime}</p>:null
                        }
                           {schedule&&schedule.friday.active?

                            <p>Friday: {schedule.friday.startTime}-{schedule.friday.endTime}</p>:null
                        }
                             {schedule&&schedule.saturday.active?

                            <p>Saturday: {schedule.saturday.startTime}-{schedule.saturday.endTime}</p>:null
                        }  
                         
                        
                        

                        </div>
                        </>:
                         <div className="lawfirm-view-timezone">
                             <p>Schedule not fixed yet</p>
                          </div>
                    }
                </div>
            </div>
            <div className="lawfirm-view-box2">
                <div className="lawfirm-view-box1-header">
                    <p>Hours of Operation</p>
                </div>
                <div className="lawfirm-view-box1-body">

                </div>
                
            </div>
        </div>

        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.auth.lawfirmUserProfile,
    lawfirmAgency:state.lawfirmAgencies.singleLawfirm
  });

 export default connect(mapStateToProps)(ListSidebar);
