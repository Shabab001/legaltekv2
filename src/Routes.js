import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import EmailConfirmation from "./components/emailConfirmation/emailConfirmation";
import EmailConfirmation2 from "./components/emailConfirmation/emailConfirmation2";
import VerifyEmail from "./components/emailConfirmation/verifyEmail";
import Guidelines from "./components/Guidelines";





const Header = lazy(() => import("./components/IndexShared/Header"));
const Footer = lazy(() => import("./components/IndexShared/Footer"));
const BottomNav = lazy(() => import("./components/IndexShared/BottomNav"));

const CustomerPrivateRoute = lazy(() =>
  import("./components/PrivateRoutes/CustomerPrivateRoute")
);
const BusinessPrivateRoute = lazy(() =>
  import("./components/PrivateRoutes/BusinessPrivateRoute")
);

const Index = lazy(() => import("./components/Index/index"));
// const UserProfile = lazy(() => import("./components/UserProfile"));
const BusinessProfile = lazy(() =>
  import("./components/NewProfile/BusinessProfile")
);
const BusinessSingleBlog = lazy(() =>
  import("./components/BusinessSingleBlog")
);
const AddLawyers = lazy(()=>import("./components/NewProfile/BusinessProfile/addLawyers") )
const AboutUs = lazy(() => import("./components/AboutUs"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const HelpCenter = lazy(() => import("./components/HelpCenter"));
const Terms = lazy(() => import("./components/Terms"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const Business = lazy(() => import("./components/Business/Business"));
const Faqs = lazy(() => import("./components/Faqs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Careers = lazy(() => import("./components/Careers"));
const Blogs = lazy(() => import("./components/Blogs"));
const SinglePage = lazy(() => import("./components/Blogs/SinglePage"));
const ViewProfile = lazy(() => import("./components/ViewProfile"))
const UserProfile = lazy(()=>import("./components/NewProfile/UserProfile"))
const LawyerProfile = lazy(()=>import("./components/NewProfile/LawyerProfile"))

function Routes(props) {
  console.log(props);
  return (
    <>
      <Switch>
        <>
          <div className="index">
         
       
            <BottomNav {...props} />
            <Header {...props} />
            <Route exact path="/" component={Index} />
           
            {/* <Route exact path="/newProfile" component={UserProfile} /> */}
            <CustomerPrivateRoute exact path="/user/" component={UserProfile} />

         
            <Route
              exact
              path="/user/appointments"
              component={UserProfile}
            />
            <Route
              exact
              path="/user/favourites"
              component={UserProfile}
            />
            <Route
              exact
              path="/user/reviews"
              component={UserProfile}
            />
            <CustomerPrivateRoute
              exact
              path="/user/subscriptions"
              component={UserProfile}
            />
            <Route
              exact
              path="/user/notifications"
              component={UserProfile}
            />
            <CustomerPrivateRoute
              exact
              path="/user/chats"
              component={UserProfile}
            />
            

{/*        
            <Route
              exact
              path="/business/documents"
              component={BusinessProfile}
            />
            <Route 
            exact
            path="/business/lawyers"
            component={BusinessProfile}
            
            />
            <Route
              exact
              path="/business/favourites"
              component={BusinessProfile}
            />
            <Route
              exact
              path="/business/reviews"
              component={BusinessProfile}
            />
            <Route
              exact
              path="/business/subscriptions"
              component={BusinessProfile}
            />
                <Route
              exact
              path="/business/management"
              component={BusinessProfile}
            />
            <Route
              exact
              path="/business/notifications"
              component={BusinessProfile}
            />
          
            <Route
              exact
              path="/business/menu"
              component={BusinessProfile}
            />
            <Route
              exact
              path="/business/appointments"
              component={BusinessProfile}
            />
            <Route
              exact
              path="/business/chats"
              component={BusinessProfile}
            />
            <Route
              exact
              path="/business/blogs/:id"
              component={BusinessSingleBlog}
            /> */}
      

           {/* 
           
           Lawyer Routes
           */}

            
             <Route
              
              path="/lawyer/"
              component={LawyerProfile}
            />
          
       


            <Route exact path="/user/profile" component={UserProfile}/>
            
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/help-center" component={HelpCenter} />
            <Route exact path="/view-profile/:id" component={ViewProfile} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/lawfirm/:postId" component={BusinessProfile} />
            <Route exact path="/auth/activation/:token" component={EmailConfirmation} />
          <Route exact path="/auth/activated/:token" component={EmailConfirmation2} />
            <Route exact path="/auth/verify-email/:token" component={VerifyEmail} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/terms-and-conditions" component={Terms} />
            <Route exact path="/Community-Guidelines" component={Guidelines} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/how-it-works" component={HowItWorks} />
            <Route exact path="/lawfirm/" component={BusinessProfile} />
            <Route exact path="/lawfirm/blogs/:id" component={BusinessProfile} />
            <Route exact path="/lawfirm/blogs/editblog/:id" component={BusinessProfile} />
          

            {!props.location.pathname.includes("/lawfirm/") && !props.location.pathname.includes("/customer/") && !props.location.pathname.includes("/lawyer/") && !props.location.pathname.includes("/user/")?
        <Footer {...props} /> : ""
      }
          </div>
        </>
      </Switch>
    </>
  );
}

export default Routes;
