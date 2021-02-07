import React, {useState, useEffect} from 'react'
import '../assets/css/privacy.css'
import Footer from './IndexShared/Footer'
import Header from './IndexShared/Header'
import terms from "../assets/img/terms.webp"

function Terms(props) {
    const [activeSection, setActiveSection] = useState(1);
    const [items,setItems] = useState()
    let listItems = []
    let ids = [
      "Accepting-the-terms",
      "Changes-to-terms",
      "Using-our-product",
      "General-restrictions",
      "Content-policy",
      "Your-rights",
      "Copyright-policy",
      "Relationship-guidelines",
      "Liability-policy",
      "General-legal-terms",
    ];
    const scrollTo = (e, n, id) => {
      let mainContent = document.querySelector(".main-content");
      console.log(id);
      let item = document.getElementById(`${id}`);
      if (item) {
        let scrollToDiv = item.offsetTop - 70;
        mainContent.scrollTop = scrollToDiv;
        setActiveSection(n);
      }
    };
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  
    const scrollActive = (e) => {
      listItems.forEach((it) => {
        if (it) {
          let attr = it.getAttribute("data-item");
          if (
            it.offsetTop - 80 <= e.target.scrollTop &&
            it.offsetTop + it.clientHeight > e.target.scrollTop
          ) {
            if (activeSection !== attr) {
              setActiveSection(attr);
            }
          }
        }
      });
    };
    useEffect(() => {
      let mainContent = document.querySelector(".main-content");
      mainContent.addEventListener("scroll", scrollActive);
      ids.forEach((item) => {
        let it = document.querySelector(`#${item}`);
        listItems.push(it)
      })
    }, []);
    return (
        <>
        <div className="privacy">
          <div className="banner" style={{ background: `url(${terms})` }}>
            <div className="bannerInfo">
              <div className="hero-title">
                <h1>Terms of Service</h1>
                <p>
                  Read our terms below to learn more about your rights and responsibilities as a Xukini user.
                </p>
              </div>
            </div>
          </div>
          <div className="privacy-body">
            <div className="side-links">
              <ul>
                <li
                  onClick={(e) => scrollTo(e, 1, "Accepting-the-terms")}
                  className={activeSection == 1 ? "active" : ""}
                >
                  <a>
                    <span>1</span>Accepting the terms
                  </a>
                </li>
                <li
                  onClick={(e) => scrollTo(e, 2, "Changes-to-terms")}
                  className={activeSection == 2 ? "active" : ""}
                >
                  <a>
                    <span>2</span>Changes to terms
                  </a>
                </li>
                <li
                  onClick={(e) => scrollTo(e, 3, "Using-our-product")}
                  className={activeSection == 3 ? "active" : ""}
                >
                  <a>
                    <span>3</span>Using our product
                  </a>
                </li>
                <li
                  onClick={(e) => scrollTo(e, 4, "General-restrictions")}
                  className={activeSection == 4 ? "active" : ""}
                >
                  <a>
                    <span>4</span>General restrictions
                  </a>
                </li>
                <li
                  onClick={(e) => scrollTo(e, 5, "Content-policy")}
                  className={activeSection == 5 ? "active" : ""}
                >
                  <a>
                    <span>5</span>Content policy
                  </a>
                </li>
                <li
                  onClick={(e) => scrollTo(e, 6, "Your-rights")}
                  className={activeSection == 6 ? "active" : ""}
                >
                  <a>
                    <span>6</span>Your rights
                  </a>
                </li>
                <li
                  onClick={(e) => scrollTo(e, 7, "Copyright-policy")}
                  className={activeSection == 7 ? "active" : ""}
                >
                  <a>
                    <span>7</span>Copyright policy
                  </a>
                </li>
                <li
                  onClick={(e) => scrollTo(e, 8, "Relationship-guidelines")}
                  className={activeSection == 8 ? "active" : ""}
                >
                  <a>
                    <span>8</span>Relationship guidelines
                  </a>
                </li>
                <li
                  onClick={(e) => scrollTo(e, 9, "Liability-policy")}
                  className={activeSection == 9 ? "active" : ""}
                >
                  <a>
                    <span>9</span>Liability Policy
                  </a>
                </li>
                <li
                  onClick={(e) => scrollTo(e, 10, "General-legal-terms")}
                  className={activeSection == 10 ? "active" : ""}
                >
                  <a>
                    <span>10</span>General legal terms
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="main-content">
              <div className="title">
                <h1>Privacy Policy</h1>
                <h5>Updated April 2020</h5>
              </div>
  
              <div
                data-item={1}
                id="Accepting-the-terms"
                className="text-section"
              >
                <h3>Accepting the terms</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
                <br />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
  
              <div data-item={2} id="Changes-to-terms" className="text-section">
                <h3>Changes to terms</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
                <br />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
  
              <div data-item={3} id="Using-our-product" className="text-section">
                <h3>Using our product</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
              <div
                data-item={4}
                id="General-restrictions"
                className="text-section"
              >
                <h3>General Restrictions</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
  
              <div data-item={5} id="Content-policy" className="text-section">
                <h3>Content policy</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
  
              <div data-item={6} id="Your-rights" className="text-section">
                <h3>Your rights</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
  
              <div data-item={7} id="Copyright-policy" className="text-section">
                <h3>Copyright policy</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
  
              <div
                data-item={8}
                id="Relationship-guidelines"
                className="text-section"
              >
                <h3>Relationship guidelines</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
  
              <div data-item={9} id="Liability-policy" className="text-section">
                <h3>Liability Policy</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
  
              <div
                data-item={10}
                id="General-legal-terms"
                className="text-section"
              >
                <h3>General Legal Terms</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </>
    )
}

export default Terms
