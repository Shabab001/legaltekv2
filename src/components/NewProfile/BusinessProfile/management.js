import React,{useState} from 'react'
import "./management.css"
import {FiPlus} from "react-icons/fi"
import TabSearch from "./tabSearch"
import RatesModal from './management Mdolas/ratesModal'
import TaskModal from './management Mdolas/taskModal'
import ExplanantionModal from './management Mdolas/explanationModal'
import LawModal from './management Mdolas/lawModal'
import ReferalModal from './management Mdolas/referalModal'
const Management = () => {
    
    const[tab,setTab]=useState(false);
    const[activeTab, setActiveTab]=useState("Rates");
    const [add,setAdd]=useState("Rates")
    const [Ratemodal,setRmodal]=useState(false)
    const handleActveTab=(tab)=>{
  
        setActiveTab(tab)
    }
    const tabList=["Rates","Task Codes","Explanation Codes","Types of Law","Referal Sources"]
      
    const rateData=[{rateName:"A",Description:"For legal Purpose", Rates:"$100"},{rateName:"A",Description:"For legal Purpose", Rates:"$100"},{rateName:"A",Description:"For legal Purpose", Rates:"$100"},{rateName:"A",Description:"For legal Purpose", Rates:"$100"},{rateName:"A",Description:"For legal Purpose", Rates:"$100"}]
    const expData = [{NickName:"A100",Explanantion:"Activities"},{NickName:"A100",Explanantion:"Activities"},{NickName:"A100",Explanantion:"Activities"},{NickName:"A100",Explanantion:"Activities"},{NickName:"A100",Explanantion:"Activities"},]
    const taskData= [{Area:"Criminalogy",NickName:"C188",TaskName:"Adminstraation file re court mandatory",Category:"Billable"},{Area:"Criminalogy",NickName:"C188",TaskName:"Adminstraation file re court mandatory",Category:"Billable"},{Area:"Criminalogy",NickName:"C188",TaskName:"Adminstraation file re court mandatory",Category:"Billable"},{Area:"Criminalogy",NickName:"C188",TaskName:"Adminstraation file re court mandatory",Category:"Billable"},{Area:"Criminalogy",NickName:"C188",TaskName:"Adminstraation file re court mandatory",Category:"Billable"},] 
    const referalData = [{NickName:"acct",Name:"Accountant"},{NickName:"acct",Name:"Accountant"},{NickName:"acct",Name:"Accountant"},{NickName:"acct",Name:"Accountant"},{NickName:"acct",Name:"Accountant"},]
    const typesData=[{NickName:"bank",Type:"Bankruptcy"},{NickName:"bank",Type:"Bankruptcy"},{NickName:"bank",Type:"Bankruptcy"},{NickName:"bank",Type:"Bankruptcy"},{NickName:"bank",Type:"Bankruptcy"}]


    const rateColumns=["Rate Name","Description", "Rates"]
     const expColumns=["Nick Name", "Explanation"]
     const taskColumns=["Area", "Nick Name", "Task Name", "Category"]
      const referalColumns=["Nick Name", "Name"]
      const typesColumns=["Nick Name", "Type of Law"]
   const handleModal=()=>{
       setRmodal(true)
       console.log("here")
       console.log(add)
   }
    
    return (
        <div className="management-main">
            
            <div className="management-heading">
                <div>

              <p>Management</p>
                </div>
              
            </div>
            <div className="list-heading-grid">
            <div className="management-tabs">
                {tabList.map((tab,index)=>{
                    return(
                        <div key={index} className={activeTab===tab?`tab-rates ${tab}`:"tab-rates"} onClick={()=>{
                        setAdd(tab)
                        handleActveTab(tab)}}>
                        <p>{tab}</p>
                    </div>
                    )
                })}
                
                
            </div>
            {

            }
            <div className="management-add-btn" onClick={handleModal} ><p> 
                     Add {add}
                       </p>
                     <FiPlus/>
                  </div>
                  </div>
                  {add==="Rates"?<RatesModal open={Ratemodal} set={setRmodal} />:
                  add=="Task Codes"? <TaskModal open={Ratemodal} set={setRmodal}/>:
                  add==="Explanation Codes"?<ExplanantionModal open={Ratemodal} set={setRmodal}/>:
                 add==="Types of Law"?<LawModal open={Ratemodal} set={setRmodal}/>:
                 add==="Referal Sources"?<ReferalModal open={Ratemodal} set={setRmodal}/>:
                 null
                  }
        {activeTab==="Rates"?
        <TabSearch activeTab={activeTab} columns={rateColumns}  data={rateData} />:
        activeTab==="Task Codes"?
        <TabSearch activeTab={activeTab}  columns={taskColumns} data={taskData} />:
        activeTab==="Explanation Codes"?
        <TabSearch activeTab={activeTab} columns={expColumns} data={expData} />:
        activeTab==="Types of Law"?
   
        <TabSearch activeTab={activeTab} columns={typesColumns} data={typesData} />:
        activeTab==="Referal Sources"?
        <TabSearch activeTab={activeTab} columns={referalColumns} data={referalData} />:
        null
        
    
    }
        </div>
    )
}

export default Management
