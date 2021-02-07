import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
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
const UserProfile = lazy(() => import("./components/UserProfile"));
const BusinessProfile = lazy(() =>
  import("./components/Business/BusinessProfile")
);
const BusinessSingleBlog = lazy(() =>
  import("./components/BusinessSingleBlog")
);
const AboutUs = lazy(() => import("./components/AboutUs"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const HelpCenter = lazy(() => import("./components/HelpCenter"));
const Terms = lazy(() => import("./components/Terms"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const Business = lazy(() => import("./components/Business/Business"));
const Faqs = lazy(() => import("./components/Faqs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Careers = lazy(() => import("./components/Careers"));

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

            <CustomerPrivateRoute exact path="/user/" component={UserProfile} />

            <CustomerPrivateRoute
              {...props}
              exact
              path="/user/profile"
              component={UserProfile}
            />
            <CustomerPrivateRoute
              exact
              path="/user/orders"
              component={UserProfile}
            />
            <CustomerPrivateRoute
              exact
              path="/user/favourites"
              component={UserProfile}
            />
            <CustomerPrivateRoute
              exact
              path="/user/reviews"
              component={UserProfile}
            />
            <CustomerPrivateRoute
              exact
              path="/user/subscriptions"
              component={UserProfile}
            />
            <CustomerPrivateRoute
              exact
              path="/user/notifications"
              component={UserProfile}
            />
            <CustomerPrivateRoute
              exact
              path="/user/chats"
              component={UserProfile}
            />

            <BusinessPrivateRoute
              exact
              path="/business/profile"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/orders"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/favourites"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/reviews"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/subscriptions"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/notifications"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/blogs"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/menu"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/portfolio"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/chats"
              component={BusinessProfile}
            />
            <BusinessPrivateRoute
              exact
              path="/business/blogs/:id"
              component={BusinessSingleBlog}
            />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/help-center" component={HelpCenter} />

            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/terms-and-conditions" component={Terms} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/how-it-works" component={HowItWorks} />
            <Route exact path="/business" component={Business} />
            
            <Footer {...props} />
          </div>
        </>
        
      </Switch>
    </>
  );
}

export default Routes;
