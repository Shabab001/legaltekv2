import React from 'react'

const LawfirmLawyes = (props) => {
    return (
        <>
                  <p>Lawyers</p>
            
            <div className="lawfirm-view-list-sec">
           
                {props.lawyers && props.lawyers.map((lawyer,index)=>{
                       
                        
                        
                        return(
                        <div className={index % 2=== 0?"lawfirm-view-list-box even":"lawfirm-view-list-box"}>
                        <div className="lawfirm-view-list-intro">

                        <div className="lawfirm-view-list-image"></div>
                        <div>

                        <p>{lawyer.firstname}{lawyer.lastname}</p>
                        </div>
                        </div>
                        <div className="lawfirm-view-list-likes">
                            <p>posts Like 379</p>
                        </div>
                        <div className="lawfirm-view-list-index">
                            <p>{index+1}</p>
                        </div>
                        </div>
                        )




                })}
          
            </div>
        </>
    )
}

export default LawfirmLawyes
