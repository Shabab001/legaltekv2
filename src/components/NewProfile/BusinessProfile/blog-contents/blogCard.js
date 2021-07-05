import React,{useState,useEffect} from 'react'
import "./blogCard.css"
import {BiLike,BiDotsVerticalRounded} from "react-icons/bi"
import BlogOptions from './blogOptions';
import parse from 'html-react-parser';
import moment from "moment"
import ConfirmModal from "../../../modals/ConfirmModal"
import ThreeDotsIcon from "../../../../assets/img/svgs/ThreeDots";
import { Empty, message, Skeleton, Menu, Dropdown,Image } from "antd";
import * as blogActions from "../../../../actions/blogActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {deleteRequest} from "../../../../utils/upload"

const {REACT_APP_API}= process.env

const BlogCard = (props) => {
    const [option,setOption]=useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [itemToBeDeleted, setItemToBeDeleted] = useState(null);
    const [blogUser,setBlogUser]=useState(null)

let date=moment(props.blog.createdAt).format("MMMM, D, YYYY").split(',')

console.log(date)




useEffect(()=>{
  console.log(props.blog)
const callBlogUser=async()=>{

  let user= await props.blogActions.getBlogUserById(props.blog.author, props.blog.authorType)
  if(user){
  setBlogUser(user)
  }
}
callBlogUser()

},[])
useEffect(()=>{
 console.log("hi")
},[blogUser,props.blogs])



const menu = (props) =>  (
  <Menu>
    <Menu.Item onClick={()=>{
      setItemToBeDeleted({
        item: props.item,
        index: props.index,
      });
      setModalOpen(true);
    }}>
      <a>Delete post</a>
    </Menu.Item>
    <Menu.Item onClick={()=>props.history.push(`/lawfirm/blogs/editblog/${props.item._id}`)}>
      <a>Edit post</a>
    </Menu.Item>
  </Menu>
);
function modalClose() {
  setModalOpen(false);
}

async function deletePost(post, index) {
  let obj = {
    blogId: post._id,
  };
  let del =await deleteRequest(`${REACT_APP_API}/upload/files/${post.coverImage.id}`,"DELETE")
  if(del){
    console.log(del)
    
    let deletedPost = await props.blogActions.deletePost(
      { ...props, obj },
      props.history
      );
      if (deletedPost) {
        message.success("Post Successfully deleted");
      }
      setItemToBeDeleted(null);
      setModalOpen(false);
    }
}


    const handleOption=(e)=>{
        console.log(e.target)
        setOption(!option)
        console.log(option)
    }
    const closeOption =()=>{
        setOption(false)
    }
    return (
      <>
      {blogUser &&
        <div className="bcard-container" >
          <div className="bcard-time">
          {date.map((item,index)=>
           <p key={index}>{item}</p>
          )}
          </div>
          
          <div className="bcard-pic">
            <img src={props.blog.coverImage.url} alt="image"/>

          </div>
          
          <div className="bcard-middle">
              <div className="bcard-middle-first">
                      <div className="bcard-image">
                         <div className="bcard-round">
                             <img className="bcard-round-image" src={blogUser.profileImage.url} alt="propic" />
                         </div>
                         <div onClick={()=>props.history.push(`/lawfirm/blogs/${props.blog.id}`)} style={{cursor:"pointer"}}>

                            <p>{props.blog.title.substring(0,28)}</p>
                         </div>
                           
                      </div>
                      
                      {blogUser && props.profile && blogUser.id === props.profile.id?
                      <div className="blogAction">
                        <Dropdown 
                          trigger={["click"]}
                          overlay={()=>menu({
                            item: props.blog,
                            index: props.index,
                            ...props,
                          })}
                          placement="bottomLeft"
                          arrow
                          overlayStylestyle={{backgroundColor:"grey"}}
                          >
                          <button>
                            <ThreeDotsIcon/>
                          </button>
                        </Dropdown>
             </div>:null
                        }
                        

                        
              </div>
              <div className="bcard-lower">
             {props.blog.blogCategory.map((item,index)=>{
               if(index < 2){

                 return(
                   
                   <p key={index}>{item}</p>
                   )
                  }
             })}
             <div style={{display:"flex",gap:".3rem",alignItems:"center",color:"red"}}>
             <BiLike/>
              <p><span style={{color:"white"}}>{props.blog.likes?props.blog.likes.length:0} </span></p>
             </div>
          </div>
          <div className="bcard-desc">

           <p>
             { parse(props.blog.body.substring(0,156))}
             </p> 
          </div>
          </div>
 
          {modalOpen && (
          <ConfirmModal
            {...props}
            onClose={modalClose}
            acceptMethod={() =>
              deletePost(itemToBeDeleted.item, itemToBeDeleted.index)
            }
            headerText="Delete Blog post"
            bodyText="Are you sure you want to delete this post?"
          />
        )}
        </div>
}
</>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.lawfirmUserProfile,
  blogs: state.blogs,
});

const mapDispatchToProps = (dispatch) => ({
  blogActions: bindActionCreators(blogActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(BlogCard);

