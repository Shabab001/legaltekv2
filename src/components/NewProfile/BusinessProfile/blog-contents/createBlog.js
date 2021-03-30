import React,{useState,useRef} from 'react'
import "./createBlog.css"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const CreateBlog = ({setCreate}) => {
    const editor = useRef(null);
    const [coverImage, setCoverImage] = useState();
    const [coverImageError, setCoverImageError] = useState("")
    const [tempCoverImage, setTempCoverImage] = useState();
    const [title, setTitle] = useState({value:"",message:""});
    const [editorValue, setEditorValue] = useState({value:"Hello from CkEditor", message:""});
    const [category, setCategory] = useState({value:"", message:""});
    const categories = ["Food Recipes", "Food Reviews", "Food and Travel", "Food Industry News"];
    function handleChange(value) {
        console.log(value)
        if(value.length){
          setCategory({value:value, message:""});
        }
        else{
          setCategory({value:value, message:"Catgory cannot be empty"});
        }
      }
    
      
    return (
        <div className="createPost" style={{ width: "100%" }}>
        <h2><i className="fa fa-chevron-left" style={{marginRight: 15,cursor:'pointer'}} onClick={()=>setCreate(false)}  />Create Blog Post</h2>
        <div className="input-cont">
        <img
          className="tempCoverImage"
          src={tempCoverImage ? tempCoverImage : null}
        />
        {coverImageError &&
        <p className="error-text">*{coverImageError}</p>
      }
        </div>
       
        <label for="coverImage" className="chooseCover gray-btn">
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
      {/* <Select
          mode="multiple"
          placeholder="Select categories"
          defaultValue={[]}
          onChange={handleChange}
          style={{ width: "100%" }}
        >
          {categories.map((item, index) => (
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
        /> */}
         <CKEditor
                    editor={ ClassicEditor }
                    />
        {editorValue.message && <p className="error-text">{editorValue.message}</p>}
        </div>
       
  
        <button className="red-btn" >
          Submit
        </button>
      </div>
    )
}

export default CreateBlog
