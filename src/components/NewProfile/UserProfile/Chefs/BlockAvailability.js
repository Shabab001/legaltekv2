import React from 'react';
import {Modal, Switch, TimePicker, DatePicker} from 'antd';
import moment from 'moment';

function BlockAvailability(props) {
  const {
    blockAvailabilityModal,
    setBlockAvailabilityModal,
    blockStartTime,
    setBlockStartTime,
    setBlockEndTime,
    blockEndTime,
    blockDate,
    setBlockDate,
    blockDescription,
    setBlockDescription,
    BlockAvailability,
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
      title="Block Availability"
      visible={blockAvailabilityModal}
      onOk={() => setBlockAvailabilityModal(false)}
      onCancel={() => setBlockAvailabilityModal(false)}
      footer={null}
    >
      <div
        className="rowDiv"
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <label>
          Block Date
          <DatePicker
            format={'YYYY/MM/DD'}
            // showTime
            placeholder="Appointment date"
            value={selectedDate ? moment(selectedDate, dateFormat) : ''}
            onChange={(val) => setSelectedDate(val)}
          />
          {!selectedDate && (
            <p className={` ${selectedDate ? '' : 'error'}helpertext`}>
              <>
                <i className="fe fe-alert-triangle" /> Lesson Date is required
              </>
            </p>
          )}
        </label>
        <label>
          Block Duration
          <TimePicker.RangePicker
            value={
              blockStartTime.value && blockEndTime.value
                ? [
                    moment(blockStartTime.value, 'HH:mm'),
                    moment(blockEndTime.value, 'HH:mm'),
                  ]
                : null
            }
            // disabled={!sunday.active}
            onChange={(e, value) => {
              if (value.length == 2) {
                setBlockStartTime({
                  ...blockStartTime,
                  message: '',
                  isValid: true,
                  value: value[0],
                });
                setBlockEndTime({
                  ...blockEndTime,
                  message: '',
                  isValid: true,
                  value: value[1],
                });
              } else {
                setBlockStartTime({
                  ...blockStartTime,
                  message: 'Start time is required',
                  isValid: false,
                  value: '',
                });
                setBlockEndTime({
                  ...blockEndTime,
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
      </div>
      <label>
        Block Description
        <input
          placeholder="Block description"
          value={blockDescription.value}
          onChange={(e) => {
            setBlockDescription({...blockDescription, value: e.target.value});
          }}
        />
        {/* <p className={`${serviceDesc.isValid ? '' : 'error'} helpertext`}>
          {serviceDesc.message && (
            <>
              <i className="fe fe-alert-triangle" /> {serviceDesc.message? serviceDesc.message : "Service Description is required"} 
            </>
          )}
        </p> */}
      </label>
      <button
        className="ant-btn ant-btn-primary"
        style={{marginTop: 20}}
        onClick={() => BlockAvailability()}
      >
       Block Time
      </button>
    </Modal>
  );
}

export default BlockAvailability;
