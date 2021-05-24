import React from 'react'
import {FiPlus} from "react-icons/fi"
const LawyerAdd = () => {
    const handleModal =()=>{
        console.log("hi")
        setModal(true)
      }
    return (
        <div className="add-lawyer" onClick={handleModal}><p> 
                     Add Lawyer
                       </p>
                     <FiPlus/>
                  </div>
    )
}

export default LawyerAdd
