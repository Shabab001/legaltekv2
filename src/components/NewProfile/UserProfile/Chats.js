import React from "react";
import "../../../assets/css/chat.css";

function Chats(props) {
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
            <li>
              <div className="convo-item">
                <div className="avatar"></div>
                <div className="convo-info">
                  <div className="convo-info-1">
                    <p className="convo-name">Waheed Ahmed</p>
                    <span>09:30pm</span>
                  </div>
                  <p>
                    Three ways to get travel, discover and learn Three ways to
                    get travel, discover and learn
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="convo-item">
                <div className="avatar"></div>
                <div className="convo-info">
                  <div className="convo-info-1">
                    <p className="convo-name">Waheed Ahmed</p>
                    <span>09:30pm</span>
                  </div>
                  <p>
                    Three ways to get travel, discover and learn Three ways to
                    get travel, discover and learn
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="convo-item">
                <div className="avatar"></div>
                <div className="convo-info">
                  <div className="convo-info-1">
                    <p className="convo-name">Waheed Ahmed</p>
                    <span>09:30pm</span>
                  </div>
                  <p>
                    Three ways to get travel, discover and learn Three ways to
                    get travel, discover and learn
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="convo-item">
                <div className="avatar"></div>
                <div className="convo-info">
                  <div className="convo-info-1">
                    <p className="convo-name">Waheed Ahmed</p>
                    <span>09:30pm</span>
                  </div>
                  <p>
                    Three ways to get travel, discover and learn Three ways to
                    get travel, discover and learn
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="convo-item">
                <div className="avatar"></div>
                <div className="convo-info">
                  <div className="convo-info-1">
                    <p className="convo-name">Waheed Ahmed</p>
                    <span>09:30pm</span>
                  </div>
                  <p>
                    Three ways to get travel, discover and learn Three ways to
                    get travel, discover and learn
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="chatSection">
        <div className="chatHeader">
          <div className="chatHeader-first">
            <div className="avatar"></div>
            <div className="convo-info">
              <div className="convo-info-1">
                <p className="convo-name">Greydesk Design Team</p>
              </div>
              <p>Nicholas C, Divan Raj, Neha D. 5+ Members</p>
            </div>
          </div>

          <div className="chatHeader-second">
            <div className="companyRole">
              <p>Company</p>
              <span>Invision</span>
            </div>
            <div className="companyRole">
              <p>Role</p>
              <span>Designer</span>
            </div>
          </div>
        </div>
        <div className="chatPanel">
            <p className='left' data-time="09:23pm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className='right' data-time="09:25pm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            <p className='left' data-time="09:26pm">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            <p className='right' data-time="09:28pm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

        </div>
        <div className="messageSend">
            <div className='inputCont'>
                <input placeholder="Type something" />
                <i className="fa fa-paper-plane" />

            </div>

        </div>
      </div>
    </div>
  );
}

export default Chats;
