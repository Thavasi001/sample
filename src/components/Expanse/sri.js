import React from "react";
import Expance from "./Expance";
import './Sri.css'

function Sri(props) {
  // const [fridge,SetName]=useState(props.title);
  // function sample(){
  //   SetName("car")
  //   console.log(fridge);
  // }
  
  
    // let date1="may 13 2021"
    // let title1="fridge"
    // let amount1="20000"title1,setTitle

    // let date2="june 13 2021"
    // let title2="waching machine"
    // let amount2="30000"

    
    return(
    //     <div>
    //    <div id="a">
    //     <h3>{date1}</h3>
    //     <h3>{title1}</h3>
    //     <h3>{amount1}</h3>
    //     </div>
    //     <h1>{props.a}</h1>
    //     <br></br>
     
    //  <div id="b">
    //     <h3>{date2}</h3>
    //     <h3>{title2}</h3>
    //     <h3>{amount2}</h3>
    //  </div>
     
    //  </div>

//     <div>
//     <div id="a">
//      <h3>{props.date1}</h3>
//      <h3>{props.title1}</h3>
//      <h3>{props.amount1}</h3>
     
//      </div>
//      {/* <h1>{props.a}</h1> */}
//      <br></br>
     
  
//   <div id="b">
//      <h3>{props.date2}</h3>
//      <h3>{props.title2}</h3>
//      <h3>{props.amount2}</h3>
//   </div>
//   {/* <br></br> */}
//   </div>

<div >
  <div id="a">
    {/* <h3>{props.date1.toLocaleString()}</h3> */}
    <h3 id="date"><Expance b={props.date}></Expance></h3>
     <h3 id="title">{props.title}</h3>
     <h3 id="amount">{props.amount}</h3>
     {/* <button id="btn" type="button" onClick={sample}>click</button> */}
  </div>
  
  
    
 
  </div>
  


    );
}
export default Sri;