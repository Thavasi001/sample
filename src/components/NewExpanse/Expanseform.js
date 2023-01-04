import { useState } from 'react';
import './Expenseform.css'

function Expanseform(props){
    const[name,SetName]=useState("");
    const[amt1,SetAmt]=useState("");
    const[date1,SetDate1]=useState("");

    function sample1(e){
        SetName(e.target.value);
        
    }
    function sample2(e){
        SetAmt(e.target.value);
    }
    function sample3(e){
        SetDate1(e.target.value);
    }
    function co(e){
        e.preventDefault();
        let a={
            title: name,
            amount:amt1,
            date:new Date(date1)
            
        }
        // console.log(a);
        // console.log(amt1);
        // console.log(date1);
       

        props.add(a)
        SetName("");
        SetAmt("");
        SetDate1("");
        tk()
    }
        const[btn,setButton]=useState(false)

        function kt(){
            setButton(true)
        }
        function tk(){
            setButton(false)
        }
       
        

        
    
    return(
        
        
        <div id="expense">
            
           { btn?<form onSubmit={co}>
            <label id='title3'>Title</label>
            <label id='amt'>Amount</label><br></br>
            <input id='title1' type="text" onChange={sample1} value={name}></input>
            <input id='amt1' type="number" onChange={sample2}value={amt1}></input><br></br><br></br>
            <label className='date'>Date</label><br></br>
            <input className='date1' type="date"  min='2018-01-01' max='2022-12-31'onChange={sample3}value={date1}  ></input><br></br> 
            <button id='btn1' onClick={tk}>Cancel</button>
            <button id='btn2' type='submit' onClick={co} >Add Expense</button>
            </form>:<button onClick={kt} id='click'>click</button>}
            
        </div>
    )
    }
    export default Expanseform;
    