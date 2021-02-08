import React,{useState} from 'react'
import privacy from "../assets/img/privacy.webp";
import "../assets/css/privacy.css";
import "./term.css"

const Terms = ({title1,title2}) => {
  const [active, setActive]=useState("Summary");
   let index =0;
  const handleClick=(item)=>{
    console.log(item)
   setActive(item)
  }
  const catList=["Summary","Introduction","Intellectual Prperty Rights","Your Content","Privay","Warrenties","Legal Discalaimer","indemnification","More"]
  if(!active!==""){
    index=catList.indexOf(active)
    console.log(index);
  }
  return (
    <div className="terms-container">
                
        <div className="terms-heading">
          <div className="terms-heading-grid">
          <div>
            <p>{title1==="Privacy"?title1:"Terms of"} <span>
              {title2==="Policy"?title2:"Service"}
              </span>
              </p>
            <p>{Date.now( )}</p>
          </div>
          </div>
          <div className="terms-cat-grid">
           {catList.map((item,index)=>{
             return(
              <div onClick={()=>handleClick(item)} className={active===item ? `terms-cat ${item}`:"terms-cat"} key={index}>
                <p>{item}</p>
                </div>
             )
           })}
          </div>
        </div>
        <div className="terms-content-header">
            <p>Restrictions</p>

            <p>You are specifically restiricted from all of the following</p>
            <ul className="terms-content-list">
              <li>publishing any Gossipmag material in any other media</li>
              <li>publishing any Gossipmag material in any other media</li>
              <li>publishing any Gossipmag material in any other media</li>
              <li>publishing any Gossipmag material in any other media</li>
              <li>publishing any Gossipmag material in any other media</li>
              <li>publishing any Gossipmag material in any other media</li>
            </ul>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content</p>
            <p>End of Restrictions</p>
        </div>
        <div className="terms-footer">
          < ul className="trems-footer-list">
            <li><p>
              Please read all sections.
              </p>
              <p>Read {index+1} of {catList.length
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

