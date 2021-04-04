import React,{useState,useRef,useEffect} from 'react'
import ReactDom from "react-dom"
import "./LawyerModal.css"
import {VscChromeClose} from "react-icons/vsc"
import OtpCard from './otpCard'
const LawyerModal = ({open,set}) => {
  const [otp,setOtp]=useState(false)
  const [place,setPlace]=useState("")
  const[newPage,setnewPage]=useState(false)
    const [selectedOption,sets]=useState({value: "", label: "Item Category"})
    const [delivery,setDelivery]=useState({value: "", label: "Delivery Options"})
    const [startDate, setStartDate] = useState(new Date());
    const [image, setImage]=useState("");
    const[top,setTop]=useState(200)
    const[isUpload,setIsUpload]=useState(false)
    const [scroll,setScroll]=useState(50)
    const [location,setLocation]=useState(false);
    const textareaRef=useRef()
    const textContainerRef=useRef()
    const uploadContentRef=useRef()
    const mainContainer =useRef() 
    let reader =new FileReader()
    const removeImage =()=>{
      setImage("")
      setIsUpload(false);
   
    
    }
   const resizeTextarea=()=>{
    //  mainContainer.current.style.top="150px"
    console.log(textContainerRef.current.scrollHeight)
     textareaRef.current.style.height="50px"
      textareaRef.current.style.height=(textareaRef.current.scrollHeight)+"px"
    
      if(!isUpload){
        textContainerRef.current.style.height=(textareaRef.current.scrollHeight)+"px"
        if(textContainerRef.current.scrollHeight!==scroll ){
          setScroll(textareaRef.current.scrollHeight)
        }
   
      }
      else{
        textContainerRef.current.style.height=(textContainerRef.current.scrollHeight)+"px"
        if(textContainerRef.current.scrollHeight!==scroll ){
          setScroll(textContainerRef.current.scrollHeight)
        }
      }
     
   }

   const handleNewPage=(e)=>{
     e.preventDefault();
     setnewPage(true)
   }
   useEffect(() => {
    if(isUpload){

      if(uploadContentRef.current){
        uploadContentRef.current.style.height=(uploadContentRef.current.scrollHeight)+"px"
        textContainerRef.current.style.height=(textContainerRef.current.scrollHeight)+"px"
        if(textContainerRef.current.scrollHeight!==scroll ){
          setScroll(textContainerRef.current.scrollHeight)
        }
      }
       }
       else{
         if(textContainerRef.current){
          

             textContainerRef.current.style.height=(textareaRef.current.scrollHeight)+"px"
             if(textContainerRef.current.scrollHeight!==scroll ){
              setScroll(textareaRef.current.scrollHeight)
            }
          

         }
       }
      
    
   }, [isUpload])
   useEffect(() => {
     
     if(scroll<=308 && scroll > 88){
       if(mainContainer.current){
         if(scroll> 88 && scroll <=110){

           mainContainer.current.style.top=(191)+"px"
         }
         if(scroll> 110 && scroll <=132){

          mainContainer.current.style.top=(182)+"px"
        }
        if(scroll> 132 && scroll <=154){

          mainContainer.current.style.top=(173)+"px"
        }
        if(scroll> 154 && scroll <=176){

          mainContainer.current.style.top=(164)+"px"
        }
        if(scroll> 176 && scroll <=198){

          mainContainer.current.style.top=(155)+"px"
        }
        if(scroll> 198 && scroll <=220){

          mainContainer.current.style.top=(145)+"px"
        }
        if(scroll> 220 && scroll <=242){

          mainContainer.current.style.top=(135)+"px"
        }
        if(scroll> 242 && scroll <=264){

          mainContainer.current.style.top=(125)+"px"
        }
        if(scroll> 264 && scroll <=286){

          mainContainer.current.style.top=(113)+"px"
        }
        if(scroll> 286 && scroll <=308){

          mainContainer.current.style.top=(102)+"px"
        }
       
       }
       
      

     }
     else if(scroll>308){
      if(mainContainer.current){
        console.log("here")
      mainContainer.current.style.top=(100)+"px"  
      }
     }  
     else if(scroll <= 88){
      if(mainContainer.current){
       console.log("HI")
      mainContainer.current.style.top=(200)+"px"  
      }
     }
   
   }, [scroll])
   console.log("top:",top  ) 
   console.log("scroll", scroll)

const handleUpload =(e)=>{
  console.log("uploading")
if(e.target.files && e.target.files[0]){
 
  reader.onload =function (e){
    setImage(e.target.result)
    setIsUpload(true)
    
  }
  reader.readAsDataURL(e.target.files[0])
}
}
    const options = [
        { value: 'chocolate', label: 'Book' },
        { value: 'strawberry', label: 'Computer' },
        { value: 'vanilla', label: 'Furniture' },
        { value: 'vanilla', label: 'Money' },
      ]; 
      const DeliveryOptions = [
        { value: 'Delivery', label: 'Delivery' },
        { value: 'Pickup', label: 'Pickup on Location' },
     
      ]; 
    const customStyles = {
        option: (provided, state) => ({
          

         
            
       
          color: state.isSelected ? 'var(--prvd-third)' : 'black',
          padding: 10,
          backgroundColor: state.isDisabled
          ? null
          : state.isSelected
          ? "var(--prvd-primary)"
          : state.isFocused
          ? "var(--prvd-third)"
          : null,
         
          
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
        
          width: 220,
          height:22,
          display:"flex",
          border:"none",
          outline:"none",
          alignItems:"center",
          justifyContent:"space-between"
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }
  
        
    
    const  handleChange = selectedOption => {
        sets( selectedOption );
        console.log(`Option selected:`, selectedOption);
      };
      const  handleDelivery = selectedOption => {
        setDelivery( selectedOption );
        if(selectedOption.value==="Delivery"){
          setLocation(true)
        }
        else{
          console.log("hi")
          setLocation(false)
        }
        console.log(`Option selected:`, selectedOption);
      };
      
      const pageTransitions={
        in:{
          opacity:1,
          x:0
        },
        initial:{
          opacity:0,
          
        },
        out:{
          
          transition:{delay:1}
        }
      }
      const trans ={
        type:"tween",
        ease:"ease"
      }
      
      if(!open)return null
   
    return ReactDom.createPortal
    
   

    
    (
      <div className="post-modal-main">
            <div   className="post-modal-container" ref={mainContainer}> 
            {otp? <OtpCard setOtp={setOtp}/>:
            <>
            <div className="post-modal-headings">
            <div className="post-modal-first">

             <p>Add Lawyer</p>
            </div>
            <div className="post-modal-cross">

              <VscChromeClose style={{fontSize:"1.4rem"}} onClick={()=>{set(false) 
               
                setScroll(50)
                }}/>
            </div>
          </div>
  
           <div className="post-modal-options-grid2">
     
     <div className="pmodal-name-cat-time">
       <input placeholder="Name" />
     </div>

     <div className="pmodal-name-cat-time">
       <input placeholder="Title" />
     </div>
</div>
<div className="post-modal-options-grid2">
     
     <div className="pmodal-name-cat-time">
       <input placeholder="Email" />
     </div>

     <div className="pmodal-name-cat-time">
       <input placeholder="Phone" />
     </div>
</div>
<div className="post-modal-options-grid2">
     
     <div className="pmodal-name-cat-time">
       <input placeholder="Password" />
     </div>

     <div className="pmodal-name-cat-time">
       <input placeholder="Confirm password" />
     </div>
</div>
<div className="postmodal-btn" onClick={()=>setOtp(true)}>
             <p>Add</p>
           </div>
           </>
            }

            </div>
        </div>,
        document.getElementById("portal")
    )
}

export default LawyerModal
