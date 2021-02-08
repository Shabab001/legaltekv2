import React,{useState,useEffect} from 'react'
import { GrSearch } from 'react-icons/gr';
import { MdKeyboardVoice } from 'react-icons/md';
import { AiFillPauseCircle } from 'react-icons/ai';
import "./searchbar.css"
import SearchSuggestions from "./searchSuggestions"
const SearchBar = () => {
  const[sug, setSug]=useState(false);
  const [recording, setRec]=useState(false);
  const [voiceInput, setVoiceInput]=useState("");
  const [textInput, setTextInput]=useState("");
  const [visible,setVisible] = useState(true)
   const [dropdown, setDrop]=useState(false);
  const isFirefox = typeof InstallTrigger !== 'undefined';

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const mic= new SpeechRecognition();

 
 
      mic.lang="en-US" 
      

const handleDropdown=()=>{
  setDrop(!dropdown)
}




   useEffect(()=>{
  handleListen();
   },[recording])   

 const handleListen=()=>{
   if(recording){
     mic.start()
     
   }
   else{
    setVoiceInput("");
    setSug(false);
     mic.stop()

     mic.onend=()=>{
       console.log("mic stopped");
     
     }
   }
   mic.onstart=()=>{
     console.log("Mics on")
   }
   mic.onresult = event=>{
    var results = event.results[0][0].transcript;
     console.log(typeof results);
     setVoiceInput(results);
     setSug(true);
     mic.onerror=(event)=>{
       console.log(event.error);
     }
   }
 }




      const handlesug=(e)=>{
               
          let value=e.target.value;
          if(value){
            setSug(true)
            setTextInput((input)=>input=value)
          }
          else{
            setTextInput("")
            setSug(false)
          }
            
          }
          const handleRecording =()=>{
            setRec(!recording);
          }
      console.log(sug)

      const searchbarOnScroll = (e) =>{
        console.log(window.pageYOffset);
        
        
          if(window.pageYOffset >= 220){
             setVisible(false);
          
          }
          else{
             setVisible(true);
             setDrop(false)
          }
        
    
      }



      useEffect(()=>{
        // window.onscroll = searchbarOnScroll
        
        window.addEventListener('scroll', searchbarOnScroll);
        

        return()=>{
          window.removeEventListener('scroll', searchbarOnScroll);
       
        }
      },[])




  return (
    <div className="search-main">
     
        {visible?(
          <>
          
            <div className="search-container">
      <form className="search-form">
      <div className="search-from-container">

      <GrSearch className="search-icon"/>
      <input type="text" onChange={(e)=>handlesug(e)} className="search-input"  placeholder="search here" value={recording?voiceInput: textInput}/>
      {!isFirefox && recording? <AiFillPauseCircle className="voice-icon" style={{color: "var(--secondary)"}} onClick={handleRecording}/>
      :<MdKeyboardVoice className="voice-icon"  onClick={handleRecording}/>}

      </div>
      <button className="search-btn">Find it now</button>
    </form>
    </div>
       {sug&&<SearchSuggestions change={false}/>}
</>
        ):(
          <div className="search-header-container">
   <div className="fadein" onClick={handleDropdown}>
           <div className="search-header-grid">
             <GrSearch className="search-header-icon" style={{color:"red"}}/>
               <p>Search Here</p>
             </div>
             
     </div>{
       dropdown && (
         < div className="search-align">
        <div className="search-container">
        <form className="search-form">
        <div className="search-from-container">
  
        <GrSearch className="search-icon"/>
        <input type="text" onChange={(e)=>handlesug(e)} className="search-input"  placeholder="search here" value={recording?voiceInput: textInput}/>
        {!isFirefox && recording? <AiFillPauseCircle className="voice-icon" style={{color: "var(--secondary)"}} onClick={handleRecording}/>
        :<MdKeyboardVoice className="voice-icon"  onClick={handleRecording}/>}
  
        </div>
        <button className="search-btn">Find it now</button>
      </form>
      </div>
         {sug&&<SearchSuggestions change={true}/>}
         </div>
       ) 
     }
    
</div>

        )}


      
      
    </div>
  )
}

export default SearchBar

