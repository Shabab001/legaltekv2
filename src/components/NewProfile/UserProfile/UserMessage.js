import React, { useEffect, useState, useRef } from "react";
import "./message.css"
import { socket } from "../../MiniComponents/Socket";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as messagingActions from "../../../actions/messagingActions";
import moment from "moment";
import { Modal } from "antd";

function UserMessage(props) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState([]);
  const [conversationId, setConversationId] = useState("");
  const [activeConversation, setActiveConversation] = useState(null);
  const [requestModal, setRequestModal] = useState(false);
  const messagesEndRef = useRef(null);
  const [activeChatUser, setActiveChatUser] = useState(null);

  useEffect(() => {
    props.messagingActions.getChatList(props, props.history);
  }, []);

  useEffect(() => {
    let activeConvo = activeConversation;
    let otherUsers =
      activeConvo &&
      activeConvo.users &&
      activeConvo.users.map((item) => item.user);
    let receiver =
      otherUsers &&
      otherUsers.filter((item) => item._id != props.auth.user._id)[0];
    setActiveChatUser(receiver);
  }, [activeConversation]);

  useEffect(() => {
    console.log(props.messaging);
    if (props.messaging.chatList) {
      setChatList(props.messaging.chatList);
      setConversationId(
        props.messaging.chatList[0] && props.messaging.chatList[0]._id
      );
      setActiveConversation(
        props.messaging.chatList[0] && props.messaging.chatList[0]
      );

      //getting the active conversation user
      let activeConvo =
        props.messaging.chatList[0] && props.messaging.chatList[0];
      let otherUsers =
        activeConvo &&
        activeConvo.users &&
        activeConvo.users.map((item) => item.user);
      let receiver =
        otherUsers &&
        otherUsers.filter((item) => item._id != props.auth.user._id)[0];

      //setting the active conversation user
      console.log(receiver);
      setActiveChatUser(receiver);

      if (
        props.messaging.chatList[0] &&
        props.messaging.chatList[0].request &&
        props.messaging.chatList[0].request == "PENDING"
      ) {
        setRequestModal(true);
      }
    }
  }, [props.messaging]);

  const setData = (data) => {
    console.log("got messages", data);
    setMessages((messages) => [...data]);
    scrollToBottom();
  };

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      console.log(data);
      setMessages((messages) => [...messages, ...data]);
      scrollToBottom();
    });

    socket.on("room2", (data) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    if (conversationId) {
      console.log(conversationId);
      socket.on("message", function (data) {
        console.log(data);
      });
      socket.emit("join", { conversationId: conversationId });
      console.log("messages", messages);
      socket.emit("getMessages", { conversationId: conversationId });
      socket.on(conversationId, setData);
    }
    if (activeConversation && activeConversation._id) {
      socket.on(`requestAccepted-${activeConversation._id}`, (data) => {
        console.log("working", data);
        setActiveConversation(data);
      });

      socket.on(`requestBlocked-${activeConversation._id}`, (data) => {
        console.log("working", data);
        setActiveConversation(data);
      });
    }
  }, [conversationId]);

  const sendMessage = async () => {
    let otherUsers =
      activeConversation.users &&
      activeConversation.users.map((item) => item.user);
    let receiver = otherUsers.filter(
      (item) => item._id != props.auth.user._id
    )[0];
    let obj = {
      message: message,
      sender: props.auth.user._id,
      senderType: props.auth.user.userType,
      receiver: receiver._id,
      receiverType: receiver.userType,
      conversation: conversationId,
    };
    console.log(otherUsers, obj);
    await props.messagingActions.sendMessage({ obj, ...props }, props.history);
    // socket.emit("sendMessage", obj);
    // socket.emit('text',{conversationId: conversationId, message: message})
    setMessage("");
  };

  const scrollToBottom = () => {
    if (messagesEndRef && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const acceptRequest = () => {
    socket.emit("acceptRequest", {
      conversationId: activeConversation._id,
      request: "ACCEPTED",
      userId:
        props.auth &&
        props.auth.user &&
        props.auth.user._id &&
        props.auth.user._id,
      userType:
        props.auth &&
        props.auth.user &&
        props.auth.user.userType &&
        props.auth.user.userType,
    });
  };

  const blockRequest = () => {
    let obj = {
      conversationId: activeConversation._id,
      request: "BLOCKED",
      requestBy: props.auth && props.auth.user && props.auth.user._id && props.auth.user._id,
      requestByUserType: props.auth && props.auth.user && props.auth.user.userType && props.auth.user.userType,
      userId:
        props.auth &&
        props.auth.user &&
        props.auth.user._id &&
        props.auth.user._id,
      userType:
        props.auth &&
        props.auth.user &&
        props.auth.user.userType &&
        props.auth.user.userType,
    }
    console.log(obj)
    socket.emit("blockRequest", obj);
  };

  const leaveConvo = (conversationId) => {
    socket.emit("leaveConversation", { conversationId: conversationId });
  };

  return (
    <div className="chat-screen">
      <div className="sideSection">
        <div className="searchConvos">
          <div className="inputCont">
            <i className="fa fa-search" />
            <input placeholder="Search Convos" />
          </div>
        </div>
        <div className="conversations">
          <ul>
            {chatList &&
              chatList.map((item, index) => (
                <li
                  onClick={() => {
                    leaveConvo(activeConversation._id);
                    setActiveConversation(item);
                    setConversationId(item._id);
                    setMessages([]);
                  }}
                >
                  {console.log(props.auth.user)}
                  <div className="convo-item">
                    <div className="avatar"></div>
                    <div className="convo-info">
                      <div className="convo-info-1">
                        <p className="convo-name">
                          {/* {item.messages[0] &&
                            item.messages[0].sender && item.messages[0].sender._id != props.auth.user._id &&
                            item.messages[0].sender.firstName &&
                            item.messages[0].sender.firstName}
                                  {item.messages[0] &&
                            item.messages[0].receiver && item.messages[0].receiver._id != props.auth.user._id &&
                            item.messages[0].receiver.firstName &&
                            item.messages[0].receiver.firstName} */}
                          {item.users &&
                            item.users
                              .filter(
                                (it) => it.user._id != props.auth.user._id
                              )
                              .map((otherUser) => (
                                <p>
                                  {otherUser.user &&
                                    otherUser.user.firstName &&
                                    otherUser.user.firstName}{" "}
                                  {otherUser.user &&
                                    otherUser.user.lastName &&
                                    otherUser.user.lastName}
                                </p>
                              ))}
                        </p>
                        <span>
                          {moment(item.messages.createdDate).format("hh:mm A")}
                        </span>
                      </div>
                      <p>
                        {item.messages[0] &&
                          item.messages[0].message &&
                          item.messages[0].message}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="chatSection">
        <div className="chatHeader">
          <div className="chatHeader-first">
            <div className="avatar"></div>
            <div className="convo-info">
              <div className="convo-info-1">
                <p className="convo-name">
                  {activeChatUser && activeChatUser.businessName
                    ? activeChatUser.businessName
                    : activeChatUser &&
                      activeChatUser.firstName &&
                      activeChatUser.firstName &&
                      activeChatUser.lastName
                    ? activeChatUser.firstName + " " + activeChatUser.lastName
                    : "No active Conversation"}
                    {activeConversation && 
                    <p className="blockReq" onClick={() => blockRequest()}>Block</p>
                    }
                  {/* {activeChatUser &&
                    activeChatUser.firstName &&
                    activeChatUser.firstName}{" "}
                  {activeChatUser &&
                    activeChatUser.lastName &&
                    activeChatUser.lastName} */}
                </p>
              </div>
              {/* <p>Nicholas C, Divan Raj, Neha D. 5+ Members</p> */}
            </div>
          </div>
        </div>
        <div className="chatPanel">
          {messages &&
            messages.map((item, index) => (
              <div
                key={index}
                className={
                  item.sender._id == props.auth.user._id ? "right" : "left"
                }
              >
                <p data-time={moment(item.createdDate).format("hh:mm A")}>
                  {item.message && item.message}
                </p>
              </div>
            ))}
          <div ref={messagesEndRef} />

          {activeConversation && Object.keys(activeConversation).length != 0 &&
            (activeConversation.request == "PENDING" ) &&
            activeConversation.requestBy != props.auth.user._id && (
              <div className="requestPanel">
                <p>
                  Message Request is{" "}
                  <strong style={{ textTransform: "capitalize" }}>
                    {activeConversation.request}
                  </strong>
                </p>
                <div className="requestBtns">
                  <button className="acceptReq" onClick={() => acceptRequest()}>
                    Accept
                  </button>
                  <button className="rejectReq">Reject</button>
                  <button className="blockReq" onClick={() => blockRequest()}>Block</button>
                </div>
              </div>
            )}
             {activeConversation && Object.keys(activeConversation).length != 0 &&
            ( activeConversation.request == "BLOCKED" || activeConversation.request == "REJECTED") &&
            activeConversation.requestBy == props.auth.user._id && (
              <div className="requestPanel">
                <p>
                  Message Request is{" "}
                  <strong style={{ textTransform: "capitalize" }}>
                    {activeConversation.request}
                  </strong>
                </p>
                <div className="requestBtns">
                  <button className="acceptReq" onClick={() => acceptRequest()}>
                    Accept
                  </button>
                  <button className="rejectReq">Reject</button>
                  <button className="blockReq" onClick={() => blockRequest()}>Block</button>
                </div>
              </div>
            )}
          {activeConversation &&
            (activeConversation.request == "PENDING" ) &&
            activeConversation.requestBy == props.auth.user._id && (
              <div
                className="requestPanel"
                style={{ justifyContent: "flex-start" }}
              >
                <p style={{ textAlign: "center" }}>
                  Waiting for approval from receiver.
                </p>
              </div>
            )}
            {activeConversation && Object.keys(activeConversation).length != 0 && 
            (activeConversation.request == "BLOCKED" || activeConversation.request == "REJECTED") &&
            activeConversation.requestBy != props.auth.user._id && (
              <div
                className="requestPanel"
                style={{ justifyContent: "flex-start" }}
              >
                <p style={{ textAlign: "center" }}>
                 You have been <strong>{activeConversation.request && activeConversation.request}</strong>.
                </p>
              </div>
            )}
        </div>
        <div className="messageSend">
          <div className="inputCont">
            <input
              placeholder="Type something"
              value={message}
              onKeyPress={(e) => {
                if (e.which == "13" && e.target.value) {
                  sendMessage();
                }
              }}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <i className="fa fa-paper-plane" onClick={() => sendMessage()} />
          </div>
        </div>
      </div>

      {/* {activeConversation && activeConversation.request == "PENDING" && 
      <Modal
      className="menusModal passwordModal"
      title="Accept Request"
      visible={requestModal}
      onOk={() => setRequestModal(false)}
      onCancel={() => setRequestModal(false)}
      footer={<></>}
      >
        <h3>Request</h3>
        <button onClick={()=>acceptRequest()}>Accept</button>
        <button>Reject</button>
        <button>Block</button>
        <button>Ignore for now</button>
      </Modal>
      } */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  messaging: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  messagingActions: bindActionCreators(messagingActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserMessage);