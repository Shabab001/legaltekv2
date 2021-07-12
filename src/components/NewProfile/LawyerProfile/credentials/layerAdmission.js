import React, { useState, memo, useRef, useEffect } from "react";
import "./experience.css";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEdit, MdDelete } from "react-icons/md";
import * as userActions from "../../../../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { message, DatePicker } from "antd";
import ConfirmModal from "../../../modals/ConfirmModal";
import moment from "moment";

const LawyerAdmission = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dirty, setDirty] = useState("");
  const [currentIndex, setCuurentIndex] = useState(null);
  const [focus, setFocus] = useState(false);
  const [formInputs, setFormInputs] = useState([
    {
      state: "",
      date: "",
    },
  ]);
  const dateFormat = "YYYY/MM/DD";
  const refDate = useRef(null);
  function modalClose() {
    setModalOpen(false);
  }
  function onChange(date, dateString, index, e) {
    console.log(e);
    console.log(date, dateString);
    const values = [...formInputs];
    values[index].date = dateString;
    setFormInputs(values);
  }
  const handleAddInput = () => {
    const values = [...formInputs];
    setFormInputs([
      ...values,
      {
        state: "",
        date: "",
      },
    ]);
  };
  const open = index => {
    console.log(index);
    setModalOpen(true);
  };
  const handleRemoveInput = async index => {
    console.log(index);

    const values = [...formInputs];
    values.splice(index, 1);

    let data = null;

    data = {
      admisssion: [...values],
    };
    if (props.lawyer.admission && props.lawyer.admission.length !== 0) {
      let update = await props.actions.updateLawyerUserProfile(
        props.lawyer.id,
        data
      );
      if (update) {
        setModalOpen(false);
        setFormInputs(input => (input = values));
      }
    } else {
      setModalOpen(false);
      setFormInputs(input => (input = values));
    }
  };

  const handleInputChange = (e, index) => {
    const values = [...formInputs];
    values[index][e.target.name] = e.target.value;
    console.log(typeof e.target.name);
    setDirty(e.target.name);
    setCuurentIndex(d => (d = index));
    setFormInputs(values);
  };
  const handleSave = async () => {
    for (let i = 0; i < formInputs.length; i++) {
      if (formInputs[i].state === "" || formInputs[i].date === "") {
        message.error("Cannot Save Empty Field");
        return;
      }
    }
    let data = null;

    data = {
      admission: [...formInputs],
    };

    let update = await props.actions.updateLawyerUserProfile(
      props.lawyer.id,
      data
    );
  };

  useEffect(() => {
    if (
      props.lawyer &&
      props.lawyer.admission &&
      props.lawyer.admission.length !== 0
    ) {
      setFormInputs(props.lawyer.admission);
    }
  }, [props.lawyer.admission]);

  return (
    <div className="lexp-main">
      <div className="lexp-container">
        <div className="lexp-heading">
          <p>Admissions</p>
        </div>
        <div className="lexp-body">
          <div className="lexp-add">
            <p>Add</p>
            <AiOutlinePlus onClick={handleAddInput} />
          </div>
          {formInputs &&
            formInputs.map((input, index) => (
              <div key={index} className="lexp-inputs">
                <div className="lexp-input-conatiner">
                  <input
                    autoComplete="sdhfjsd"
                    className={
                      formInputs[index]["state"] !== "" ? "dirty" : "sdsd"
                    }
                    onChange={e => handleInputChange(e, index)}
                    name="state"
                    value={input.state}
                  />
                  <span className="lexp-placeholder">
                    {" "}
                    State / Province / Court
                  </span>
                </div>
                <div className="lexp-input-conatiner2">
                  <DatePicker
                    value={input.date ? moment(input.date, dateFormat) : ""}
                    onBlur={() => {
                      setFocus(false);
                    }}
                    onClick={() => {
                      setFocus(true);
                    }}
                    ref={refDate}
                    className={
                      formInputs[index]["date"] !== "" || focus
                        ? "dirty"
                        : "sdsd"
                    }
                    placeholder=""
                    onChange={(date, dateString, e) =>
                      onChange(date, dateString, index, e)
                    }
                    bordered={false}
                  />
                  <span className="lexp-placeholder"> Date</span>
                </div>
                <MdDelete
                  onClick={() => open(index)}
                  style={{ color: "red" }}
                />

                {modalOpen && (
                  <ConfirmModal
                    {...props}
                    onClose={modalClose}
                    acceptMethod={() => {
                      console.log(index);

                      handleRemoveInput(index);
                    }}
                    headerText="Delete Blog post"
                    bodyText="Are you sure you want to delete this post?"
                  />
                )}
              </div>
            ))}
          {formInputs && formInputs.length !== 0 ? (
            <div className="lexp-btn" onClick={handleSave}>
              <p>Save</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  lawyer: state.auth.lawyerUserProfile,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(LawyerAdmission));
