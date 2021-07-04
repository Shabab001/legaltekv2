import React ,{useEffect,useState}from 'react'
import "./singleBlog.css"
import Civil from "./images/civil.jpeg"
import Criminal from "./images/criminal.jpeg"
import moment from "moment";
import{useParams}from "react-router-dom"
import { FacebookButton } from "react-social";
import * as blogActions from "../../../../actions/blogActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import parse from 'html-react-parser';
import{message} from "antd"
import ConfirmModal from "../../../modals/ConfirmModal"
import {FacebookShareButton,TwitterShareButton,LinkedinShareButton} from "react-share"

import { Select } from 'antd';

const { Option } = Select;





const SingleBlog = (props) => {
  const [singleBlog,setSingleBlog]=useState(null)
  const[date,setDate]=useState(null)
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [commentToBeDeleted, setCommentToBeDeleted] = useState("");
  const [facebookShareCount, setFacebookShareCount] = useState();
  const [sort, setSort]=useState(null)
  const{id}=useParams()
  console.log(id)


  const likePost = async (blog) => {
    let likePost = await props.blogActions.likePost({
      blogId:blog.id,
      user:props.profile.id,
      ...props,
    });
    if (likePost) {
           setLiked(true)
      props.blogActions.getSinglePost({ id, ...props });
    }
  };



  const searchLike =()=>{
    for(let i=0; props.blogs.singlePost.likes.length;i++){
      if(props.blogs.singlePost.likes[i].user===props.profile.id){
        return props.blogs.singlePost.likes[i].id
       
      }
   }
  }
  const unlikePost = async (blog) => {
    if(props.blogs.singlePost.likes && props.blogs.singlePost.likes.length !== 0){
     
     let likeId=searchLike()
    console.log(likeId)
    let unlikePost = await props.blogActions.unlikePost({
    likeId
    });
    if (unlikePost) {
         setLiked(false)
      props.blogActions.getSinglePost({ id, ...props });
    }
  };
}

  const deleteComment = async (commentId) => {
  
    let deleteComment = await props.blogActions.deleteComment({
      commentId,
      ...props,
    });
    if (deleteComment) {
      setModalOpen(false);
      setCommentToBeDeleted("");
      let obj = {
        postId: singleBlog.id,
      };
      props.blogActions.getSinglePost({ id, ...props });
    }
  };

  const modalClose = () => {
    setModalOpen(false);
    setCommentToBeDeleted("");
  };

  const postComment = async () => {
    if (comment && singleBlog._id) {
      console.log(props.auth.user)
      let obj = {
        author: props.profile.id,
        blog: singleBlog.id,
        comment: comment,
        profilepic:props.profile.profileImage.url
      };
      console.log("sdffffffffffffffffffffposting")
      let postComment = await props.blogActions.postComment({ obj, ...props });
      if (postComment) {
        console.log(postComment);
        setComment("");
      
      let p= await  props.blogActions.getSinglePost({ id, ...props });
      if(p){
      props.blogActions.getUserPosts(id,"skjdk")
     
      }
      }
    } else {
      message.error("write your comment!");
    }
  };


useEffect(()=>{

  props.blogActions.getSinglePost({ id, ...props });
 
 


},[])

useEffect(()=>{
  if(props.blogs.singlePost && props.profile){
    props.blogActions.getBlogUserById(props.blogs.singlePost.author, props.blogs.singlePost.authorType)
  
    console.log(props.blogs.singlePost)
    if(props.blogs.singlePost.likes && props.blogs.singlePost.likes.length !== 0){
      props.blogs.singlePost.likes.forEach((item)=>{
        console.log(item.user,props.profile.id)
        if(item.user === props.profile.id){
        
          setLiked(true);

        }
      })
    }

      if(props.blogs.singlePost.id===id){
        console.log(props.blogs.singlePost)
        setSingleBlog(props.blogs.singlePost)

      if(props.blogs.singlePost.comments.length!==0){
        setComments(props.blogs.singlePost.comments)
      }
      }

  }

},[props.blogs.singlePost,props.profile.id])
console.log(comments)
console.log(singleBlog)
useEffect(()=>{
  if(singleBlog){
    setDate(moment(singleBlog.createdAt).format("MMMM D YYYY").split(','))
 }
},[singleBlog])

const handleSort=(value)=>{
  setSort(value)
  
}
console.log(sort)
const handleSorting =(a,b)=>{
if(sort && sort === "Newest"){
  
  return new Date(b.createdAt) - new Date(a.createdAt);
}
else{
  return new Date(a.createdAt) - new Date(b.createdAt)
}



}

    return (
      <>
      {singleBlog&& props.blogs.blogUser&&
      (
        <div className="singleBlog">
        <div className="blog-main-content">
          <div className="singleBlog-tags">
            {singleBlog? singleBlog.blogCategory.map((item,index)=>{
              return <p key={index}>{item}</p>
            }):""}
          </div>
          <h2>{singleBlog?singleBlog.title:""}</h2>

          <div className="shareSocial">
            <span>Share post on </span>
            <FacebookShareButton url={`https://legaltekv2.herokuapp.com/lawfirm/blogs/${props.blogs.singlePost.id}`}>
                          <i className="fa fa-facebook" />
                          </FacebookShareButton>
             <TwitterShareButton>

            <i className="fa fa-twitter" url={`https://legaltekv2.herokuapp.com/lawfirm/blogs/${props.blogs.singlePost.id}`}/>
             </TwitterShareButton>
             <LinkedinShareButton>
             
            <i className="fa fa-linkedin" url={`https://legaltekv2.herokuapp.com/lawfirm/blogs/${props.blogs.singlePost.id}`}/>
             </LinkedinShareButton>
          </div>

        <div className="featured-image">  
            <div className="shortInfo" style={{textAlign:"center"}}>
              <p> {props.blogs.blogUser.firstname} {props.blogs.blogUser.lastname}
              <p>{props.blogs.blogUser.lawfirmName}</p>
              </p>
              <p>   {singleBlog?date:""}</p>
            </div>
            <div className="profilePicture" >
              <img src={ props.blogs.blogUser.profileImage?props.blogs.blogUser.profileImage.url:Civil} alt="pretty_girl" />
            </div>
            <img
             
              src={singleBlog?singleBlog.coverImage.url:Criminal}
              alt="building.jpg"
            />
          </div>
       
          <div className="blog-and-categories">
            <div className="blog-body-and-comments">
              <div className="blog-body ck-content">
                {singleBlog?parse(singleBlog.body):""}
                </div>

              <hr />


              <div className="blogComments">
              <div className="commentTabs">
                    <p className="commentTab">Comments</p>
                    {props.auth.isAuthenticated && (
                        <p>
                          <i
                            className={`fa fa-thumbs-up  ${
                              liked ? "" : "stroke-transparent"
                            } `}
                            onClick={() =>{
                              liked? unlikePost(singleBlog):
                              likePost(singleBlog)
                            
                            } }
                          />

                          <span>{singleBlog && singleBlog.likes? singleBlog.likes.length:0}</span>
                        </p>
                        
                      )}
                  </div>

                <div className="shareAndFilter">
                  <div className="commentSecShare">
                    <div>
                      <i className="fa fa-heart-o" /> Share
                    </div>
                    <div>

                    <TwitterShareButton  url={`https://legaltekv2.herokuapp.com/lawfirm/blogs/${props.blogs.singlePost.id}`}>
                      <i className="fa fa-twitter" /> Tweet
                    </TwitterShareButton>
                    </div>
                    <div>
                      <FacebookShareButton  url={`https://legaltekv2.herokuapp.com/lawfirm/blogs/${props.blogs.singlePost.id}`}>
                       
                        <i className="fa fa-facebook" /> Share
                        </FacebookShareButton>
                    </div>
                     <div>

                    <LinkedinShareButton  url={`https://legaltekv2.herokuapp.com/lawfirm/blogs/${props.blogs.singlePost.id}`}>
                   
                   <i className="fa fa-linkedin" /> Share
              
                 </LinkedinShareButton>
                     </div>
              
                  </div>
                  

                  <div className="filterDrop">
                  <Select defaultValue="Sort By Oldest" style={{ width: 160 }} bordered={false} onChange={handleSort}>
                    <Option value="Oldest">Sort By Oldest</Option>
                    <Option value="Newest">Sort By Newest</Option>
                   
                  </Select>
                 
                  </div>
                </div>

                <ul className="commentsList">
                {comments &&
                      comments.sort(handleSorting).map((item, index) => (
                        
                        <li key={index}>
                          <div className="avatar">
                            <img src={item.profilepic} style={{height:"100%",width:"100%",objectFit:"cover"}}/>
                            </div>{" "}
                          <div className="commenterInfo">
                            <p>{item.author.firstName}</p>{" "}
                            <span>{item.comment}</span>
                          </div>
                          <div><p>{moment().diff(item.createdAt,'days') >= 1?`${moment().diff(item.createdAt,'days') } days ago`:moment().diff(item.createdAt,'hours') >= 1?`${moment().diff(item.createdAt,'hours')} hours ago` :moment().diff(item.createdAt,'minutes') >1 ? `${moment().diff(item.createdAt,'minutes')} minutes ago`:`just now`}</p></div>
                          {item.author === props.profile.id && (
                            <div
                              className="deleteComment"
                              onClick={() => {
                                setModalOpen(true);
                                setCommentToBeDeleted(item.id);
                              }}
                            >
                              <i className="fa fa-close" />
                            </div>
                          )}
                        </li>
                      ))}
          
                </ul>
                <div className="inputContainer">
                  <img src={props.profile && props.profile.profileImage &&props.profile.profileImage.url} alt="user_image" />
                  <input
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Join the discussion"
                      onKeyPress={(e) => {
                        e.which == 13 && postComment();
                      }}
                    />
                </div>
                <button className="postComment" onClick={postComment}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="navigateBlog">
          <div className="navigateBlogBtns">
         
            <button data-tip="Previous Post">
              <i className="fa fa-arrow-left" />
            </button>
            <button data-tip="Next Post">
              <i className="fa fa-arrow-right" />
            </button>
          </div>
          <div className="heightLessContainer">
            <div className="nextBlogImageContainer">
              <img src={Criminal} alt="building.jpg" />
            </div>
            <div className="nextBlogTitleContainer">
              <p>
                NanaPrincess Hotel - The New Jewel in the Crown of Charismatic
                Crete
              </p>
            </div>
          </div>
        </div>
        {modalOpen && (
            <ConfirmModal
              {...props}
              acceptMethod={() => deleteComment(commentToBeDeleted)}
              onClose={modalClose}
              headerText="Delete Comment"
              bodyText="Are you sure you want to delete this Comment?"
            />
          )}
      </div>
      )} 
     </>
    )
}

const mapStateToProps = (state) => ({
   auth: state.auth,
   profile: state.auth.lawyerUserProfile,
   blogs: state.blog,
 });
 
 const mapDispatchToProps = (dispatch) => ({
   blogActions: bindActionCreators(blogActions, dispatch),
 });
 export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);
