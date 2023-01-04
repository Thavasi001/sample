// import { useState } from 'react';
import  './Expansefilter.css'
function Expansefilter(props){
  
    
    return(
      
        <div className='h'>
          Filter By year
          
            <select  onChange={props.F} value={props.year}>
            <option>select year</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            </select>
          </div>
          

       
    )
}
export default Expansefilter;