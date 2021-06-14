import React, { useState, useEffect, lazy ,memo} from "react";
import "../../assets/css/newProfile.css";
import { Link, Redirect,Switch,Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import * as blogActions from "../../actions/blogActions";
import { message } from "antd";
import LawyersList from "./BusinessProfile/LawyersList";
import AddLawyers from "./BusinessProfile/addLawyers";
import Management from "./BusinessProfile/management";
import CreateBlog from "./BusinessProfile/blog-contents/createBlog";
import SingleBlog from "./BusinessProfile/blog-contents/singleBlog";
import PopularLawyers from "../HomePage/PopularLawyers";
import EditBlog from "./BusinessProfile/blog-contents/editBlog";
import  Location  from "./BusinessProfile/location";


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
  const [approvedBranches,setApprovedBranches]=useState(false)

  let hold=null
  console.log(activeMenu)
  useEffect(()=>{
    if(props.auth && props.auth.user && props.auth.user.lawfirm_user){

      console.log(props.auth.user.lawfirm_user)
      let profileDate = {
        userId: props.auth.user._id,
        userType: props.auth.user.userType,
      };
      props.actions.getLawfirmUserProfile(props.auth.user.lawfirm_user.id?props.auth.user.lawfirm_user.id:props.auth.user.lawfirm_user ,props.history)
      props.actions.getProfile(profileDate, props.history);
      props.actions.getPackages(props.history)
      console.log(props.auth.user.lawfirm_user.id)
    }
  },[])

  useEffect(()=>{
    const getMyBlogs=async()=>{
      
        console.log(props.auth)
          let myBlogs= await props.blogActions.getUserPosts(props.auth.user.lawfirm_user.id?props.auth.user.lawfirm_user.id:props.auth.user.lawfirm_user,props.history)
          if(myBlogs){
             console.log(myBlogs);
          }    
       
    }
    if(props.auth.user&& props.history &&props.blogs.posts){
       console.log(props.auth.user)
    getMyBlogs()
    }
 },[props.auth,props.blogs.deletedPost])
 useEffect(()=>{
       if(props.blogs){
          console.log(props.blogs)
       }
 },[props.blogs])


   console.log(props.lawfirm_user)


  useEffect(() => {
    window.scrollTo(0, 0);
    
   


   
    if (props.location.pathname === "/lawfirm/profile" || props.location.pathname === "/lawfirm/") {
      console.log("hi");
      setActiveMenu(1);
    }
    if (props.location.pathname === "/lawfirm/documents") {
      console.log("hi");
      setActiveMenu(2);
    }
    if (props.location.pathname === "/lawfirm/lawyers") {
      console.log("hi");
      setActiveMenu(3);
    }

    if (props.location.pathname === "/lawfirm/management") {
      console.log("hi");
      setActiveMenu(4);
    }

    if (props.location.pathname === "/lawfirm/reviews") {
      console.log("hi");
      setActiveMenu(5);
    }
    if (props.location.pathname === "/lawfirm/notifications") {
      console.log("hi");
      setActiveMenu(6);
    }

   
  
    if (props.location.pathname === "/lawfirm/chats") {
      console.log("hi");
      setActiveMenu(7);
    }

 
    if (props.location.pathname == "/lawfirm/blogs" ||  props.location.pathname.includes("/lawfirm/blogs/")) {
      setActiveMenu(8);
    }
  
    if (props.location.pathname == "/lawfirm/branches") {
      setActiveMenu(9);
    }
    if (props.location.pathname == "/lawfirm/payment-history") {
      setActiveMenu(11);
    }
  }, [props.location.pathname]);


  const logout = (e) => {
    e.preventDefault();
    props.actions.logout(props.history);
    message.success(<p> Logged out Successfully!!" &nbsp; &#9749;</p>);
  };

  useEffect(()=>{
    console.log("running")
    let count=false;
    if(props.lawfirm_user.branches && props.lawfirm_user.branches.length !==0){
      console.log("APPRovdsssssssssssssssssss")
      props.lawfirm_user.branches.forEach(item => {
     
        if(item.locationVerified==="APPROVED"){
         count=true;
        }
      
   
 });
               if(count){
                 setApprovedBranches(true)
               }
               else{
                 setApprovedBranches(false)
               }
    }

  },[props.lawfirm_user.branches,props.lawfirm_user])

    return (
      <div className={`newProfile ${sidebarCollapse? '' : 'sidebar-collapse' }`}>
        <div className="sidebar">
          <div className="sidebar-head">
          <h3>{props.auth && props.auth.user && props.auth.user.business && props.auth.user.business.name? props.auth.user.business.name : ""} {" "}  {props.auth && props.auth.user && props.auth.user.business && props.auth.user.business && !props.auth.user.business.name &&  "Business Profile"}</h3>
        <button onClick={()=>setSidebarCollapse(!sidebarCollapse)}><i className={`fa  ${sidebarCollapse? "fa-chevron-left": "fa-chevron-right"} `} /></button>
          </div>
          {props.lawfirm_user && props.lawfirm_user.branches && props.lawfirm_user.branches.length !==0 && approvedBranches ?
         
          <ul>
            <Link to="/lawfirm/profile" data-tooltip="My Account">
              <li className={activeMenu === 1 ? "active" : ""}>
                <span></span> <i className="fa fa-user-o" />
                <span className="link-title">Account</span> 
              </li>
            </Link>
            <Link to='/lawfirm/branches' data-tooltip="branches">
          <li className={activeMenu === 9 ? "active" : ""} >
            <span></span> <i className="fa fa-star-o" /> <span className="link-title">Location</span>
          </li></Link>

         
          <Link to="/lawfirm/documents" data-tooltip="Order History">
            <li  className={activeMenu === 2 ? "active" : ""}>
              <span></span> <i className="fa fa-gift stroke-transparent" /><span className="link-title">Documents</span> 
            </li>
          </Link>
          <Link to="/lawfirm/lawyers" data-tooltip="Payment History">
          <li  className={activeMenu === 3 ? "active" : ""}>
            <span></span> <i className="fa fa-star-o" /><span className="link-title">Lawyers</span> 
          </li>
          </Link>
          <Link to="/lawfirm/management" data-tooltip="Favourites">
            <li  className={activeMenu === 4 ? "active" : ""}>
              <span></span> <i className="fa fa-heart-o" /><span className="link-title">Management</span> 
            </li>
          </Link>
        
      
          <Link to="/lawfirm/reviews" data-tooltip="Reviews">
          <li  className={activeMenu === 5 ? "active" : ""}>
            <span></span> <i className="fa fa-star-o" /><span className="link-title">Reviews</span> 
          </li>
          </Link>
          <Link to='/lawfirm/notifications' data-tooltip="Notifications">
          <li  className={activeMenu === 6 ? "active" : ""}>
            <span></span>
            <i className="fa fa-bell-o" /><span className="link-title">Notifications</span> 
          </li></Link>
          <Link to='/lawfirm/chats' data-tooltip="Messaging">
          <li className={activeMenu === 7 ? "active" : ""} >
            <span></span> <i className="fa fa-cog stroke-transparent" /> <span className="link-title">Messaging</span>
          </li></Link>
      
          <Link to='/lawfirm/blogs' data-tooltip="Messaging">
          <li className={activeMenu === 8 ? "active" : ""} >
            <span></span> <i className="fa fa-gift stroke-transparent" /> <span className="link-title">Blogs</span>
          </li></Link>

        
          <Link to="#" onClick={(e)=>logout(e)} data-tooltip="Logout">
          <li>
            <span></span> <i className="fa fa-sign-out stroke-transparent" /><span  className="link-title">Logout</span> 
          </li>
          </Link>
         
          </ul>:
          <ul>
              <Link to="/lawfirm/profile" data-tooltip="My Account">
              <li className={activeMenu === 1 ? "active" : ""}>
                <span></span> <i className="fa fa-user-o" />
                <span className="link-title">Account</span> 
              </li>
            </Link>
            <Link to='/lawfirm/branches' data-tooltip="branches">
          <li className={activeMenu === 9 ? "active" : ""} >
            <span></span> <i className="fa fa-star-o" /> <span className="link-title">Location</span>
          </li></Link>


               
          <Link to="/lawfirm/documents" data-tooltip="Order History">
            <li  className={activeMenu === 2 ? "active" : ""}>
              <span></span> <i className="fa fa-gift stroke-transparent" /><span className="link-title">Documents</span> 
            </li>
          </Link>
           <Link>
          <li  className={activeMenu === 3 ? "active" : ""} style={{color:"grey"}}>
            <span></span> <i className="fa fa-star-o" /><span className="link-title">Lawyers</span> 
          </li>
          </Link>
           <Link>    
            <li  className={activeMenu === 4 ? "active" : ""} style={{color:"grey"}}>
              <span></span> <i className="fa fa-heart-o" /><span className="link-title">Management</span> 
            </li>
               </Link>
        
         <Link>    
          <li  className={activeMenu === 5 ? "active" : ""} style={{color:"grey"}}>
            <span></span> <i className="fa fa-star-o" /><span className="link-title">Reviews</span> 
          </li>
             </Link>
          <Link>    
          <li  className={activeMenu === 6 ? "active" : ""} style={{color:"grey"}}>
            <span></span>
            <i className="fa fa-bell-o" /><span className="link-title">Notifications</span> 
          </li>   
            </Link>
           <Link>    
          <li className={activeMenu === 7 ? "active" : ""} style={{color:"grey"}} >
            <span></span> <i className="fa fa-cog" /> <span className="link-title">Messaging</span>
          </li>
          </Link>
                <Link>          
          <li className={activeMenu === 8 ? "active" : ""} style={{color:"grey"}} >
            <span></span> <i className="fa fa-gift"   /> <span className="link-title">Blogs</span>
          </li>
       </Link>
        
          <Link to="#" onClick={(e)=>logout(e)} data-tooltip="Logout">
          <li>
            <span></span> <i className="fa fa-sign-out stroke-transparent" /><span  className="link-title">Logout</span> 
          </li>
          </Link>
         


          </ul>

                  }
        </div>

        <div className="main">
        
          
        
          
        <Switch>

            <Route exact path="/lawfirm/profile" component={Profile} />
            <Route exact path="/lawfirm/documents" component={Orders} />
            <Route exact path="/lawfirm/lawyers" component={AddLawyers} />
            <Route exact path="/lawfirm/branches" component={Location} />
            <Route exact path="/lawfirm/favourites" component={Favourites} />
            <Route exact path="/lawfirm/notifications" component={Notifications} />
            <Route exact path="/lawfirm/reviews" component={Reviews} />
           
            <Route exact path="/lawfirm/management" component={Management} />
            <Route exact path="/lawfirm/blogs" component={Blogs} />
           
            <Route exact path="/lawfirm/portfolio" component={Portfolio} />
            
            <Route
              exact
              path="/lawfirm/blogs/createblog"
              component={CreateBlog}
            />
              <Route  path="/lawfirm/blogs/editblog/:id" component={EditBlog} />
            <Route  path="/lawfirm/blogs/:id" component={SingleBlog} />
            
       
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
  lawfirm_user:state.auth.lawfirmUserProfile,
  blogs: state.blog,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
  blogActions:bindActionCreators(blogActions,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(BusinessProfile));
