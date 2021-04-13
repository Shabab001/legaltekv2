import React,{useState,useRef,useEffect} from 'react'
import privacy from "../assets/img/privacy.webp";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "../assets/css/privacy.css";
import "./term.css"
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
import SlideMenuItems from './terms-contains/slideMenuItems';
import Welcome from './terms-content/Welcome';
import {paras} from "./terms-content/paras"
import Content from './terms-content/content';

console.log(paras)
const list = [
  { name: 'Welcome to Legaltek' },
  { name: 'Using our Services' },
  { name: 'Verifications' },
  { name: 'Informations' },
  { name: 'Attorney-Client Relationship' },
  { name: 'Interactions' },
  { name: 'Premium services for lawyers' },
  { name: 'Advertising and Communications' },
  { name: 'Copyright' },
  { name: 'Software' },
  { name: 'Disclaimers' },
  { name: 'Limitation of liability' },
  { name: 'User posted content' },
  { name: 'Indemnification' },
  { name: 'Modifications' },
  { name: 'Mandatory Arbitration' },
  { name: 'Applicable law' },
  { name: 'Termination' },
  { name: 'Entire agreement' },
  { name: 'Waiver' },
  { name: 'Questions' },

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







const Terms = ({title1,title2}) => {
  const[click,setClick]=useState(true)
  const [active, setActive]=useState("Summary");
  const [selected,setSelected]=useState("0")
  const [hidel,setHidel]=useState(false)
  const [hider,setHider]=useState(false)
  const scrollt=useRef();
  
  const ArrowLeft = Arrow({ text: <FiChevronLeft style={{fontSize:"5rem"}}/>, className: 'arrow-prev', click:click , setClick:setClick,hide:hidel});
const ArrowRight = Arrow({ text: <FiChevronRight style={{fontSize:"5rem"}}/>, className: 'arrow-next', click:click , setClick:setClick,hide:hider});
  
  const   onSelect = key => {
    
    
    setSelected(key);
    console.log(typeof(key))
  }

   let index =0;
   


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
            <p>{title1==="Privacy"?title1:"Terms of"} <span>
              {title2==="Policy"?title2:"Service"}
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
          {selected==="0"? <Welcome title={"Welcome to Legaltek"}/>:
          selected==="1"? <Content title={"Using our services"} content={paras.services}/>:
          selected==="2"? <Content title={"The Legaltek Verification"} content={paras.verifications}/>:
          selected==="3"? <Content title={"Information on the services"} content={paras.information}/>:
          selected==="4"? <Content title={" No formation of an attorney-client relationship"} content={paras.realtionship}/>:
          selected==="5"? <Content title={"Interactions between lawyers and consumers"} content={paras.interaction}/>:
          selected==="6"? <Content title={"Premium services for lawyers"} content={paras.premium}/>:
          selected==="7"? <Content title={"Legal advertising and communications"} content={paras.communications}/>:
          selected==="8"? <Content title={"Copyright"} content={paras.copyright}/>:
          selected==="9"? <Content title={"Software"} content={paras.software}/>:
          selected==="10"? <Content title={"Disclaimers and acknowledgements regarding use of legal information"} content={paras.disclaimer}/>:
          selected==="11"? <Content title={"Limitation of liability"} content={paras.liability}/>:
          selected==="12"? <Content title={"User posted content & other interactive services or areas"} content={paras.posted}/>:
          selected==="13"? <Content title={"Indemnification"} content={paras.indemnification}/>:
          selected==="14"? <Content title={"Modifications"} content={paras.Modifications}/>:
          selected==="15"? <Content title={"Mandatory Arbitration and Dispute Resolution"} content={paras.Mandatory}/>:
          selected==="16"? <Content title={"Applicable law"} content={paras.Applicable}/>:
          selected==="17"? <Content title={"Termination"} content={paras.Termination}/>:
          selected==="18"? <Content title={"Entire agreement"} content={paras.Agreement}/>:
          selected==="19"? <Content title={"Waiver, severability, and assignment"} content={paras.Waiver}/>:
          selected==="20"? <Content title={"Questions and contact information"} content={paras.Questions}/>:null

          }
        <div  className="terms-footer">
          < ul className="trems-footer-list">
            <li><p>
              Please read all sections.
              </p>
              <p>Read {index+1} of {list.length
              }</p>
              </li>
              <li>
                <div className="terms-footer-btn">
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

export default Terms

