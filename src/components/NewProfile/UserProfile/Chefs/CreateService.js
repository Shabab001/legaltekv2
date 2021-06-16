import React from 'react';
import {Modal, Switch, TimePicker} from 'antd';

function CreateService(props) {
  const {
    createServiceModal,
    setCreateServiceModal,
    rate,
    setRate,
    serviceDesc,
    setServiceDesc,
    saveService
  } = props;
  function onChangeTimeRanges(e, value) {
    console.log(e, value);
  }

  return (
    <Modal
      className="lessonModal chefModal"
      title="Create Service"
      visible={createServiceModal}
      onOk={() => setCreateServiceModal(false)}
      onCancel={() => setCreateServiceModal(false)}
      footer={null}
    >
  
      <div className="rowDiv" style={{display:'flex', flexDirection:'row', width:'100%',justifyContent:'space-between'}}>
      <label>
        Service
        <input
          placeholder="Service"
          value={serviceDesc.value}
          onChange={(e) => {
            if(e.target.value.length > 128){
              setServiceDesc({...serviceDesc, message:"Description limit is 128 characters", isValid:false})
            }
            else{
              setServiceDesc({...serviceDesc, value:e.target.value, message:"", isValid: true})}}
            }
        />
        <p className={`${serviceDesc.isValid ? '' : 'error'} helpertext`}>
          {serviceDesc.message && (
            <>
              <i className="fe fe-alert-triangle" /> {serviceDesc.message? serviceDesc.message : "Service Description is required"} 
            </>
          )}
        </p>
      </label>

      <label>
        Rate
        <input
          placeholder="Rate"
          value={rate.value}
          onChange={(e) => {
            let regex = new RegExp(/^\d*\.?\d*$/, 'gi');
            if (e.target.value.match(regex)) {
              if (e.target.value != '') {
                setRate({
                  ...rate,
                  value: e.target.value,
                  isValid: true,
                  message: '',
                });
              } else {
                setRate({
                  ...rate,
                  value: e.target.value,
                  isValid: false,
                  message: 'Service Rate is required',
                });
              }
            }
          }}
        />
        <p className={`${rate.isValid ? '' : 'error'} helpertext`}>
          {rate.message && (
            <>
              <i className="fe fe-alert-triangle" /> Service Rate is required
            </>
          )}
        </p>
      </label>
      </div>
    

      <button className="ant-btn ant-btn-primary" style={{marginTop: 20}} onClick={()=>saveService()}>
        Save Service
      </button>
    </Modal>
  );
}

export default CreateService;
