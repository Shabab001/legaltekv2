import React,{useState} from 'react'
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

const BlogCard = (props) => {
    const [option,setOption]=useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [itemToBeDeleted, setItemToBeDeleted] = useState(null);

let date=moment(props.blog.createdAt).format("MMMM, D, YYYY").split(',')

console.log(date)

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
  console.log(obj)
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


    const handleOption=(e)=>{
        console.log(e.target)
        setOption(!option)
        console.log(option)
    }
    const closeOption =()=>{
        setOption(false)
    }
    return (
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

                         </div>
                         <div onClick={()=>props.history.push(`/lawfirm/blogs/${props.blog.id}`)} style={{cursor:"pointer"}}>

                            <p>{props.blog.title}</p>
                         </div>
                           
                      </div>
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
                        >
                          <button>
                            <ThreeDotsIcon />
                          </button>
                        </Dropdown>
             </div>
              </div>
            { parse(props.blog.body)}
          </div>
          <div className="bcard-lower">
             {props.blog.blogCategory.map((item,index)=>{
               return(

                 <p key={index}>{item}</p>
               )
             })}
             <div style={{display:"flex",gap:".3rem",alignItems:"center"}}>
             <BiLike/>
              <p><span style={{color:"black"}}>0 </span></p>
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
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.userProfile,
  blogs: state.blogs,
});

const mapDispatchToProps = (dispatch) => ({
  blogActions: bindActionCreators(blogActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(BlogCard);

