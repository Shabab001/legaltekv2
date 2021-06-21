import React ,{useState,useEffect}from 'react'
import CreateAvailability from "./CreateAvailability";
import {message} from "antd"
const AvailabilityModal = (props) => {
    console.log(props.modal)
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
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        availabilityId:
          props.chefAvailability &&
          props.chefAvailability._id &&
          props.chefAvailability._id,
      };
      console.log(obj);
      let res;
      if (props.chefAvailability) {
        res = await props.actions.updateAvailability(
          {...props, obj},
          props.history
        );
      } else {
        res = await props.actions.createAvailability(
          {...props, obj},
          props.history
        );
      }

      if (res) {
        clearAvailabilityData();
        setCreateAvailabilityModal(false);
        getChefAvailability();
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
  
  const getChefAvailability = async () => {
    await props.actions.getChefAvailability({...props}, props.history);
  };
  const initializeUpdateAvailability = async () => {
    let chefAvail = props.chefAvailability;
    if (chefAvail) {
      setSunday({
        ...sunday,
        active: chefAvail.sunday ? true : false,
        startTime: chefAvail.sunday ? chefAvail.sunday.startTime : '',
        endTime: chefAvail.sunday ? chefAvail.sunday.endTime : '',
      });
      setMonday({
        ...monday,
        active: chefAvail.monday ? true : false,
        startTime: chefAvail.monday ? chefAvail.monday.startTime : '',
        endTime: chefAvail.monday ? chefAvail.monday.endTime : '',
      });
      setTuesday({
        ...tuesday,
        active: chefAvail.tuesday ? true : false,
        startTime: chefAvail.tuesday ? chefAvail.tuesday.startTime : '',
        endTime: chefAvail.tuesday ? chefAvail.tuesday.endTime : '',
      });
      setWednesday({
        ...wednesday,
        active: chefAvail.wednesday ? true : false,
        startTime: chefAvail.wednesday ? chefAvail.wednesday.startTime : '',
        endTime: chefAvail.wednesday ? chefAvail.wednesday.endTime : '',
      });
      setThursday({
        ...thursday,
        active: chefAvail.thursday ? true : false,
        startTime: chefAvail.thursday ? chefAvail.thursday.startTime : '',
        endTime: chefAvail.thursday ? chefAvail.thursday.endTime : '',
      });
      setFriday({
        ...friday,
        active: chefAvail.friday ? true : false,
        startTime: chefAvail.friday ? chefAvail.friday.startTime : '',
        endTime: chefAvail.friday ? chefAvail.friday.endTime : '',
      });
      setSaturday({
        ...saturday,
        active: chefAvail.saturday ? true : false,
        startTime: chefAvail.saturday ? chefAvail.saturday.startTime : '',
        endTime: chefAvail.saturday ? chefAvail.saturday.endTime : '',
      });
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

export default AvailabilityModal
