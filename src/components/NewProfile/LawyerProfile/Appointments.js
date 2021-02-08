import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "./appointment.css"
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { FiPlus } from 'react-icons/fi';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import {clock} from "./clock"
import TabSearch from "../BusinessProfile/tabSearch"
import PastAppointments from './pastAppointments';
import CurrentAppointments from './currentAppointments';
import UpcommingAppointments from './upcommingAppointments';
const Appointments = () => {
    const [startDate, setStartDate] = useState();
    const[activeTab, setActiveTab]=useState("Current Appointments");
    let date =new Date()
  

    const tabList=["Past Appointments","Current Appointments","Upcomming Appointments"]
    const handleActveTab=(tab)=>{
  
        setActiveTab(tab)
    }  

    let data = [{
        Id: 2,
        Subject: 'Meeting',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 22, 30),
        IsAllDay: false,
        Status: 'Completed',
        Priority: 'High',
        Description:"jkdhsfjksdhfjk"
    }];
    return (
        <div>
            <div className="appointment-heading">
                <p>Appointments</p>
                <div>

                <p>Todays date</p>
                <p>{date.toDateString()}</p>
                </div>
            </div>
        <div className="appointments-tabs">
    <div className="appointment-tab-grid">
        
        {tabList.map((tab,index)=>{
            return(
                <div key={index} className={activeTab===tab?`tab-rates ${tab}`:"tab-rates"} onClick={()=>handleActveTab(tab)}>
                <p>{tab}</p>
            </div>
            )
            
            
        })}
        </div>
        <div className={activeTab==="add"?`appointment-add-btn add-btn`:"appointment-add-btn"} onClick={()=>handleActveTab("add")}>
            <FiPlus/>
            <p>Add Appointmnets</p>
        </div>
        
    </div>
          {activeTab=="Past Appointments"?
          <PastAppointments/>:
          activeTab==="Current Appointments"?
     <CurrentAppointments/>:
     activeTab=="Upcomming Appointments"?
     <UpcommingAppointments/>:
     null
          
          }
        </div>
    )
}

export default Appointments
