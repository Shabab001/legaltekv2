import React, {useState, useEffect} from 'react';
import '../../../assets/css/chef.css';
import {Calendar, Badge, TimePicker, message} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import CreateAvailability from './Chefs/CreateAvailability';
import CreateService from './Chefs/CreateService';
import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from '@syncfusion/ej2-react-schedule';


import ChefSidebar from './Chefs/ChefSidebar';
import CreateChefAppointment from './Chefs/CreateChefAppointment';
import * as userActions from '../../../actions/userActions';
import BlockAvailability from './Chefs/BlockAvailability';
import ChooseCreateOrBlockDate from './Chefs/ChooseCreateOrBlockDate';
import ConfirmModal from '../../modals/ConfirmModal';

function Appointments (props) {
  const [createAvailabilityModal, setCreateAvailabilityModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [chefAppointmentModal, setChefAppointmentModal] = useState(false);
  const [createChefAppointment, setCreateChefAppointment] = useState(true);
  const [blockAvailabilityModal, setBlockAvailabilityModal] = useState(false);
  const [deleteAppointment, setDeleteAppointment] = useState(null);
  const [deleteChefServiceItem, setDeleteChefServiceItem] = useState(null);
  const [chooseCreateOrBlockDateModal, setChooseCreateOrBlockDateModal] =
    useState(false);
    const [unblockAvailabilityItem, setUnblockAvailabilityItem] =
    useState(false);
    
  const [blockStartTime, setBlockStartTime] = useState({
    value: '',
    message: '',
    isValid: true,
  });
  const [blockEndTime, setBlockEndTime] = useState({
    value: '',
    message: '',
    isValid: true,
  });
  const [blockDate, setBlockDate] = useState({
    value: '',
    message: '',
    isValid: true,
  });
  const [blockDescription, setBlockDescription] = useState({
    value: '',
    message: '',
    isValid: true,
  });
  const [chosenUser, setChosenUser] = useState({
    value: '',
    message: '',
    isValid: true,
  });
  const [startTime, setStartTime] = useState({
    value: '',
    message: '',
    isValid: true,
  });
  const [endTime, setEndTime] = useState({
    value: '',
    message: '',
    isValid: true,
  });
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
  const [chefAvailabilityError, setChefAvailabilityError] = useState(false);
  const [rate, setRate] = useState({value: '', isValid: true, message: ''});
  const [selectedDate, setSelectedDate] = useState(null);
  const [serviceDesc, setServiceDesc] = useState({
    value: '',
    isValid: true,
    message: '',
  });
  const [createServiceModal, setCreateServiceModal] = useState(false);
  const [chosenService, setChosenService] = useState({
    value: '',
    isValid: true,
    message: '',
  })
  const [country, setCountry] = useState({value: '',
  isValid: true,
  message: '',})
  const [state, setState] = useState({value: '',
  isValid: true,
  message: '',})
  const [zip, setZip] = useState({value: '',
  isValid: true,
  message: '',})
  const [address, setAddress] = useState({value: '',
  isValid: true,
  message: '',})
  const [city, setCity] = useState({value: '',
  isValid: true,
  message: '',})
  const [cancelChefAppointmentModal, setCancelChefAppointmentModal] = useState(false)
  const [cancelChefAppointmentItem, setCancelChefAppointmentItem] = useState(null)

  useEffect(() => {
    return () => {};
  }, [props.users]);


  useEffect(() => {
    getChefServices();
    getChefAvailability();
    getBlockedTimings();
    getChefAppointments();
    return () => {};
  }, []);

  const getBlockedTimings = async () => {

  };

  const localDataCalendar = [
    {
      Id: 2,
      Subject: 'Appointment With Saimoon Bhuiyan',
      StartTime: new Date(2021, 4, 21, 10, 0),
      EndTime: new Date(2021, 4, 21, 12, 30),
    },
  ];

  const getChefAppointments = async () => {
 
  };
  // const deleteChefServiceModal = async (item) => {
  //   let serviceId = item._id;
  //   setDeleteChefServiceItem(item._id);
  // };
  const deleteChefService = async () => {
    if (deleteChefServiceItem) {
    
     
    }
  };

  const getChefServices = async () => {
    let businessId = props.auth && props.auth.user && props.auth.user._id && props.auth.user._id 
    
  };

  const getChefAvailability = async () => {
    
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

  const saveService = async () => {
    let obj = {
      description: serviceDesc.value,
      rate: rate.value,
    };
    console.log(obj);
    let res = await props.actions.createChefService(
      {...props, obj},
      props.history
    );
    if (res) {
      setRate({value: '', isValid: true, message: ''});
      setServiceDesc({value: '', isValid: true, message: ''});
      setCreateServiceModal(false);
      getChefServices();
    }
  };

  const cancelChefAppointment = async (item) => {
    let appointmentId = cancelChefAppointmentItem._id;
    let res = await props.actions.cancelChefAppointment(
      {...props, appointmentId},
      props.history
    );
    if (res) {
      message.success('Successfully deleted appointment');
      getChefAppointments();
      setCancelChefAppointmentItem(null)
    }
  };

  const unblockAvailability = async () => {
    let blockAvailabilityId = unblockAvailabilityItem._id;
    let res = await props.actions.UnblockAvailability(
      {...props, blockAvailabilityId},
      props.history
    );
    if (res) {
      getChefAvailability();
      setUnblockAvailabilityItem(null)
    }
  };

  const BlockAvailabilityFunc = async () => {
    let obj = {
      startTime: blockStartTime.value,
      endTime: blockEndTime.value,
      blockDate: moment(selectedDate).format('DD MMMM YYYY'),
      blockDescription: blockDescription.value,
    };
    let res = await props.actions.blockAvailability(
      {...props, obj},
      props.history
    );
    if (res) {
      setBlockAvailabilityModal(false);
      setBlockStartTime({value: '', message: '', isValid: true});
      setBlockEndTime({value: '', message: '', isValid: true});
      setBlockDescription({
        ...blockDescription,
        value: '',
        isValid: true,
        message: '',
      });
    }
  };

  const clearAppointmentModal = async () => {
    setStartTime({value: '', isValid: true, message: ''});
    setEndTime({value: '', isValid: true, message: ''});
    setChosenUser({value: '', isValid: true, message: ''});
    setSelectedDate(null);
  };

  const saveAppointment = async () => {
    let error = false;
    if (
      !selectedDate ||
      !startTime.value ||
      !endTime.value ||
      !chosenUser.value ||
      !state.value || 
      !country.value ||
      !zip.value ||
      !address.value ||
      !city.value
    ) {
      if (!selectedDate) {
      }
      if (!startTime.value) {
        setStartTime({
          ...startTime,
          message: 'Start time is required',
          isValid: false,
        });
      }
      if (!endTime.value) {
        setEndTime({
          ...endTime,
          message: 'End time is required',
          isValid: false,
        });
      }
      if (!chosenUser.value) {
        setChosenUser({
          ...chosenUser,
          message: 'User is required',
          isValid: false,
        });
      }

      if(!city.value){
        setCity({
          ...city,
          message: 'city is required',
          isValid: false,
        });
      }
      if(!address.value){
        setAddress({
          ...address,
          message: 'address is required',
          isValid: false,
        });
      }
      if(!country.value){
        setCountry({
          ...country,
          message: 'country is required',
          isValid: false,
        });
      }
      if(!state.value){
        setState({
          ...state,
          message: 'state is required',
          isValid: false,
        });
      }
      if(!zip.value){
        setZip({
          ...zip,
          message: 'zip is required',
          isValid: false,
        });
      }

      error = true;
      message.error('Fill the required fields');
    } else {
      setStartTime({...startTime, message: '', isValid: true});
      setEndTime({...endTime, message: '', isValid: true});

      let obj = {
        appointmentDate: moment(selectedDate).format('DD-MMM-YYYY'),
        startTime: startTime.value,
        endTime: endTime.value,
        userId: chosenUser.value,
        city: city.value,
        address: address.value,
        country: country.value,
        state: state.value,
        zip: zip.value,
        service: chosenService.value,
        businessId:props.auth && props.auth.user && props.auth.user._id && props.auth.user._id
      };
      console.log('appointment Obj', obj);

      let res = await props.actions.createChefAppointment(
        {...props, obj},
        props.history
      );

      if (res) {
        message.success('Successfully created Appointment');
        setChefAppointmentModal(false);
        getChefAppointments();
        setSelectedDate(null);
        setStartTime({...startTime, value: '', message: '', isValid: true});
        setStartTime({...endTime, value: '', message: '', isValid: true});
        setChosenUser({...chosenUser, value: '', messge: '', isValid: true});
      }
    }
  };

  function getListData(value, appointments) {
    // console.log('got it', appointments);
    let listData = [];

    for (let i = 0; i < appointments.length; i++) {
      let item = appointments[i];

      if (
        item &&
        moment(value).format('DD-MMM-YYYY') ==
          moment(item.appointmentDate).format('DD-MMM-YYYY')
      ) {
        console.log(
          moment(value).format('DD-MMM-YYYY'),
          moment(item.appointmentDate).format('DD-MMM-YYYY')
        );
        listData.push(item);
      }
    }

    // console.log(listData);
    return listData || [];
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);

    return null;
  }

  function dateCellRender(value) {
    const listData = getListData(
      value,
      props.chef && props.chef.chefAppointments
        ? props.chef.chefAppointments
        : []
    );
    let listDataOne = listData && listData[0];

    return (
      <ul className="events">
        {listDataOne && (
          <>
            <li key={listDataOne._id} onClick={() => console.log(listDataOne)}>
              {/* <Badge status={'warning'} text={item.startTime} /> */}
              <p style={{fontSize: 10}}>
                {moment(parseFloat(listDataOne.startTime).toFixed(2), 'HH.mm').format('HH:mm ')} -{' '}
                {moment(parseFloat(listDataOne.endTime).toFixed(2), 'HH.mm').format('HH:mm ')} Appt.
                with{' '}
                {listDataOne.user &&
                  listDataOne.user.firstName &&
                  listDataOne.user.firstName}{' '}
                {listDataOne.user &&
                  listDataOne.user.lastName &&
                  listDataOne.user.lastName}
              </p>
            </li>
            {listData && listData.length > 1 && (
              <li key={listDataOne._id} onClick={() => console.log(listData)}>
                <p style={{fontSize: 10}}>+{listData.length - 1} more</p>
              </li>
            )}
          </>
        )}
      </ul>
    );
  }

  return (
    <div className="chef">
      <h1>Chefs</h1>
      {/* <button
        className="ant-btn ant-btn-primary"
        onClick={() => setCreateAvailabilityModal(true)}
      >
        Timings
      </button> */}
      {/* <GoogleCalendar /> */}

      <button
        className="ant-btn ant-btn-primary"
        // style={{marginLeft: 20}}
        onClick={() => setSidebar(!sidebar)}
      >
        Sidebar
      </button>
      <div className="chefCont">
        <div className="chefCalendar">
          <Calendar
            onSelect={(val) => {
              console.log(val);
              setSelectedDate(val);
              // setChefAppointmentModal(true);
              setChooseCreateOrBlockDateModal(true);
            }}
            dateCellRender={dateCellRender}
            // dateFullCellRender={(val) => (
            //   <div style={{minHeight: 100}}>
            //     <p
            //       onClick={() => {
            //         setSelectedDate(val);
            //         setChefAppointmentModal(true);
            //       }}
            //     >
            //       {val.date()}
            //     </p>

            //     {dateCellRender(val)}
            //   </div>
            // )}
            dateCellRender={
              props.chef && props.chef.chefAppointments && dateCellRender
            }
            monthCellRender={monthCellRender}
          />
          {/* <ScheduleComponent
            currentView="Month"
            eventSettings={{dataSource: localDataCalendar,allowEditing: false,allowDeleting:false}}
            popupOpen={()=>console.log('hi')}
          >
            <Inject services={[Day, Week, Month, Agenda]} />
          </ScheduleComponent> */}
        </div>
      </div>

      <ChefSidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
        createAvailabilityModal={createAvailabilityModal}
        setCreateAvailabilityModal={setCreateAvailabilityModal}
        createServiceModal={createServiceModal}
        setCreateServiceModal={setCreateServiceModal}
        clearAvailabilityData={clearAvailabilityData}
        initializeUpdateAvailability={initializeUpdateAvailability}
        cancelChefAppointment={cancelChefAppointment}
        unblockAvailability={unblockAvailability}
        // deleteChefServiceModal={deleteChefServiceModal}
        setDeleteChefServiceItem={setDeleteChefServiceItem}
        cancelChefAppointmentItem={cancelChefAppointmentItem}
        setCancelChefAppointmentItem={setCancelChefAppointmentItem}
        cancelChefAppointmentModal={cancelChefAppointmentModal}
        setCancelChefAppointmentModal = {setCancelChefAppointmentModal}
        unblockAvailabilityItem={unblockAvailabilityItem}
        setUnblockAvailabilityItem={setUnblockAvailabilityItem}
        chefAppointments={
          props.chef && props.chef.chefAppointments
            ? props.chef.chefAppointments
            : []
        }
        blockedAvailabilities={
          props.chef && props.chef.blockedAvailabilities
            ? props.chef.blockedAvailabilities
            : []
        }
        {...props}
      />
      <CreateChefAppointment
        chefAppointmentModal={chefAppointmentModal}
        setChefAppointmentModal={setChefAppointmentModal}
        createChefAppointment={createChefAppointment}
        setCreateChefAppointment={setCreateChefAppointment}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        saveAppointment={saveAppointment}
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        chosenUser={chosenUser}
        setChosenUser={setChosenUser}
        clearAppointmentModal={clearAppointmentModal}
        city= {city}
        setCity = {setCity}
        address = {address}
        setAddress = {setAddress}
        country = {country}
        setCountry = {setCountry}
        zip = {zip}
        setZip = {setZip}
        state={state}
        setState={setState}
        chosenService = {chosenService} 
        setChosenService = {setChosenService}
        {...props}
      />

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
        {...props}
      />
      <CreateService
        createServiceModal={createServiceModal}
        setCreateServiceModal={setCreateServiceModal}
        rate={rate}
        setRate={setRate}
        serviceDesc={serviceDesc}
        setServiceDesc={setServiceDesc}
        saveService={saveService}
      />

      <BlockAvailability
        blockAvailabilityModal={blockAvailabilityModal}
        setBlockAvailabilityModal={setBlockAvailabilityModal}
        blockStartTime={blockStartTime}
        setBlockStartTime={setBlockStartTime}
        blockEndTime={blockEndTime}
        setBlockEndTime={setBlockEndTime}
        blockDate={blockDate}
        BlockAvailability={BlockAvailabilityFunc}
        blockDescription={blockDescription}
        setBlockDescription={setBlockDescription}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        {...props}
      />

      <ChooseCreateOrBlockDate
        chooseCreateOrBlockDateModal={chooseCreateOrBlockDateModal}
        setChooseCreateOrBlockDateModal={setChooseCreateOrBlockDateModal}
        setChefAppointmentModal={setChefAppointmentModal}
        chefAppointmentModal={chefAppointmentModal}
        blockAvailabilityModal={blockAvailabilityModal}
        setBlockAvailabilityModal={setBlockAvailabilityModal}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {deleteChefServiceItem && (
        <ConfirmModal
          {...props}
          onClose={() => {
            setDeleteChefServiceItem(null);
          }}
          acceptMethod={() => deleteChefService()}
          headerText="Delete Service"
          bodyText="Are you sure you want to delete this Chef Service?"
        />
      )}
       {cancelChefAppointmentItem && (
        <ConfirmModal
          {...props}
          onClose={() => {
            setCancelChefAppointmentItem(null);
          }}
          acceptMethod={() => cancelChefAppointment()}
          headerText="Cancel Appointment"
          bodyText="Are you sure you want to cancel this Chef Appointment?"
        />
      )}
      {unblockAvailabilityItem && (
        <ConfirmModal
          {...props}
          onClose={() => {
            setUnblockAvailabilityItem(null);
          }}
          acceptMethod={() => unblockAvailability()}
          headerText="Unblock Availability"
          bodyText="Are you sure you want to Unblock this Timing?"
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.userProfile,
  
});

const mapDispatchToProps = (dispatch) => ({

  userActions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Appointments);