import React from 'react'
import {FiPlus} from "react-icons/fi"
import "./lawyerAdd.css"
const LawyerAdd = () => {
    const handleModal =()=>{
        console.log("hi")
        setModal(true)
      }
    return (
        <div className="add-lawyer" onClick={handleModal}><p> 
                     Add Lawyer
                       </p>
                     <FiPlaaus/>
                  </div>
    )
}

export default LawyerAdd
