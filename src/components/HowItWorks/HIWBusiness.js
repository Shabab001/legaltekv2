import React from "react";
import Particles from "react-particles-js";
import ScrollContainer from "react-indiana-drag-scroll";

function HIWBusiness() {

  const scrollTo = (e, id) => {
    let mainContent = document.querySelector(".index");
    console.log(id);
    let item = document.getElementById(`${id}`);
    if (item) {
      console.log(item.offsetTop)
      let scrollToDiv = item.offsetTop + 450;
      window.scrollTo(0,scrollToDiv)
     
    }
  };
  return (
    <div>
      <div className="hiw-second-section">
        <h2>Software development life cycle</h2>
        <h5>
          At Smart inc. we strive to keep developers innovating and our code
          bases healthy
        </h5>
        <ScrollContainer
          className="scroll-container"
          style={{ display: "flex",maxWidth:'100%',paddingBottom:30 }}
        >
        <div className="process-boxes" id="first-process">
          <div className="pbox">
            <img src={require("../../assets/img/computer.png")} />
            <span className="pbox-number">01</span>
            <h3>Product definition and specs development</h3>
            <div className="p-next">
                <i className="fa fa-arrow-right" />
                <i onClick={(e) => scrollTo(e, "sec-process")} className="fa fa-arrow-down" />
              </div>
          </div>
          <div className="pbox" id="sec-process">
            <img src={require("../../assets/img/design.png")} />
            <span className="pbox-number">02</span>
            <h3>UI/UX graphic development</h3>
            <div className="p-next">
                <i className="fa fa-arrow-right" />
                <i onClick={(e) => scrollTo(e, "third-process")} className="fa fa-arrow-down" />
              </div>
          </div>
          <div className="pbox" id="third-process">
            <img src={require("../../assets/img/landscape.png")} />
            <span className="pbox-number">03</span>
            <h3>Software development</h3>
            <div className="p-next">
                <i className="fa fa-arrow-right" />
                <i onClick={(e) => scrollTo(e, "fourth-process")} className="fa fa-arrow-down" />
              </div>
          </div>
          <div className="pbox" id="fourth-process">
            <img src={require("../../assets/img/behance.png")} />
            <span className="pbox-number">04</span>
            <h3>QA bug fixing</h3>
            <div className="p-next">
                <i className="fa fa-arrow-right" />
                <i onClick={(e) => scrollTo(e, "first-process")} className="fa fa-arrow-up" />
              </div>
          </div>
          <div className="guiding-lines"></div>
        </div>
        </ScrollContainer>
      </div>

      <div className="hiw-third-section-business">
        <Particles
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
          style={{
            width: "100%",
            maxHeight: 400,
            height: 400,
            backgroundColor: "#000",
            position: "absolute",
            zIndex: 1,
          }}
        />
      </div>

      <div className="hiw-fourth-section-business">
        <h4>GET STARTED</h4>
        <h2>Clean your data for better decisions</h2>
        <h5>
          Avo is the cure to Analytics debut, install the Avo inspector today to
          quickly get a deep understanding of your existing product analytics
          issues and how you can improve them, step by step.
        </h5>
        <div className="step-process">
          <div className="st-proc-lr">
            <div className="st-proc">
              <div className="left-proc">
                <h3>Inspect</h3>
                <p>
                  The Avo inspector logs event names, data types and volumes to
                  build a complete picture of your existing analytics
                </p>
                <div className="proc-icon">
                  <i className="fa fa-code" />
                  <div className="chevrons">
                    <i className="fe fe-chevron-down" />
                    <i className="fe fe-chevron-down" />
                    <i className="fe fe-chevron-down" />
                  </div>
                </div>
              </div>

              <div className="right-proc"></div>
            </div>
          </div>

          <div className="st-proc-lr">
            <div className="st-proc">
              <div className="left-proc"></div>

              <div className="right-proc">
                <div className="proc-icon">
                  {" "}
                  <i className="fa fa-search" />{" "}
                  <div className="chevrons">
                    <i className="fe fe-chevron-down" />
                    <i className="fe fe-chevron-down" />
                    <i className="fe fe-chevron-down" />
                  </div>
                </div>
                <h3>Analyze</h3>
                <p>
                  The Avo inspector logs event names, data types and volumes to
                  build a complete picture of your existing analytics
                </p>
              </div>
            </div>
          </div>

          <div className="st-proc-lr">
            <div className="st-proc">
              <div className="left-proc">
                <h3>Prioritize</h3>
                <p>
                  The Avo inspector logs event names, data types and volumes to
                  build a complete picture of your existing analytics
                </p>
                <div className="proc-icon">
                  <i className="fa fa-level-up " />{" "}
                  <div className="chevrons">
                    <i className="fe fe-chevron-down" />
                    <i className="fe fe-chevron-down" />
                    <i className="fe fe-chevron-down" />
                  </div>
                </div>
              </div>

              <div className="right-proc"></div>
            </div>
          </div>

          <div className="st-proc-lr">
            <div className="st-proc">
              <div className="left-proc"></div>

              <div className="right-proc">
                <div className="proc-icon">
                  <i className="fa fa-trash" />
                  <div className="chevrons">
                    <i className="fe fe-chevron-down" />
                    <i className="fe fe-chevron-down" />
                    <i className="fe fe-chevron-down" />
                  </div>
                </div>
                <h3>Clean</h3>
                <p>
                  The Avo inspector logs event names, data types and volumes to
                  build a complete picture of your existing analytics
                </p>
              </div>
            </div>
          </div>

          <div className="st-proc-lr">
            <div className="st-proc">
              <div className="left-proc"></div>

              <div className="right-proc">
                <div className="proc-icon">
                  <i className="fa fa-shield" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HIWBusiness;
