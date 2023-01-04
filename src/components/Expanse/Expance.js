import React,{useState}from "react";

function Expance(props){
    let month=props.b.toLocaleString('en-us',{month:'long'})
    let day=props.b.toLocaleString('en-us',{day:'numeric'})
    let year=props.b.getFullYear()
      
    const [a,SetName]=useState(month);
  function S(){
    SetName("update")
    console.log(a);
  }
 
    return(
        
        <div >
            
            {/* <h3>{props.b.toLocaleString('en-us',{year:'numeric',month:'long',day:'numeric',})}</h3> */}
            <h3>{month}<br></br>
             {day}<br></br>
             {year}<br></br><button id="btn" type="button" onClick={S}>click</button>
             </h3>
             
        </div>
        
       
        
    )
}
export  default Expance;