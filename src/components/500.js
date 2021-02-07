import React, { Component } from "react";
import { Link } from "react-router-dom";
import img500 from "../assets/img/500.png";

export default class InternalServer extends Component {
  render() {
    return (
      <>
        <div className="auth option2 errorPage" style={{ position: "relative" }}>
          <div
            className="redSideDiv"
            style={{
              display: "flex",
              background: "#e50077",
              height: "100vh",
              width: "25%",
              position: "relative",
              left: 0,
            }}
          ></div>
          <div className="auth_left" style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
		  <div className="hiddenPageDiv" style={{display:'none',justifyContent:'center',alignItems:'center',flexDirection:'column',marginBottom:20}}>
			<img src={img500} style={{height: 200, width: 200}} />
			<h4 style={{textAlign:'center',fontSize:20, color: '#5a5863',marginTop: 5 }}>Webpage Currently Unavailable</h4>
          <p className="text-muted" style={{textAlign:'center',fontStyle:'italic',fontSize:18 }}>We're always in the mood for food, now is a good time!</p>
			</div>
            <div className="card">
              <div className="card-body text-center">
                <div className="display-3 text-muted mb-5">
                  <i className="si si-exclamation"></i> 500
                </div>
                <h1 className="h3 mb-3">
                  Oops.. You just found an error page..
                </h1>
                <p className="h6 text-muted font-weight-normal mb-3">
                  We are sorry but your request contains bad syntax and cannot
                  be fulfilled&hellip;
                </p>
                <Link className="btn btn-primary" to="/" style={{backgroundColor:'#e50077',border:'none'}}>
                  <i className="fe fe-arrow-left mr-2"></i>Go back
                </Link>
              </div>
            </div>
          </div>

          <div
		  className="imageDiv"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              margin: "auto",
              height: "fit-content",
              width: "fit-content",
              justifyContent: "center",
            }}
          >
            <img src={img500} style={{ height: 400, width: 400 }} />
            <h4 style={{ textAlign: "center",fontSize:20, color: '#5a5863',marginTop: 5 }}>
              Cross Browser Compatibility
            </h4>
            <p className="text-muted" style={{ textAlign: "center",fontStyle:'italic',fontSize:18 }}>
              The only thing we love more than food is you!
            </p>
          </div>
        </div>
      </>
    );
  }
}
