import React,{memo,useState} from 'react'
import {makeRequest} from "./makereqUtils"
import * as userActions from "../../../../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { message } from 'antd';
import axios from 'axios';


const {REACT_APP_API}= process.env
const LocationDocs = (props) => {
const [multipleFiles, setMultipleFiles]=useState([])
const [loading,setLoading]=useState(false)
const [uploadError,setUploadError]=useState("")

  const handleFileChange =(e)=>{
    let files=[]
      setMultipleFiles(Array.from(e.target.files))
      setUploadError("")
    
   
  }
console.log(multipleFiles)

const handleUpload=async()=>{
  if( multipleFiles.length ==0){
    setUploadError("No file Found")
    return 
  }
  setLoading(true);

  let documents={
    name:props.businessAddress,
    branch:props.id
  }
  let document =null
 if(!props.docs ){
 
  document = await axios.post(`${REACT_APP_API}/documents`,documents,{
     headers:{
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.auth_token,
     }
   }).catch(({err})=>{
            console.log(err.data)
            message.error("documents not created")
   })
  }
  else{
    document = await axios.put(`${REACT_APP_API}/documents/${props.docs}`,documents,{
      headers:{
       "Content-Type": "application/json",
       Authorization: "Bearer " + localStorage.auth_token,
      }
    }).catch(({err})=>{
             console.log(err.data)
             message.error("documents not updated")
    })
  }
   if(document.data){
       console.log(document.data.id)
  
     let form= new FormData()
     multipleFiles.forEach(( file ) => form.append("files", file,file.name))
     form.append("ref","documents")
     form.append("refId",document.data.id)
     form.append("field","docs")
     
     
     let up =await makeRequest(`${REACT_APP_API}/upload`,"POST",form)
     
     if(up){
       let profileObj ={
        locationVerified:"PENDING"
       }
      let response = await props.actions.updateBranches(
        profileObj,
       props.id
      );
       if(response){
        props.actions.getLawfirmUserProfile(props.profile.id, props.id)
         
         setLoading(false)
         message.success("files upload successfully");
        }
      }
    else{
      setLoading(false)
      message.error("files not uploaded");
    }
    }

  
}

    return (
        <div  className={props.type ==="Required" || props.type === "Rejected"?`order-section-file ${props.css}`:`order-section-second ${props.css}`}>
          <div className="order-location-box">
        <div>
        
        <p>Proof of location of {props.lawfirmName} Lawfirm at {props.businessAddress}</p>
        </div>
          
        <div>
      
          <p>{props.type}</p>
         
        </div>
        </div>
        {props.type ==="Required" || props.type === "Rejected"?
             <div className="order-loc-file-input"> 
                 <input type="file" accept=".doc,.docx,.pdf" multiple onChange={handleFileChange}/>
                 {!loading?
                 <div onClick={handleUpload} className="order-file-btn">
                   
                   <p>Upload</p>
                   </div>:
                  <div className="upload-loader"> 
                    </div>
                }
              </div>:null
            }
            {uploadError !== ""?<p>{uploadError}</p>:null}
      </div>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.lawfirmUserProfile,
  blogs: state.blog,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(LocationDocs));

