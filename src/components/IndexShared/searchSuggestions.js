import React from 'react'
import "./suggestions.css"
import {AiOutlineEnter } from 'react-icons/ai';
const SearchSuggestions = ({change}) => {
    return (
        <div className={change? "sug-main":""}>
        <div className={change? "sug-container2":"sug-container"}>
         <div className="sug-results">
             <div id="sug-cat">
                 <div className="cat-heading">
                     <p>
                         Category
                         </p>

                 </div>
                 <div className="cat-results">
                     <div className="cat-secs">
                 <p>Immigration</p>
                 <div className="cat-select">

                    <p>Select</p>
                    <AiOutlineEnter/>
                 </div>
                     </div>
                     <div className="cat-secs">
                 <p>Criminology</p>
                 <div className="cat-select">

                    <p>Select</p>
                    <AiOutlineEnter/>
                 </div>
                     </div>

                 </div>
                 <div className="cat-heading">
                     <p>
                         Users
                         </p>
                         <div className="cat-results">
                     <div className="cat-secs">
                         
                     <div className="user-sug">
                     <span>immigrations</span>
                 <p>Saimon</p>
                         </div>
                 <div className="cat-select">

                    <p>Select</p>
                    <AiOutlineEnter/>
                 </div>
                     </div>
                     <div className="cat-secs">
                         <div className="user-sug">
                     <span>Criminology</span>
                 <p>Mamun</p>
                         </div>
                 <div className="cat-select">

                    <p>Select</p>
                    <AiOutlineEnter/>
                 </div>
                     </div>

                 </div>
                 </div>
                 <div className="cat-heading">
                     <p>
                         Firm names
                         </p>
                         <div className="cat-results">
                     <div className="cat-secs">
                         
                     <div className="user-sug">
                     <span>immigrations</span>
                 <p>Saimon Immigration Center</p>
                         </div>
                 <div className="cat-select">

                    <p>Select</p>
                    <AiOutlineEnter/>
                 </div>
                     </div>
                     <div className="cat-secs">
                         <div className="user-sug">
                     <span>Criminology</span>
                 <p> Classic Criminology</p>
                         </div>
                 <div className="cat-select">

                    <p>Select</p>
                    <AiOutlineEnter/>
                 </div>
                     </div>

                 </div>
                 </div>

             </div>
         </div>
        </div>
        </div>
    )
}

export default SearchSuggestions
