import React, { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import * as blogActions from "../../../../actions/blogActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import ClassicEditor from "@xccjh/xccjh-ckeditor5-video-file-upload";

import ClassicEditor from "@dmc4719/ckeditor5-custom-build/build/ckeditor"
// import * as ClassicEditor from "./ckeditor5/build/ckeditor"

import { CONFIG } from "../../../MiniComponents/CKeditorConfig";
import "../../../../assets/css/createBlog.css";
import MyCKEditorUploadAdapter from "../MyCKEditorUploadAdapter";
import { Select, message } from "antd";
import {lawCats} from "../lawyer modal/lawCats"

const { Option } = Select;
const {REACT_APP_API}= process.env
   
const xhr  = new XMLHttpRequest();
function CreateBlog(props) {
  const editor = useRef(null);
  const [file, setCoverImage] = useState(null);
  const [coverImageError, setCoverImageError] = useState("")
  const [tempCoverImage, setTempCoverImage] = useState();
  const [title, setTitle] = useState({value:"",message:""});
  const [editorValue, setEditorValue] = useState({value:"Hello from CkEditor", message:""});
  const [category, setCategory] = useState({value:"", message:""});


  const[loading,setLoading]=useState(false)


  let upResponse=null;
  function handleChange(value) {

    if(value.length){
      setCategory({value:value, message:""});
    }
    else{
      setCategory({value:value, message:"Catgory cannot be empty"});
    }
  }
  const makeRequest = function (url, method,form) {


  
    // Return it as a Promise
    return new Promise(function (resolve, reject) {
  
      // Setup our listener to process compeleted requests
     xhr.onreadystatechange = function () {
  
        // Only run if thexhr is complete
        if (xhr.readyState !== 4) return;
  
        // Process the response
        if (xhr.status >= 200 &&xhr.status < 300) {
          // If successful
          upResponse=JSON.parse(xhr.responseText)[0]
          resolve(upResponse);
        } else {
          // If failed
          reject({
            status:xhr.status,
            statusText:xhr.statusText
          });
        }
  
      };
  
      // Setup our HTTP request
     xhr.open(method || 'GET', url, true);
     xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.auth_token);
  
      // Send thexhr
     xhr.send(form);
  
    });
  };
console.log(editorValue.value)
const createBlog = async () => {
    let error = false
    
    if(!title.value || !editorValue.value || !file|| !category){

      if(!title.value){
        setTitle({...title, message:"Title field cannot be empty"})
        error = true
      }

      if(!editorValue.value){
        setEditorValue({...editorValue, message:"Body field cannot be empty"})
        error = true
      }

      if(!category.value.length){
        setCategory({...category, message:"Catgory cannot be empty"});
        error = true
      }

      if(!file){
        setCoverImageError("Cover image cannot be empty")
        error = true
      }
   return;
 
     }
     setLoading(true)
       const blogParams={
         auth:props.auth,
         obj:{
           title:title.value,
           body:editorValue.value,
           blogCategory:[...category.value],
           author:props.profile.id,
           authorType:props.auth.user.role.name,
           identify:props.profile.id
           
         }
       }
    
        
          console.log(props.history)
         const blog=await props.blogActions.createPost(blogParams,props.history)
         if(blog){

         
          
             console.log(blog)
             let form= new FormData()
             form.append("files",file)
             form.append("ref","blog")
             form.append("refId",blog.id)
             form.append("field","coverImage")
           
            
          let up =await makeRequest(`${REACT_APP_API}/upload`,"POST",form)
               
               if(up){

               props.history.goBack()
                 setLoading(false)
                message.success("Post created successfully");
               }
               else{
                 setLoading(true)
               }
    
         }
         
   
    
     
    let currentTimeDate = Date.now();
    
  };
  return (
    <div className="createPost" style={{ width: "100%" }}>
      <h2><i className="fa fa-chevron-left" style={{marginRight: 15,cursor:'pointer'}} onClick={()=>props.history.goBack()}  />Create Blog Post</h2>
      <div className="input-cont">
      <img
        className="tempCoverImage"
        src={tempCoverImage ? tempCoverImage : null}
      />
      {coverImageError &&
      <p className="error-text">*{coverImageError}</p>
    }
      </div>
     
      <label htmlFor="coverImage" className="chooseCover gray-btn">
        Choose Cover
        <input
          id="coverImage"
          type="file"
          onChange={(e) => {
            setCoverImage(e.target.files[0]);
            if (e.target.files[0]) {
              setCoverImageError("")
              setTempCoverImage(URL.createObjectURL(e.target.files[0]));
            }
            else{
              setCoverImageError("Cover image cannot be empty")
            }
          }}
        />
      </label>
      <div className="input-cont">
      <input
        placeholder="Post title"
        value={title.value}
        onChange={(e) => {
          if(e.target.value != ""){
            setTitle({...title, message:"",value:e.target.value});
          }
          else{
            setTitle({...title, message:"Title field cannot be empty",value:e.target.value});
          }
        }}
      />
      {title.message &&
      <p className="error-text">*{title.message}</p>
    }
      </div>

    <div className="input-cont">
    <Select
        mode="multiple"
        placeholder="Select categories"
        defaultValue={[]}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        {lawCats.map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>
      {category.message &&
      <p className="error-text">*{category.message}</p>
    }
    </div>
  
      <div className="input-cont">
      <CKEditor
        ref={editor}
        config={CONFIG}
        // style={{ width: "100%", margin: "auto" }}
        editor={ClassicEditor}
        data={editorValue.value}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
          editor.plugins.get("FileRepository").createUploadAdapter = (
            loader
          ) => {
            return new MyCKEditorUploadAdapter({ loader, ...props });
          };
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          if(data != ""){
            setEditorValue({...editorValue,value:data,message:""});
          }
          else{
            setEditorValue({...editorValue, message:"Body field cannot be empty",value:data});
          }
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      {editorValue.message && <p className="error-text">{editorValue.message}</p>}
      </div>
     

      <button className="blog-red-btn" onClick={() => createBlog()}>
      {loading ? <div className="spinner-border"></div> : "Post Blog"}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.lawfirmUserProfile,
  blogs: state.blog,
});

const mapDispatchToProps = (dispatch) => ({
  blogActions: bindActionCreators(blogActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);
