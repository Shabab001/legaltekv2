import React, {useEffect, useState} from 'react';
import {Modal, Select, DatePicker, TimePicker} from 'antd';
import moment from 'moment';
import Geolocate from '../../../MiniComponents/Geolocate';
import Search from '../../../MiniComponents/CanadaPost/Search';

function CreateChefAppointment(props) {
  const {
    chefAppointmentModal,
    setChefAppointmentModal,
    createChefAppointment,
    selectedDate,
    setSelectedDate,
    saveAppointment,
    startTime,
    endTime,
    setStartTime,
    setEndTime,
    chosenUser,
    setChosenUser,
    clearAppointmentModal,
    address,
    setAddress,
    city,
    setCity,
    zip,
    setZip,
    state,
    setState,
    country,
    setCountry,
    chefServices,
    chosenService,
    setChosenService,
  } = props;
  const [searchEmail, setSearchEmail] = useState('');
  const [searchedUsers, setSearchedUsers] = useState([]);
  console.log(props.chefServices);
  // useEffect(() => {

  //   props.userActions.chooseFromUsers({...props, searchEmail}, props.history)
  //   return () => {

  //   }
  // }, [searchEmail])

  const changeSearchEmail = async (val) => {
    console.log(val);
    setSearchEmail(val);
    props.userActions.chooseFromUsers(
      {...props, searchEmail: val},
      props.history
    );
  };

  useEffect(() => {
    console.log(props);
    if (props.auth && props.auth.searchedUsers) {
      console.log(props.auth.searchedUsers);
      setSearchedUsers(props.auth.searchedUsers);
    }
  }, [props.auth && props.auth.searchedUsers]);

  const updateAddress = async (addr) => {
    console.log(addr);
  };

  const handleSelectionCanadaPost = (item, index) => {
    console.log('item', item);

    console.log('item', item);
    setCountry({
      ...country,
      value: item.CountryName ? item.CountryName : '',
      isValid: true,
      message: '',
    });

    setZip({
      ...zip,
      value: item.PostalCode ? item.PostalCode : '',
      isValid: true,
      message: '',
    });

    setCity({
      ...city,
      value: item.City ? item.City : '',
      isValid: true,
      message: '',
    });

    setState({
      ...state,
      value: item.Province ? item.Province : '',
      isValid: true,
      message: '',
    });
    setAddress({
      ...address,
      value: item.Line1 ? item.Line1 : '',
      isValid: true,
      message: '',
    });
  };

  let countryShort = localStorage.getItem('country_short');
  let countryCondition =
    countryShort != 'US' &&
    countryShort != 'CAN' &&
    countryShort != 'CN' &&
    countryShort != 'USA';

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dateFormat = 'YYYY/MM/DD HH:mm';
  return (
    <Modal
      className="lessonModal chefModal"
      title={
        createChefAppointment ? 'Create Appointment' : 'Update Appointment'
      }
      visible={chefAppointmentModal}
      onOk={() => {
        setChefAppointmentModal(false);
        setSelectedDate(null);
        setChosenUser({...chosenUser, value: ''});
        setSearchEmail('');
        clearAppointmentModal();
      }}
      onCancel={() => {
        setChefAppointmentModal(false);
        setSelectedDate(null);
        setChosenUser({...chosenUser, value: ''});
        setSearchEmail('');
        clearAppointmentModal();
      }}
      footer={null}
    >
      {console.log(selectedDate)}
      <label>
        Search Users
        <Select
          filterOption={false}
          name="duration"
          showSearch={true}
          defaultValue={''}
          placeholder="Search Users"
          aria-autocomplete={'none'}
          autocomplete="new-password"
          searchValue={searchEmail}
          onSelect={(val, item) => {
            console.log(val);
            setChosenUser({
              ...chosenUser,
              value: val,
              message: '',
              isValid: true,
            });
          }}
          onSearch={(val, item) => {
            console.log(val, item);
            changeSearchEmail(val);
          }}
        >
          {searchedUsers &&
            searchedUsers.map((item, index) => (
              <Select.Option key={item._id} value={item._id}>
                {item.firstName + ' ' + item.lastName + `(${item.email})`}
              </Select.Option>
            ))}
        </Select>
      </label>
      <label>
        Choose Service
        <Select
          filterOption={false}
          name="duration"
          defaultValue={chefServices && chefServices[0] ? chefServices[0]._id : ""}
          placeholder="Choose Service"
          aria-autocomplete={'none'}
          autocomplete="new-password"
          searchValue={searchEmail}
          value={chosenService.value}
          onSelect={(val, item) => {
            console.log(val);
            setChosenService({...chosenService, value: val})
          }}
        >
          {chefServices &&
            chefServices.map((item, index) => (
              <Select.Option key={item._id} value={item._id}>
                {item.description}
              </Select.Option>
            ))}
        </Select>
      </label>
      <label>
        Appointment Date
        <DatePicker
          format={'YYYY/MM/DD'}
          // showTime
          placeholder="Appointment date"
          value={selectedDate ? moment(selectedDate, dateFormat) : ''}
          onChange={(val) => setSelectedDate(val)}
        />
        <p className={`helpertext`}>
          <>
            <i className="fe fe-alert-triangle" /> Lesson Date is required
          </>
        </p>
      </label>
      <label>
        Duration
        <TimePicker.RangePicker
          value={
            startTime.value && endTime.value
              ? [
                  moment(startTime.value, 'HH:mm'),
                  moment(endTime.value, 'HH:mm'),
                ]
              : null
          }
          // disabled={!sunday.active}
          onChange={(e, value) => {
            if (value.length == 2) {
              setStartTime({
                ...startTime,
                message: '',
                isValid: true,
                value: value[0],
              });
              setEndTime({
                ...endTime,
                message: '',
                isValid: true,
                value: value[1],
              });
            } else {
              setStartTime({
                ...startTime,
                message: 'Start time is required',
                isValid: false,
                value: '',
              });
              setEndTime({
                ...endTime,
                message: 'End time is required',
                isValid: false,
                value: '',
              });
            }
          }}
          minuteStep={30}
          format={'HH:mm'}
        />
      </label>

      {/* {countryCondition ? (
        <label>
          Business Location:
          <i className="fa fa-map-marker" />
          <Geolocate chooseAddress={(address) => updateAddress(address)} />
        </label>
      ) : ( */}
      <label className="canadaSearch">
        Business Location:
        <i className="fa fa-map-marker" />
        <Search
          handleSelectionCanadaPost={(item) => handleSelectionCanadaPost(item)}
        />
      </label>
      {/* )} */}

      <label>
        Address
        <input
          placeholder="Address"
          value={address.value}
          onChange={(e) => {
            setAddress({...address, value: e.target.value});
          }}
        />
      </label>

      <label>
        City
        <input
          placeholder="City"
          value={city.value}
          onChange={(e) => {
            setCity({...city, value: e.target.value});
          }}
        />
      </label>

      <label>
        State
        <input
          placeholder="State"
          value={state.value}
          onChange={(e) => {
            setState({...state, value: e.target.value});
          }}
        />
      </label>

      <label>
        Country
        <input
          placeholder="Country"
          value={country.value}
          onChange={(e) => {
            setCountry({...address, value: e.target.value});
          }}
        />
      </label>

      <label>
        Zip
        <input
          placeholder="Zip"
          value={zip.value}
          onChange={(e) => {
            setZip({...zip, value: e.target.value});
          }}
        />
      </label>

      <button
        className="ant-btn ant-btn-primary"
        style={{marginTop: 20}}
        onClick={() => {
          saveAppointment();
        }}
      >
        Save Appointment
      </button>
    </Modal>
  );
}

export default CreateChefAppointment;
