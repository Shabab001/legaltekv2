import React, { lazy, Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spin } from "antd";
import Routes from "./Routes";
import 'aos/dist/aos.css'; 
const Login = lazy(() => import("./components/Login"));
const LoginWithPhone = lazy(() => import("./components/LoginWithPhone"));
const SignUp = lazy(() => import("./components/SignUp"));
const ForgotPassword = lazy(() => import("./components/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/ResetPassword"));
const ServiceUnavailable = lazy(() => import("./components/503"));
const NotFound = lazy(() => import("./components/404"));
const ServerError = lazy(() => import("./components/500"));
var countries = require("country-data").countries;

function App() {
  return (
    <Router>
        <div className={`App`}>
          <Suspense
            fallback={
              <div
                style={{
                  width: "100%",
                  minHeight: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                }}
              >
                <Spin
                  size="large"
                  style={{ color: "#fff" }}
                  tip="Loading..."
                ></Spin>
              </div>
            }
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/loginWithPhone" component={LoginWithPhone} />
              <Route exact path="/register" component={SignUp} />
              <Route exact path="/forgotPassword" component={ForgotPassword} />
              <Route
                exact
                path="/resetPassword/:resetToken"
                component={ResetPassword}
              />
              <Route exact path="/notFound" component={NotFound} />
              <Route
                exact
                path="/serviceUnavailable"
                component={ServiceUnavailable}
              />
              <Route exact path="/servererror" component={ServerError} />
              <Route path="/" component={Routes} />
              <Route exact path="*" component={NotFound} />
              
            </Switch>
          </Suspense>
        </div>
      </Router>
  )
}


export default App;
