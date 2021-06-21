import React from 'react';
import {Modal, Switch, TimePicker} from 'antd';
import moment from 'moment';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

function CreateAvailability(props) {
  const {
    createAvailabilityModal,
    setCreateAvailabilityModal,
    sunday,
    setSunday,
    monday,
    setMonday,
    tuesday,
    setTuesday,
    wednesday,
    setWednesday,
    thursday,
    setThursday,
    friday,
    setFriday,
    saturday,
    setSaturday,
    saveTimings,
    clearAvailabilityData,
    chefAvailability,
    set,
    timezone,
    setTimezone,
    index
  } = props;
  function onChangeTimeRanges(name, value) {
    console.log(name, value);
    switch (name) {
    
      case 'Sunday':
        setSunday({
          ...sunday,
          startTime: value[0],
          endTime: value[1],
          message: '',
        });
        break;
      case 'Monday':
        setMonday({
          ...monday,
          startTime: value[0],
          endTime: value[1],
          message: '',
        });
        break;
      case 'Tuesday':
        setTuesday({
          ...tuesday,
          startTime: value[0],
          endTime: value[1],
          message: '',
        });
        break;
      case 'Wednesday':
        setWednesday({
          ...wednesday,
          startTime: value[0],
          endTime: value[1],
          message: '',
        });
        break;
      case 'Thursday':
        setThursday({
          ...thursday,
          startTime: value[0],
          endTime: value[1],
          message: '',
        });
        break;
      case 'Friday':
        setFriday({
          ...friday,
          startTime: value[0],
          endTime: value[1],
          message: '',
        });
        break;
      case 'Saturday':
        setSaturday({
          ...saturday,
          startTime: value[0],
          endTime: value[1],
          message: '',
        });
      default:
        break;
    }
  }
  const onChange = async (name, value) => {
    console.log({name: name, value: value});
    switch (name) {
        case'timezone':
        console.log(value)
        setTimezone({
            ...timezone,
            value:value,
            message:""
        })

      case 'Sunday':
        setSunday({
          ...sunday,
          active: value,
          startTime: value ? sunday.startTime : '',
          endTime: value ? sunday.endTime : '',
          message: value && !sunday.startTime ? 'Time range is required' : '',
        });

        break;
      case 'Monday':
        setMonday({
          ...monday,
          active: value,
          startTime: value ? monday.startTime : '',
          endTime: value ? monday.endTime : '',
          message: value && !monday.startTime ? 'Time range is required' : '',
        });
        break;
      case 'Tuesday':
        setTuesday({
          ...tuesday,
          active: value,
          startTime: value ? tuesday.startTime : '',
          endTime: value ? tuesday.endTime : '',
          message: value && !tuesday.startTime ? 'Time range is required' : '',
        });
        break;
      case 'Wednesday':
        setWednesday({
          ...wednesday,
          active: value,
          startTime: value ? wednesday.startTime : '',
          endTime: value ? wednesday.endTime : '',
          message:
            value && !wednesday.startTime ? 'Time range is required' : '',
        });
        break;
      case 'Thursday':
        setThursday({
          ...thursday,
          active: value,
          startTime: value ? thursday.startTime : '',
          endTime: value ? thursday.endTime : '',
          message: value && !thursday.startTime ? 'Time range is required' : '',
        });
        break;
      case 'Friday':
        setFriday({
          ...friday,
          active: value,
          startTime: value ? friday.startTime : '',
          endTime: value ? friday.endTime : '',
          message: value && !friday.startTime ? 'Time range is required' : '',
        });
        break;
      case 'Saturday':
        setSaturday({
          ...saturday,
          active: value,
          startTime: value ? saturday.startTime : '',
          endTime: value ? saturday.endTime : '',
          message: value && !saturday.startTime ? 'Time range is required' : '',
        });
      default:
        break;
    }
    console.log(sunday, monday);
    console.log(timezone)
  };

  return (
    <Modal
      className="lessonModal chefModal"
      title={chefAvailability ? 'Update Availability' : 'Create Availability'}
      visible={createAvailabilityModal}
      onOk={() => {
        clearAvailabilityData();
        setCreateAvailabilityModal(false);
      }}
      onCancel={() => {
        clearAvailabilityData();
        setCreateAvailabilityModal(false);
        set(index);
      }}
      footer={null}
    >
        
      <p style={{textAlign: 'center'}}>
        Choose the timings you want to provide service in
      </p>
      <TimezonePicker
                absolute      = {false}
                defaultValue  = "Europe/Moscow"
                placeholder   = "Select timezone..."
                onChange      = {(newValue)=>onChange("timezone",newValue)}
                 style={{margin:"1rem 0rem"}}
                />
      <label htmlFor="none">
        <div style={{marginBottom: 10}}>
          <Switch
            name="Sunday"
            checked={sunday.active}
            onChange={(value) => onChange('Sunday', value)}
            style={{marginRight: 20}}
          />
          Sunday
        </div>
        <TimePicker.RangePicker
          value={
            sunday.startTime &&
            sunday.endTime && [
              moment(sunday.startTime, 'HH:mm'),
              moment(sunday.endTime, 'HH:mm'),
            ]
          }
          disabled={!sunday.active}
          onChange={(e, value) => onChangeTimeRanges('Sunday', value)}
          minuteStep={30}
          format={'HH:mm'}
        />
        {sunday.message && (
          <p className="error">
            <i className="fe fe-alert-triangle" />{' '}
            {sunday.message && sunday.message}
          </p>
        )}
      </label>

      <label htmlFor="none">
        <div style={{marginBottom: 10}}>
          <Switch
            name="Monday"
            checked={monday.active}
            onChange={(value) => onChange('Monday', value)}
            style={{marginRight: 20}}
          />
          Monday
        </div>

        <TimePicker.RangePicker
        value={
          monday.startTime &&
          monday.endTime && [
            moment(monday.startTime, 'HH:mm'),
            moment(monday.endTime, 'HH:mm'),
          ]
        }
          onChange={(e, value) => onChangeTimeRanges('Monday', value)}
          disabled={!monday.active}
          minuteStep={30}
          format={'HH:mm'}
        />
        {monday.message && (
          <p className="error">
            <i className="fe fe-alert-triangle" />{' '}
            {monday.message && monday.message}
          </p>
        )}
      </label>

      <label htmlFor="none">
        <div style={{marginBottom: 10}}>
          <Switch
            name="Tuesday"
            onChange={(value) => onChange('Tuesday', value)}
            checked={tuesday.active}
            style={{marginRight: 20}}
          />
          Tuesday
        </div>

        <TimePicker.RangePicker
          value={
            tuesday.startTime &&
            tuesday.endTime && [
              moment(tuesday.startTime, 'HH:mm'),
              moment(tuesday.endTime, 'HH:mm'),
            ]
          }
          onChange={(e, value) => onChangeTimeRanges('Tuesday', value)}
          disabled={!tuesday.active}
          minuteStep={30}
          format={'HH:mm'}
        />
        {tuesday.message && (
          <p className="error">
            <i className="fe fe-alert-triangle" />{' '}
            {tuesday.message && tuesday.message}
          </p>
        )}
      </label>

      <label htmlFor="none">
        <div style={{marginBottom: 10}}>
          <Switch
            name="Wednesday"
            onChange={(value) => onChange('Wednesday', value)}
            checked={wednesday.active}
            style={{marginRight: 20}}
          />
          Wednesday
        </div>

        <TimePicker.RangePicker
            value={
              wednesday.startTime &&
              wednesday.endTime && [
                moment(wednesday.startTime, 'HH:mm'),
                moment(wednesday.endTime, 'HH:mm'),
              ]
            }
          onChange={(e, value) => onChangeTimeRanges('Wednesday', value)}
          disabled={!wednesday.active}
          minuteStep={30}
          format={'HH:mm'}
        />
        {wednesday.message && (
          <p className="error">
            <i className="fe fe-alert-triangle" />{' '}
            {wednesday.message && wednesday.message}
          </p>
        )}
      </label>

      <label htmlFor="none">
        <div style={{marginBottom: 10}}>
          <Switch
            name="Thursday"
            checked={thursday.active}
            onChange={(value) => onChange('Thursday', value)}
            style={{marginRight: 20}}
          />
          Thursday
        </div>

        <TimePicker.RangePicker
            value={
              thursday.startTime &&
              thursday.endTime && [
                moment(thursday.startTime, 'HH:mm'),
                moment(thursday.endTime, 'HH:mm'),
              ]
            }
          onChange={(e, value) => onChangeTimeRanges('Thursday', value)}
          disabled={!thursday.active}
          minuteStep={30}
          format={'HH:mm'}
        />
        {thursday.message && (
          <p className="error">
            <i className="fe fe-alert-triangle" />{' '}
            {thursday.message && thursday.message}
          </p>
        )}
      </label>

      <label htmlFor="none">
        <div style={{marginBottom: 10}}>
          <Switch
            name="Friday"
            checked={friday.active}
            onChange={(value) => onChange('Friday', value)}
            style={{marginRight: 20}}
          />
          Friday
        </div>

        <TimePicker.RangePicker
           value={
            friday.startTime &&
            friday.endTime && [
              moment(friday.startTime, 'HH:mm'),
              moment(friday.endTime, 'HH:mm'),
            ]
          }
          onChange={(e, value) => onChangeTimeRanges('Friday', value)}
          disabled={!friday.active}
          minuteStep={30}
          format={'HH:mm'}
        />

        {friday.message && (
          <p className="error">
            <i className="fe fe-alert-triangle" />{' '}
            {friday.message && friday.message}
          </p>
        )}
      </label>

      <label htmlFor="none">
        <div style={{marginBottom: 10}}>
          <Switch
            name="Saturday"
            checked={saturday.active}
            onChange={(value) => onChange('Saturday', value)}
            style={{marginRight: 20}}
          />
          Saturday
        </div>

        <TimePicker.RangePicker
           value={
            saturday.startTime &&
            saturday.endTime && [
              moment(saturday.startTime, 'HH:mm'),
              moment(saturday.endTime, 'HH:mm'),
            ]
          }
          onChange={(e, value) => onChangeTimeRanges('Saturday', value)}
          disabled={!saturday.active}
          minuteStep={30}
          format={'HH:mm'}
        />
        {saturday.message && (
          <p className="error">
            <i className="fe fe-alert-triangle" />{' '}
            {saturday.message && saturday.message}
          </p>
        )}
      </label>

      <button
        className="ant-btn ant-btn-primary"
        style={{marginTop: 20}}
        onClick={() => saveTimings()}
      >
        Save Timings
      </button>
    </Modal>
  );
}

export default CreateAvailability;
