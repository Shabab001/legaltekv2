import React from 'react';
import {Modal, Switch, TimePicker, DatePicker} from 'antd';
import moment from 'moment';

function ChooseCreateOrBlockDate(props) {
  const {
    chooseCreateOrBlockDateModal,
    setChooseCreateOrBlockDateModal,
    setChefAppointmentModal,
    chefAppointmentModal,
    blockAvailabilityModal,
    setBlockAvailabilityModal,
    selectedDate,
    setSelectedDate,
  } = props;
  function onChangeTimeRanges(e, value) {
    console.log(e, value);
  }
  const dateFormat = 'YYYY/MM/DD HH:mm';
  return (
    <Modal
      className="lessonModal chefModal"
      title="Choose Option"
      visible={chooseCreateOrBlockDateModal}
      onOk={() => {
          
        setChooseCreateOrBlockDateModal(false)}}
      onCancel={() => setChooseCreateOrBlockDateModal(false)}
      footer={null}
    >
      <div
        className="rowDiv"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div>
            <h3 style={{textAlign: 'center'}}>Selected Date:</h3>
          <h1 style={{textAlign: 'center'}}>
            {moment(selectedDate).format('DD-MMM-YYYY')}
          </h1>
        </div>

        <div className="chooseDiv">
          <button
            onClick={() => {
              setChooseCreateOrBlockDateModal(false);
              setChefAppointmentModal(true);
            }}
          >
            Create Appointment
          </button>
          <button
            onClick={() => {
              setChooseCreateOrBlockDateModal(false);
              setBlockAvailabilityModal(true);
            }}
          >
            Block Availability
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ChooseCreateOrBlockDate;
