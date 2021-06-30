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




const SingleBlog = (props) => {
  const [singleBlog,setSingleBlog]=useState(null)
  const[date,setDate]=useState(null)
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [commentToBeDeleted, setCommentToBeDeleted] = useState("");
  const [facebookShareCount, setFacebookShareCount] = useState();
  const{id}=useParams()
  console.log(id)


  const likePost = async (blog) => {
    let likePost = await props.blogActions.likePost({
      blogId:blog.id,
      likes:blog.likes+1,
      ...props,
    });
    if (likePost) {
    
      props.blogActions.getSinglePost({ id, ...props });
    }
  };

  const unlikePost = async (blog) => {
    let unlikePost = await props.blogActions.unlikePost({
      blogId:blog.id,
      likes:blog.likes,
      ...props,
    });
    if (unlikePost) {

      props.blogActions.getSinglePost({ id, ...props });
    }
  };

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
        author: props.auth.user.lawfirm_user.id?props.auth.user.lawfirm_user.id:props.auth.user.lawfirm_user,
        blog: singleBlog.id,
        comment: comment,
      };
      console.log("sdffffffffffffffffffffposting")
      let postComment = await props.blogActions.postComment({ obj, ...props });
      if (postComment) {
        console.log(postComment);
        setComment("");
        let obj = {
          postId: singleBlog._id,
        };
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
  if(props.blogs.singlePost){
    
    console.log(props.blogs.singlePost)

      if(props.blogs.singlePost.id===id){
        console.log(props.blogs.singlePost)
        setSingleBlog(props.blogs.singlePost)

      if(props.blogs.singlePost.comments.length!==0){
        setComments(props.blogs.singlePost.comments)
      }
      }

  }

},[props.blogs.singlePost])
console.log(comments)
console.log(singleBlog)
useEffect(()=>{
  if(singleBlog){
    setDate(moment(singleBlog.createdAt).format("MMMM D YYYY").split(','))
 }
},[singleBlog])
    return (
      <>
      {singleBlog&&(
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
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-linkedin" />
          </div>

        <div className="featured-image">
            <div className="shortInfo">
              <p>
                Shabab{" "}
                Hossain
              </p>
              <span>   {singleBlog?date:""}</span>
            </div>
            <div className="profilePicture">
              <img src={Civil} alt="pretty_girl" />
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

              <div className="shareSocial">
                <span>Share post on </span>
                <i className="fa fa-facebook" />
                <i className="fa fa-twitter" />
                <i className="fa fa-linkedin" />
              </div>

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
                              setLiked(!liked)
                            } }
                          />

                          <span>{singleBlog && singleBlog.likes? liked?singleBlog.likes+1:singleBlog.likes:0}</span>
                        </p>
                        
                      )}
                  </div>

                <div className="shareAndFilter">
                  <div className="commentSecShare">
                    <div>
                      <i className="fa fa-heart-o" /> Share
                    </div>
                    <div>
                      <i className="fa fa-twitter" /> Tweet
                    </div>
                    <div>
                      <FacebookButton
                       
                        appId={645576173040339}
                      >
                       
                        <i className="fa fa-facebook" /> Share
                      </FacebookButton>
                    </div>
                    <div>
                   
                      <i className="fa fa-instagram" /> Share
                 
                    </div>
                  </div>

                  <div className="filterDrop">
                    <p>
                      Sort By Oldest <i className="fa fa-caret-down" />
                    </p>

                 
                  </div>
                </div>

                <ul className="commentsList">
                {comments &&
                      comments.map((item, index) => (
                        <li key={index}>
                          <div className="avatar"></div>{" "}
                          <div className="commenterInfo">
                            <p>{item.author.firstName}</p>{" "}
                            <span>{item.comment}</span>
                          </div>
                          <div><p>{moment(item.createdAt).format("H")}hours ago</p></div>
                          {item.author === singleBlog.author && (
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
                  <img src={Civil} alt="user_image" />
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
   profile: state.auth.lawfirmUserProfile,
   blogs: state.blog,
 });
 
 const mapDispatchToProps = (dispatch) => ({
   blogActions: bindActionCreators(blogActions, dispatch),
 });
 export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);
