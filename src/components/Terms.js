import React,{useState} from 'react'
import privacy from "../assets/img/privacy.webp";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "../assets/css/privacy.css";
import "./term.css"
import SlideMenuItems from './terms-contains/slideMenuItems';



const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' },
  { name: 'item10' },
  { name: 'item11' },
  { name: 'item12' },
  { name: 'item13' },
  { name: 'item11' },
  { name: 'item12' },
  { name: 'item13' }
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


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });




const Terms = ({title1,title2}) => {
  const [active, setActive]=useState("Summary");
  const [selected,setSelected]=useState("0")



const   onSelect = key => {

    setSelected(key);
  }

   let index =0;
   
  const handleClick=(item)=>{
    console.log(item)
   setActive(item)
  }

  console.log(selected)
 let menu=Menu(list,selected)
 
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
        
          <ScrollMenu
       
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect}
        />
        
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

