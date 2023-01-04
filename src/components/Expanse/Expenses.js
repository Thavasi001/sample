import { useState } from 'react';
import S from '../Ui/s';
import Expansefilter from './Expansefilter';
import Sri from './sri';
import './Expenses.css'

function Expenses(props){
  const[year,SetYear]=useState("2022")
  function get(e){
    // e.preventDefault();
    SetYear(e.target.value)
    // console.log(e.target.value);
  }
  const filteryear=props.Ex.filter((Sri)=>{
    return Sri.date.getFullYear().toString()===year;
  });
    

     return(
     
    <S>
      <Expansefilter F={get} year={year}></Expansefilter> 
      {
        filteryear.length===0 ?
        <h2 >Expense Not Found</h2>:
   filteryear.map((map)=>(
    
    <Sri date={map.date} title={map.title} amount={map.amount}></Sri>
    ))
        }
    </S>
   
   
    



  /* <S>
     <Sri date={props.Ex[0].date}  title={props.Ex[0].title} amount={props.Ex[0].amount}></Sri>
    <Sri date={props.Ex[1].date}  title={props.Ex[1].title} amount={props.Ex[1].amount}></Sri>
     <Sri date={props.Ex[2].date}  title={props.Ex[2].title} amount={props.Ex[2].amount}></Sri> 
    </S> */
        
  
     )}
export default  Expenses;
