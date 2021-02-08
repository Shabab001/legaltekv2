import React,{useState} from 'react'
import "./management.css"

import TabSearch from "./tabSearch"
const Management = () => {
    
    const[tab,setTab]=useState(false);
    const[activeTab, setActiveTab]=useState("Rates");

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

    
    return (
        <div className="management-main">
            <div className="management-heading">
                <div>

              <p>Management</p>
                </div>
              
            </div>
            <div className="management-tabs">
                {tabList.map((tab,index)=>{
                    return(
                        <div key={index} className={activeTab===tab?`tab-rates ${tab}`:"tab-rates"} onClick={()=>handleActveTab(tab)}>
                        <p>{tab}</p>
                    </div>
                    )
                })}
                
                
            </div>
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
