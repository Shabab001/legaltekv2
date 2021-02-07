import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import "./../../../assets/css/chat.css"
import ChatApp from "../../ChatApp"
function Chats() {
  return (
    <div className="user-profile tab">

      <div className="chatContacts">

        <div className="newConversationBtn">
          <div className="addBtn">
            <i className="fe fe-plus" />
          </div>
          <div>
            New Conversation
          </div>
        </div>
        

        <div className="chatSearchCont">

        </div>

      </div>

      <div className="chatWindow">

        <ChatApp/>
      </div>

      <div className="userProfile"></div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
