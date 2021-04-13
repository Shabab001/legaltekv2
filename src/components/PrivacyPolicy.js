import React,{useState,useRef,useEffect} from 'react'
import privacy from "../assets/img/privacy.webp";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "../assets/css/privacy.css";
import "./term.css"
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
import SlideMenuItems from './terms-contains/slideMenuItems';
import Welcome from './terms-content/Welcome';
import {paras,privacyParas} from "./terms-content/paras"
import Content from './terms-content/content';
import Introduction from './terms-content/Introduction';

console.log(paras)
const list = [
  { name: 'Introduction' },
  { name: 'What information do we collect?' },
  { name: 'How we use the information we collect' },
  { name: 'Managing your preferences' },
  { name: 'Requests for information' },
  { name: 'Listing information' },
  { name: 'Security measures' },
  { name: 'Third-party websites ' },
  { name: 'Transfers of information' },
  { name: 'Children' },
  { name: 'California privacy rights' },
  { name: 'Changes to the policy' },


];

// One item component
// selected prop will be passed


// All items component
// Important! add unique key
export const Menu = (list, selected) =>

  list.map((el,index) => {
    const {name} = el;

    return <SlideMenuItems text={name} key={index} selected={selected} />;
  });
  
  
  const Arrow = ({ text, className,click,setClick,hide}) => {
    console.log(hide)
    return (
      <div onClick={()=>setClick(!click)} 
      style={{fontSize:"2rem"}}
      className={hide? `${className} hide`:className}
      >
      {text}
    </div>
  );
};







const PrivacyPolicy = ({title1,title2}) => {
  const[click,setClick]=useState(true)
  const [active, setActive]=useState("Summary");
  const [selected,setSelected]=useState("0")
  const [hidel,setHidel]=useState(false)
  const [hider,setHider]=useState(false)
  const[read,setHasRead]=useState(1)
  const [page1,setPage1]=useState(false)
  const [page2,setPage2]=useState(false)
  const [page3,setPage3]=useState(false)
  const [page4,setPage4]=useState(false)
  const [page5,setPage5]=useState(false)
  const [page6,setPage6]=useState(false)
  const [page7,setPage7]=useState(false)
  const [page8,setPage8]=useState(false)
  const [page9,setPage9]=useState(false)
  const [page10,setPage10]=useState(false)
  const [page11,setPage11]=useState(false)
  const [page12,setPage12]=useState(false)

  const scrollt=useRef();
  
  const ArrowLeft = Arrow({ text: <FiChevronLeft style={{fontSize:"5rem"}} setCount={setHasRead} count={read}/>, className: 'arrow-prev', click:click , setClick:setClick,hide:hidel});
const ArrowRight = Arrow({ text: <FiChevronRight style={{fontSize:"5rem"}} setCount={setHasRead} count={read}/>, className: 'arrow-next', click:click , setClick:setClick,hide:hider});
  
  const   onSelect = key => {
    
    
    setSelected(key);
    console.log(typeof(key))
  }

   let index =0;
   
console.log("read", read)

  console.log(selected)
 let menu=Menu(list,selected)


let container=null;
  useEffect(() => {
    console.log(window.innerWidth)
console.log(container.state.translate)
if(container){
  if(container.state.translate <-30){
    setHidel(false)
  }
  else{
    setHidel(true)
  }
  if(container.state.translate >-1200){
    setHider(false)

  }
  else{
    setHider(true)
  }
}
   
  },[click] )


 
  return (
    <div className="terms-container">
                
        <div className="terms-heading">
          <div className="terms-heading-grid">
          <div >
            <p>{title1==="Privacy"?title1:"Privacy"} <span>
              {title2==="Policy"?title2:"Policy"}
              </span>
              </p>
            <p>{Date.now( )}</p>
          </div>
          </div>
        <div className="terms-scrollbar"       >
          <div className="terms-underline"></div>
          <ScrollMenu
          
               ref={(el)=>container=el}
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={selected}
                onSelect={onSelect}
             
                
                
  
       />
       </div>
        
        </div>
          {selected==="0"? <Introduction title={"Privacy Policy"} hasRead={page1} setRead={setPage1} setCount={setHasRead} count={read}/>:
          selected==="1"? <Content title={"What information do we collect?"} content={privacyParas.information} hasRead={page2} setRead={setPage2} setCount={setHasRead} count={read}/>:
          selected==="2"? <Content title={"How we use the information we collect"} content={privacyParas.use} hasRead={page3} setRead={setPage3} setCount={setHasRead} count={read}/>:
          selected==="3"? <Content title={"Managing your preferences"} content={privacyParas.managing} hasRead={page4} setRead={setPage4} setCount={setHasRead} count={read}/>:
          selected==="4"? <Content title={" Requests for information; disclosure for enforcement purposes"} content={privacyParas.request} hasRead={page5} setRead={setPage5} setCount={setHasRead} count={read}/>:
          selected==="5"? <Content title={"Updating your listing information and public posts"} content={privacyParas.update} hasRead={page6} setRead={setPage6} setCount={setHasRead} count={read}/>:
          selected==="6"? <Content title={"Security measures"} content={privacyParas.security} hasRead={page7} setRead={setPage7} setCount={setHasRead} count={read}/>:
          selected==="7"? <Content title={"Third-party websites and practices"} content={privacyParas.party} hasRead={page8} setRead={setPage8} setCount={setHasRead} count={read}/>:
          selected==="8"? <Content title={"Transfers of information"} content={privacyParas.transfer} hasRead={page9} setRead={setPage9} setCount={setHasRead} count={read}/>:
          selected==="9"? <Content title={"Children"} content={privacyParas.Children} hasRead={page10} setRead={setPage10} setCount={setHasRead} count={read}/>:
          selected==="10"? <Content title={"California privacy rights"} content={privacyParas.rights} hasRead={page11} setRead={setPage11} setCount={setHasRead} count={read}/>:
          selected==="11"? <Content title={"Changes to the policy"} content={privacyParas.change} hasRead={page12} setRead={setPage12} setCount={setHasRead} count={read}/>:null
        

          }
        <div  className="terms-footer">
          < ul className="trems-footer-list">
            <li><p>
              Please read all sections.
              </p>
              <p>Read {read} of {list.length
              }</p>
              </li>
              <li>
                <div className={read===21?"terms-footer-btn red":"terms-footer-btn"}>
                  <p>I Agree to the Terms of Service</p>
                </div>
              </li>
              <li>
                <div className="terms-footer-underline">
                <p>
                  i do not Agree. What will happen?
                  </p>

                </div>
              </li>
          </ul>
        </div>
    </div>
  )
}

export default PrivacyPolicy
