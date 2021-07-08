import React, { useState, useEffect } from "react";
import "./listSidebar.css";
import { connect } from "react-redux";
import { Select } from "antd";

const { Option } = Select;

const ListSidebar = props => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  let schedule = null;
  console.log(props.index);

  useEffect(() => {
    if (props.lawfirmAgencies.singleLawfirm) {
      setSelectedAddress(props.lawfirmAgencies.singleLawfirm.branches[0].id);
      setSelectedAddressIndex(0);
    }
  }, [props.lawfirmAgencies.singleLawfirm]);

  if (
    props.lawfirmAgency.branches &&
    props.lawfirmAgency.branches[props.index]
  ) {
    schedule = props.lawfirmAgency.branches[props.index].availability;
  }

  console.log(schedule);
  return (
    <>
      <div className="lawfirm-view-sidebar">
        <div className="lawfirm-view-box3">
          <div className="lawfirm-view-box1-header">
            <p>Lawyer Stats</p>
          </div>
          <div className="lawfirm-view-box1-body"></div>
        </div>
        <div className="lawfirm-view-address">
          <Select
            style={{ width: "100%" }}
            placeholder="Select Address"
            value={selectedAddress}
            onChange={(val, obj) => {
              console.log(val, obj);
              setSelectedAddressIndex(obj.key);
              setSelectedAddress(val);
            }}
          >
            {props.lawfirmAgencies.singleLawfirm.branches &&
              props.lawfirmAgencies.singleLawfirm.branches !== 0 &&
              props.lawfirmAgencies.singleLawfirm.branches.map((it, ind) => (
                <Option key={ind} value={it._id}>
                  {it.location &&
                    it.location.businessAddress &&
                    it.location.businessAddress}
                </Option>
              ))}
          </Select>
        </div>
        <div className="lawfirm-view-box1">
          <div className="lawfirm-view-box1-header">
            <p>Hours of Operation</p>
          </div>
          <div className="lawfirm-view-box1-body">
            {props.lawfirmAgency.branches &&
            props.lawfirmAgency.branches[selectedAddressIndex] &&
            props.lawfirmAgency.branches[selectedAddressIndex]
              .setAvailability &&
            schedule ? (
              <>
                <div className="lawfirm-view-timezone">
                  <p>
                    TimeZone:{" "}
                    {
                      props.lawfirmAgency.branches[selectedAddressIndex]
                        .availability.timezone.value
                    }{" "}
                  </p>
                </div>
                <div className="lawfirm-view-schedule">
                  {schedule && schedule.sunday.active ? (
                    <p>
                      Sunday: {schedule.sunday.startTime}-
                      {schedule.sunday.endTime}
                    </p>
                  ) : null}
                  {schedule && schedule.monday.active ? (
                    <p>
                      Monday: {schedule.monday.startTime}-
                      {schedule.monday.endTime}
                    </p>
                  ) : null}
                  {schedule && schedule.tuesday.active ? (
                    <p>
                      Tuesday: {schedule.tuesday.startTime}-
                      {schedule.tuesday.endTime}
                    </p>
                  ) : null}
                  {schedule && schedule.wednesday.active ? (
                    <p>
                      Wednesday: {schedule.wednesday.startTime}-
                      {schedule.wednesday.endTime}
                    </p>
                  ) : null}
                  {schedule && schedule.thursday.active ? (
                    <p>
                      Thursday: {schedule.thursday.startTime}-
                      {schedule.thursday.endTime}
                    </p>
                  ) : null}
                  {schedule && schedule.friday.active ? (
                    <p>
                      Friday: {schedule.friday.startTime}-
                      {schedule.friday.endTime}
                    </p>
                  ) : null}
                  {schedule && schedule.saturday.active ? (
                    <p>
                      Saturday: {schedule.saturday.startTime}-
                      {schedule.saturday.endTime}
                    </p>
                  ) : null}
                </div>
              </>
            ) : (
              <div className="lawfirm-view-timezone">
                <p>Schedule not fixed yet</p>
              </div>
            )}
          </div>
        </div>
        <div className="lawfirm-view-box2">
          <div className="lawfirm-view-box1-header">
            <p>Hours of Operation</p>
          </div>
          <div className="lawfirm-view-box1-body"></div>
        </div>
        <div className="lawfirm-view-box2">
          <div className="lawfirm-view-box1-header">
            <p>Hours of Operation</p>
          </div>
          <div className="lawfirm-view-box1-body"></div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.auth.lawfirmUserProfile,
  lawfirmAgency: state.lawfirmAgencies.singleLawfirm,
  lawfirmAgencies: state.lawfirmAgencies,
});

export default connect(mapStateToProps)(ListSidebar);
