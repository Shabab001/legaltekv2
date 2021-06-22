import React ,{useState,useEffect}from 'react'
import CreateAvailability from "./CreateAvailability";
import {message} from "antd"
import * as userActions from "../../../../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const AvailabilityModal = (props) => {
    console.log(props)
    const [createAvailabilityModal, setCreateAvailabilityModal] = useState(false);
    const[timezone,setTimezone]=useState({
        value:"",
        message:""
    })
    const [sunday, setSunday] = useState({
        active: false,
        startTime: '',
        endTime: '',
        message: '',
      });
      const [monday, setMonday] = useState({
        active: false,
        startTime: '',
        endTime: '',
        message: '',
      });
      const [tuesday, setTuesday] = useState({
        active: false,
        startTime: '',
        endTime: '',
        message: '',
      });
      const [wednesday, setWednesday] = useState({
        active: false,
        startTime: '',
        endTime: '',
        message: '',
      });
      const [thursday, setThursday] = useState({
        active: false,
        startTime: '',
        endTime: '',
        message: '',
      });
      const [friday, setFriday] = useState({
        active: false,
        startTime: '',
        endTime: '',
        message: '',
      });
      const [saturday, setSaturday] = useState({
        active: false,
        startTime: '',
        endTime: '',
        message: '',
      });
      const clearAvailabilityData = async () => {
        setSunday({active: false, startTime: '', endTime: '', message: ''});
        setMonday({active: false, startTime: '', endTime: '', message: ''});
        setTuesday({active: false, startTime: '', endTime: '', message: ''});
        setWednesday({active: false, startTime: '', endTime: '', message: ''});
        setThursday({active: false, startTime: '', endTime: '', message: ''});
        setFriday({active: false, startTime: '', endTime: '', message: ''});
        setSaturday({active: false, startTime: '', endTime: '', message: ''});
      };
    
  const saveTimings = async () => {
    let validity = await validate();
    console.log(validity);
    if (validity == true) {
      let obj = {
        availability:{

          sunday,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          timezone,
        },
         setAvailability:true,
      };
      console.log(obj);

      let response =await props.actions.updateBranches(
        obj,
       props.branchId
      );

      if (response) {
        clearAvailabilityData();
        setCreateAvailabilityModal(false);

   
        const firmuser=await props.actions.getLawfirmUserProfile(props.profile.id);
        if(
          firmuser
        ){
          console.log(firmuser)
        }
      }

 
      
    } else {
      message.error('Fix the errors below');
    }
  };
  const validate = async () => {
    let validity = true;
    let noTimingChosen = false;
    if (
      sunday &&
      !sunday.active &&
      monday &&
      !monday.active &&
      tuesday &&
      !tuesday.active &&
      wednesday &&
      !wednesday.active &&
      thursday &&
      !thursday.active &&
      friday &&
      !friday.active &&
      saturday &&
      !saturday.active
    ) {
      noTimingChosen = true;
      validity = false;
    }
    console.log('early', validity);
    if (
      (sunday && sunday.active && !sunday.startTime) ||
      (monday && !monday.active && !monday.startTime) ||
      (tuesday && !tuesday.active && !tuesday.startTime) ||
      (wednesday && !wednesday.active && !wednesday.startTime) ||
      (thursday && !thursday.active && !thursday.startTime) ||
      (friday && !friday.active && !friday.startTime) ||
      (saturday && !saturday.active && !saturday.startTime)
    ) {
      console.log(
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday
      );
      if (sunday && sunday.active && !sunday.startTime) {
        setSunday({
          ...sunday,
          message: 'Time Range is required for the active day',
        });
        validity = false;
        console.log('its sunday');
      }
      if (monday && monday.active && !monday.startTime) {
        setMonday({
          ...monday,
          message: 'Time Range is required for the active day',
        });
        validity = false;
        console.log('its monday');
      }
      if (tuesday && tuesday.active && !tuesday.startTime) {
        setTuesday({
          ...tuesday,
          message: 'Time Range is required for the active day',
        });
        validity = false;
        console.log('its tuesday');
      }
      if (wednesday && wednesday.active && !wednesday.startTime) {
        setWednesday({
          ...wednesday,
          message: 'Time Range is required for the active day',
        });
        validity = false;
        console.log('its wednesday');
      }
      if (thursday && thursday.active && !thursday.startTime) {
        setThursday({
          ...thursday,
          message: 'Time Range is required for the active day',
        });
        validity = false;
        console.log('its thursday');
      }
      if (friday && friday.active && !friday.startTime) {
        setFriday({
          ...friday,
          message: 'Time Range is required for the active day',
        });
        validity = false;
        console.log('its friday');
      }
      if (saturday && saturday.active && !saturday.startTime) {
        setSaturday({
          ...saturday,
          message: 'Time Range is required for the active day',
        });
        validity = false;
        console.log('its saturday');
      }
    }
    return validity;
  };
  

  const initializeUpdateAvailability = async () => {
     if(props.branches && props.branches[props.index]){
        
      console.log(props.branches[props.index].availability.timezone)
  
         let chefAvail=props.branches[props.index].availability;
    if (chefAvail) {
      setSunday({
        ...sunday,
        active: chefAvail.sunday.active ? true : false,
        startTime: chefAvail.sunday ? chefAvail.sunday.startTime : '',
        endTime: chefAvail.sunday ? chefAvail.sunday.endTime : '',
      });
      setMonday({
        ...monday,
        active: chefAvail.monday.active ? true : false,
        startTime: chefAvail.monday ? chefAvail.monday.startTime : '',
        endTime: chefAvail.monday ? chefAvail.monday.endTime : '',
      });
      setTuesday({
        ...tuesday,
        active: chefAvail.tuesday.active ? true : false,
        startTime: chefAvail.tuesday ? chefAvail.tuesday.startTime : '',
        endTime: chefAvail.tuesday ? chefAvail.tuesday.endTime : '',
      });
      setWednesday({
        ...wednesday,
        active: chefAvail.wednesday.active ? true : false,
        startTime: chefAvail.wednesday ? chefAvail.wednesday.startTime : '',
        endTime: chefAvail.wednesday ? chefAvail.wednesday.endTime : '',
      });
      setThursday({
        ...thursday,
        active: chefAvail.thursday.active ? true : false,
        startTime: chefAvail.thursday ? chefAvail.thursday.startTime : '',
        endTime: chefAvail.thursday ? chefAvail.thursday.endTime : '',
      });
      setFriday({
        ...friday,
        active: chefAvail.friday.active? true : false,
        startTime: chefAvail.friday ? chefAvail.friday.startTime : '',
        endTime: chefAvail.friday ? chefAvail.friday.endTime : '',
      });
      setSaturday({
        ...saturday,
        active: chefAvail.saturday.active ? true : false,
        startTime: chefAvail.saturday ? chefAvail.saturday.startTime : '',
        endTime: chefAvail.saturday ? chefAvail.saturday.endTime : '',
      });
      setTimezone({
        value:chefAvail.timezone? chefAvail.timezone.value:"",

      });
    }
  }
    setCreateAvailabilityModal(true);



  };
  useEffect(()=>{
    
    if(props.modal && props.modal==true){
        console.log('sdkfjsdkfj')
        setCreateAvailabilityModal(true);
        initializeUpdateAvailability();
    }
    else{
        setCreateAvailabilityModal(false)
         props.set(props.index)
    }

  },[])

    return (
        <div>

                  <CreateAvailability
        createAvailabilityModal={createAvailabilityModal}
        setCreateAvailabilityModal={setCreateAvailabilityModal}
        sunday={sunday}
        setSunday={setSunday}
        monday={monday}
        setMonday={setMonday}
        tuesday={tuesday}
        setTuesday={setTuesday}
        wednesday={wednesday}
        setWednesday={setWednesday}
        thursday={thursday}
        setThursday={setThursday}
        friday={friday}
        setFriday={setFriday}
        saturday={saturday}
        setSaturday={setSaturday}
        saveTimings={saveTimings}
        clearAvailabilityData={clearAvailabilityData}
        initializeUpdateAvailability={initializeUpdateAvailability}
        set={props.set}
        timezone={timezone}
        setTimezone={setTimezone}
        index={props.index}
        
        {...props}
      />
        </div>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile:state.auth.lawfirmUserProfile,
  branches: state.auth.lawfirmUserProfile.branches,
 
});

const mapDispatchToProps = (dispatch) => ({
actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AvailabilityModal);
