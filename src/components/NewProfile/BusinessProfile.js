import React, { useState, useEffect, lazy } from "react";
import "../../assets/css/newProfile.css";
import { Link, Redirect,Switch,Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import { message } from "antd";
import LawyersList from "./BusinessProfile/LawyersList";
import AddLawyers from "./BusinessProfile/addLawyers";
import Management from "./BusinessProfile/management";
import CreateBlog from "./BusinessProfile/blog-contents/createBlog";
import SingleBlog from "./BusinessProfile/blog-contents/singleBlog";
// import {message} from 'antd'


const Profile = lazy( ()=>import("./BusinessProfile/Profile")) ;
const Orders = lazy( ()=>import("./BusinessProfile/Orders")) ;
const Favourites = lazy( ()=>import("./BusinessProfile/Favourites")) ;
const Reviews = lazy( ()=>import("./BusinessProfile/Reviews")) ;
const Notifications = lazy( ()=>import("./BusinessProfile/Notifications")) ;
const Portfolio = lazy( ()=>import("./BusinessProfile/Portfolio")) ;
const Blogs = lazy( ()=>import("./BusinessProfile/Blogs")) ;
const Menu = lazy( ()=>import("./BusinessProfile/Menu")) ;





function BusinessProfile (props) {
  const [activeMenu, setActiveMenu] = useState(1);
  const [sidebarCollapse, setSidebarCollapse] = useState(true)
  let hold=null
  console.log(activeMenu)
  useEffect(()=>{
    console.log(props.history)
    let profileDate = {
      userId: props.auth.user._id,
      userType: props.auth.user.userType,
    };
     props.actions.getLawfirmUserProfile(props.auth.user.lawfirm_user.id,props.history)
    props.actions.getProfile(profileDate, props.history);
    props.actions.getPackages(props.history)
    console.log(props.auth.user.lawfirm_user.id)
  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
    
   

   
    if (props.location.pathname === "/business/profile" || props.location.pathname === "/business/") {
      console.log("hi");
      setActiveMenu(1);
    }
    if (props.location.pathname === "/business/documents") {
      console.log("hi");
      setActiveMenu(2);
    }
    if (props.location.pathname === "/business/lawyers") {
      console.log("hi");
      setActiveMenu(3);
    }

    if (props.location.pathname === "/business/management") {
      console.log("hi");
      setActiveMenu(4);
    }

    if (props.location.pathname === "/business/reviews") {
      console.log("hi");
      setActiveMenu(5);
    }
    if (props.location.pathname === "/business/notifications") {
      console.log("hi");
      setActiveMenu(6);
    }

   
  
    if (props.location.pathname === "/business/chats") {
      console.log("hi");
      setActiveMenu(7);
    }

 
    if (props.location.pathname == "/business/blogs" ) {
      setActiveMenu(8);
    }
  
    if (props.location.pathname == "/business/portfolio") {
      setActiveMenu(10);
    }
    if (props.location.pathname == "/business/payment-history") {
      setActiveMenu(11);
    }
  }, [props.location.pathname]);


  const logout = (e) => {
    e.preventDefault();
    props.actions.logout(props.history);
    message.success(<p> Logged out Successfully!!" &nbsp; &#9749;</p>);
  };


    return (
      <div className={`newProfile ${sidebarCollapse? '' : 'sidebar-collapse' }`}>
        <div className="sidebar">
          <div className="sidebar-head">
          <h3>{props.auth && props.auth.user && props.auth.user.business && props.auth.user.business.name? props.auth.user.business.name : ""} {" "}  {props.auth && props.auth.user && props.auth.user.business && props.auth.user.business && !props.auth.user.business.name &&  "Business Profile"}</h3>
        <button onClick={()=>setSidebarCollapse(!sidebarCollapse)}><i className={`fa  ${sidebarCollapse? "fa-chevron-left": "fa-chevron-right"} `} /></button>
          </div>
     
         
          <ul>
            <Link to="/business/profile" data-tooltip="My Account">
              <li className={activeMenu === 1 ? "active" : ""}>
                <span></span> <i className="fa fa-user-o" />
                <span className="link-title">Account</span> 
              </li>
            </Link>
         
          <Link to="/business/documents" data-tooltip="Order History">
            <li  className={activeMenu === 2 ? "active" : ""}>
              <span></span> <i className="fa fa-gift stroke-transparent" /><span className="link-title">Documents</span> 
            </li>
          </Link>
          <Link to="/business/lawyers" data-tooltip="Payment History">
          <li  className={activeMenu === 3 ? "active" : ""}>
            <span></span> <i className="fa fa-star-o" /><span className="link-title">Lawyers</span> 
          </li>
          </Link>
          <Link to="/business/management" data-tooltip="Favourites">
            <li  className={activeMenu === 4 ? "active" : ""}>
              <span></span> <i className="fa fa-heart-o" /><span className="link-title">Management</span> 
            </li>
          </Link>
        
      
          <Link to="/business/reviews" data-tooltip="Reviews">
          <li  className={activeMenu === 5 ? "active" : ""}>
            <span></span> <i className="fa fa-star-o" /><span className="link-title">Reviews</span> 
          </li>
          </Link>
          <Link to='/business/notifications' data-tooltip="Notifications">
          <li  className={activeMenu === 6 ? "active" : ""}>
            <span></span>
            <i className="fa fa-bell-o" /><span className="link-title">Notifications</span> 
          </li></Link>
          <Link to='/business/chats' data-tooltip="Messaging">
          <li className={activeMenu === 7 ? "active" : ""} >
            <span></span> <i className="fa fa-cog stroke-transparent" /> <span className="link-title">Messaging</span>
          </li></Link>
      
          <Link to='/business/blogs' data-tooltip="Messaging">
          <li className={activeMenu === 8 ? "active" : ""} >
            <span></span> <i className="fa fa-gift stroke-transparent" /> <span className="link-title">Blogs</span>
          </li></Link>

        
          <Link to="#" onClick={(e)=>logout(e)} data-tooltip="Logout">
          <li>
            <span></span> <i className="fa fa-sign-out stroke-transparent" /><span  className="link-title">Logout</span> 
          </li>
          </Link>
         
          </ul>
        </div>

        <div className="main">

          
        <Switch>

            <Route exact path="/business/profile" component={Profile} />
            <Route exact path="/business/documents" component={Orders} />
            <Route exact path="/business/lawyers" component={AddLawyers} />
            
            <Route exact path="/business/favourites" component={Favourites} />
            <Route exact path="/business/notifications" component={Notifications} />
            <Route exact path="/business/reviews" component={Reviews} />
           
            <Route exact path="/business/management" component={Management} />
            <Route exact path="/business/blogs" component={Blogs} />
            <Route exact path="/business/portfolio" component={Portfolio} />
            <Route exact path="/business/:postId" component={SingleBlog} />
            
       
          </Switch>
          
           {/* {activeMenu == 1 && <Profile {...props} />}
          {activeMenu == 2 && <Orders {...props}/>}
          {activeMenu == 3 && <AddLawyers {...props}/>}
          {activeMenu == 4 && <Management {...props}/>}
          {activeMenu == 5 && <Reviews {...props}/>}
         
          {activeMenu == 6 &&<Notifications {...props}/>}
          {activeMenu == 8 && <Blogs {...props}/>}
          {activeMenu == 10 && <Portfolio {...props}/>}  */}
    
         
        </div>
      </div>
    );
}

// export default UserProfile;
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(BusinessProfile);
