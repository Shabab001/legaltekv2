import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import CreateBlog from "./components/NewProfile/BusinessProfile/blog-contents/createBlog";



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
              path="/business/blogs"
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
            />
               <Route
              exact
              path="/business/:postId"
              component={BusinessProfile}
            />

           {/* 
           
           Lawyer Routes
           */}

            <Route
              exact
              path="/lawyer/documents"
              component={LawyerProfile}
            />
              <Route
              exact
              path="/lawyer/profile"
              component={LawyerProfile}
            />
             <Route
              exact
              path="/lawyer/management"
              component={LawyerProfile}
            />
             <Route
              exact
              path="/lawyer/reviews"
              component={LawyerProfile}
            />
             <Route
              exact
              path="/lawyer/notifications"
              component={LawyerProfile}
            />
             <Route
              exact
              path="/lawyer/messaging"
              component={LawyerProfile}
            />
              <Route
              exact
              path="/lawyer/appointments"
              component={LawyerProfile}
            />
             <Route
              exact
              path="/lawyer/favourites"
              component={LawyerProfile}
            />





            <Route exact path="/user/profile" component={UserProfile}/>
            <Route exact path="/business/profile" component={BusinessProfile}/>
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/help-center" component={HelpCenter} />
            <Route exact path="/view-profile/:id" component={ViewProfile} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/blogs/:postId" component={SinglePage} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/terms-and-conditions" component={Terms} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/how-it-works" component={HowItWorks} />
            <Route exact path="/business" component={Business} />
       

            {!props.location.pathname.includes("/business/") && !props.location.pathname.includes("/customer/") && !props.location.pathname.includes("/lawyer/")? 
        <Footer {...props} /> : ""
      }
          </div>
        </>
      </Switch>
    </>
  );
}

export default Routes;
