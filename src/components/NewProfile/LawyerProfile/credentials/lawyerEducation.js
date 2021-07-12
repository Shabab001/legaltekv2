import React, { useState, memo, useEffect } from "react";
import "./experience.css";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEdit, MdDelete } from "react-icons/md";
import * as userActions from "../../../../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { message } from "antd";
import ConfirmModal from "../../../modals/ConfirmModal";

const LawyerEducation = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dirty, setDirty] = useState("");
  const [currentIndex, setCuurentIndex] = useState(null);
  const [formInputs, setFormInputs] = useState([
    {
      school: "",
      degree: "",
      major: "",
      graduation: "",
    },
  ]);
  function modalClose() {
    setModalOpen(false);
  }
  const handleAddInput = () => {
    let values = [...formInputs];
    setFormInputs([
      ...values,
      {
        school: "",
        degree: "",
        major: "",
        graduation: "",
      },
    ]);
  };
  const open = () => {
    setModalOpen(true);
  };
  const handleRemoveInput = async index => {
    console.log(index);

    const values = [...formInputs];
    values.splice(index, 1);

    let data = null;

    data = {
      education: [...values],
    };
    if (props.lawyer.education && props.lawyer.education.length !== 0) {
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
      if (
        formInputs[i].school === "" ||
        formInputs[i].degree === "" ||
        formInputs[i].major === "" ||
        formInputs[i].graduation === ""
      ) {
        message.error("Cannot Save Empty Field");
        return;
      }
    }
    let data = null;

    data = {
      education: [...formInputs],
    };

    let update = await props.actions.updateLawyerUserProfile(
      props.lawyer.id,
      data
    );
  };

  useEffect(() => {
    if (
      props.lawyer &&
      props.lawyer.education &&
      props.lawyer.education.length !== 0
    ) {
      setFormInputs(props.lawyer.education);
    }
  }, [props.lawyer.education]);

  return (
    <div className="lexp-main">
      <div className="lexp-container">
        <div className="lexp-heading">
          <p>Education</p>
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
                      formInputs[index]["school"] !== "" ? "dirty" : "sdsd"
                    }
                    onChange={e => handleInputChange(e, index)}
                    name="school"
                    value={input.school}
                  />
                  <span className="lexp-placeholder"> School</span>
                </div>
                <div className="lexp-input-conatiner">
                  <input
                    autoComplete="sdhfjsd"
                    className={
                      formInputs[index]["degree"] !== "" ? "dirty" : ""
                    }
                    onChange={e => handleInputChange(e, index)}
                    name="degree"
                    value={input.degree}
                  />
                  <span className="lexp-placeholder"> Degree</span>
                </div>
                <div className="lexp-input-conatiner">
                  <input
                    autoComplete="sdhfjsd"
                    className={formInputs[index]["major"] !== "" ? "dirty" : ""}
                    onChange={e => handleInputChange(e, index)}
                    name="major"
                    value={input.major}
                  />
                  <span className="lexp-placeholder"> Major</span>
                </div>
                <div className="lexp-input-conatiner">
                  <input
                    autoComplete="sdhfjsd"
                    className={
                      formInputs[index]["graduation"] !== "" ? "dirty" : ""
                    }
                    onChange={e => handleInputChange(e, index)}
                    name="graduation"
                    value={input.graduation}
                  />
                  <span className="lexp-placeholder"> Graduation</span>
                </div>
                <MdDelete onClick={open} style={{ color: "red" }} />

                {modalOpen && (
                  <ConfirmModal
                    {...props}
                    onClose={modalClose}
                    acceptMethod={() => handleRemoveInput(index)}
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
)(memo(LawyerEducation));
