import React, { useState, memo, useEffect } from "react";
import "./experience.css";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEdit, MdDelete } from "react-icons/md";
import * as userActions from "../../../../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { message } from "antd";
import ConfirmModal from "../../../modals/ConfirmModal";

const LawyerExperience = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dirty, setDirty] = useState("");
  const [currentIndex, setCuurentIndex] = useState(null);
  const [formInputs, setFormInputs] = useState([
    {
      organization: "",
      position: "",
      location: "",
      duration: "",
    },
  ]);
  function modalClose() {
    setModalOpen(false);
  }
  const handleAddInput = () => {
    const values = [...formInputs];
    setFormInputs([
      ...values,
      {
        organization: "",
        position: "",
        location: "",
        duration: "",
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
      experience: [...values],
    };
    if (props.lawyer.experience && props.lawyer.experience.length !== 0) {
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
        formInputs[i].location === "" ||
        formInputs[i].organization === "" ||
        formInputs[i].position === "" ||
        formInputs[i].duration === ""
      ) {
        message.error("Cannot Save Empty Field");
        return;
      }
    }
    let data = null;

    data = {
      experience: [...formInputs],
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
      setFormInputs(props.lawyer.experience);
    }
  }, [props.lawyer.experience]);

  return (
    <div className="lexp-main">
      <div className="lexp-container">
        <div className="lexp-heading">
          <p>Experience</p>
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
                      formInputs[index]["organization"] !== ""
                        ? "dirty"
                        : "sdsd"
                    }
                    onChange={e => handleInputChange(e, index)}
                    name="organization"
                    value={input.organization}
                  />
                  <span className="lexp-placeholder"> Organization</span>
                </div>
                <div className="lexp-input-conatiner">
                  <input
                    autoComplete="sdhfjsd"
                    className={
                      formInputs[index]["position"] !== "" ? "dirty" : ""
                    }
                    onChange={e => handleInputChange(e, index)}
                    name="position"
                    value={input.position}
                  />
                  <span className="lexp-placeholder"> Position</span>
                </div>
                <div className="lexp-input-conatiner">
                  <input
                    autoComplete="sdhfjsd"
                    className={
                      formInputs[index]["location"] !== "" ? "dirty" : ""
                    }
                    onChange={e => handleInputChange(e, index)}
                    name="location"
                    value={input.location}
                  />
                  <span className="lexp-placeholder"> Location</span>
                </div>
                <div className="lexp-input-conatiner">
                  <input
                    autoComplete="sdhfjsd"
                    className={
                      formInputs[index]["duration"] !== "" ? "dirty" : ""
                    }
                    type="number"
                    onChange={e => handleInputChange(e, index)}
                    name="duration"
                    value={input.duration}
                  />
                  <span className="lexp-placeholder"> Duration</span>
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
)(memo(LawyerExperience));
