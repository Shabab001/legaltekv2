import React, {useState, useEffect, useRef} from 'react'
import japaneseFood from "../../assets/img/japanesefood.jpeg";
import Geolocate from '../MiniComponents/Geolocate';
import SearchModal from '../modals/SearchModal'
import ReactDOM from 'react-dom'

function SearchBar(props) {
  const [initialPos, setInitialPos] = useState('')
  const searchBox = useRef(null)
  const catDrop = useRef(null)
  const [searchModal,setSearchModal] = useState(false)
  const [categoryDrop, setCategoryDrop] = useState(false)
  const [chosenCat, setChosenCat] = useState("")
  const modalRoot = document.getElementById('modal-root')

  const searchbarOnScroll = (e) =>{
    let inputBoxes = document.querySelector('.inputBoxes')
    let miniLabel = document.querySelector('.miniLabel')
    if(inputBoxes && miniLabel){
      if(window.pageYOffset >= 270){
        inputBoxes.classList.add('minimizedAnimate')
        miniLabel.classList.add('fadeIn')
      }
      else if(window.pageYOffset <= 300){
        miniLabel.classList.remove('fadeIn')
        inputBoxes.classList.remove('minimizedAnimate')
        inputBoxes.classList.remove('expanded')
        document.querySelector('.indexHeader').classList.remove('expanded')
      }
    }

  }

  const closeSearch = () =>{
    setSearchModal(false)
  }

  const fixedSearchBar = () => {
    console.log('hi')
    let inputBoxes = document.querySelector('.inputBoxes')
    let indexHeader = document.querySelector('.indexHeader')
    inputBoxes.classList.add('expanded')
    indexHeader.classList.add('expanded')
  }
  const clickaway = (e) =>{
    let inputBoxes = document.querySelector('.inputBoxes')
    let miniLabel = document.querySelector('.miniLabel')
    let indexHeader = document.querySelector('.indexHeader')
    if(!(inputBoxes && inputBoxes.contains(e.target) ||  miniLabel && miniLabel.contains(e.target)) ){
      if(inputBoxes){
        inputBoxes.classList.remove('expanded')
      }
      if(indexHeader){
        indexHeader.classList.remove('expanded')
      }
    }

    if(catDrop && catDrop.current && !catDrop.current.contains(e.target)){
      setCategoryDrop(false)
    }

  }

  const miniLabelFunc = (e) =>{
    e.preventDefault()
      setSearchModal(true)
  }


  const onResize = (e) =>{
    e.preventDefault()
    let miniLabel = document.querySelector('.miniLabel')
    if(miniLabel){
      if(document.body.clientWidth>1024){
        miniLabel.removeEventListener('click',miniLabelFunc)
        miniLabel.addEventListener('click',fixedSearchBar)
        setSearchModal(false)
      }
      else{
        miniLabel.removeEventListener('click',fixedSearchBar)
        miniLabel.addEventListener('click',miniLabelFunc)
      }
    }
 
  }

  useEffect(()=>{
    // window.onscroll = searchbarOnScroll
    
    window.addEventListener('scroll', searchbarOnScroll);
    window.addEventListener('click',clickaway)
    window.addEventListener('resize',onResize)

    let miniSearchLabel = document.querySelector('.miniLabel')
    miniSearchLabel.addEventListener('click',miniLabelFunc)

    return()=>{
      window.removeEventListener('scroll', searchbarOnScroll);
      window.removeEventListener('click',clickaway)
      window.removeEventListener('resize',onResize)
    }
  },[])



  useEffect(()=>{
    if(props.location.pathname !== "/"){
      console.log('hi')
      window.removeEventListener('scroll', searchbarOnScroll)
      let inputBoxes = document.querySelector('.inputBoxes')
      let miniLabel = document.querySelector('.miniLabel')
       inputBoxes.classList.add('minimizedAnimate')
          miniLabel.classList.add('fadeIn')
    }
  },[props.location.pathname])

    useEffect(() => {
      let miniLabel = document.querySelector('.miniLabel')
        let input = document.querySelectorAll('.col-c-3')
        if(document.body.clientWidth>1024 && miniLabel){
          miniLabel.removeEventListener('click',miniLabelFunc)
          miniLabel.addEventListener('click',fixedSearchBar)
        }
        else{
          if(miniLabel){
            miniLabel.removeEventListener('click',fixedSearchBar)
            miniLabel.addEventListener('click',miniLabelFunc)
          }
        }
        input.forEach((el)=>{

          if(el.querySelector('input')){
            el.querySelector('input').addEventListener('focus',function(){
              el.classList.add('boxFocused')
              if(el.previousSibling){
                  el.previousSibling.style.display="none"
              }
              if(el.nextSibling){
                  el.nextSibling.style.display="none"
              }
          })
          el.querySelector('input').addEventListener('blur',function(){
            el.classList.remove('boxFocused')
            if(el.previousSibling){
                el.previousSibling.style.display=""
            }
            if(el.nextSibling){
                el.nextSibling.style.display=""
            }
        })
          }
         
            
        })
        
        return () => {
            
        }
    }, [])

    const categories = [
      "A la carte",
      "Catering",
      "Mealplan",
      "Hire a chef",
      "Learn a lesson"
    ]

    return (
        <div className="inputBoxContainer" ref={searchBox}>
        <div className="inputBoxes">
          <div className="col-c-3">
            <label>
              <input placeholder="Make your order" />
            </label>
          </div>
          <div className="vertical-divider"></div>
          <div className="col-c-3 locationInputBox" ref={catDrop}>
            <label htmlFor="location" onClick={()=>setCategoryDrop(!categoryDrop)}>
              Category
              <p>{chosenCat? chosenCat : "A la carte"}</p>
              {/* <input id="location" placeholder="Choose location" /> */}
              {/* <Geolocate /> */}
            </label>
            {categoryDrop && 
            <div className="categoryDrop" onBlur={()=>setCategoryDrop(false)}>
              <ul>
              {categories && categories.map((item, index)=>
              <li key={index} onClick={()=>{setChosenCat(item)
              setCategoryDrop(false)
              }}>{item}</li>
              )}
              </ul>
            </div>
          }
          </div>
          <div className="vertical-divider"></div>
          <div className="col-c-3">
            <label htmlFor="cuisine">
              Cuisine
              <input id="cuisine" placeholder="Choose cuisine" />
            </label>
          </div>
          <div className="vertical-divider"></div>
          <div className="col-c-3">
            <label>
              Filter
              <p>Additional options</p>
            </label>
          </div>
          <div className="searchBtn">
            <i className="fa fa-search"></i>
          </div>
        </div>
        <div className="miniLabel">
          <label>Start your search</label>
          <div className="searchBtn">
            <i className="fa fa-search"></i>
          </div>
        </div>


        {searchModal &&
        ReactDOM.createPortal(
         <div className="modal-overlay">
          <SearchModal
          closeSearch={closeSearch}
          /></div>, modalRoot)
        }
 
      </div>

   
    )
}

export default SearchBar
