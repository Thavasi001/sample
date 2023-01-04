// // import logo from './logo.svg';
import './App.css';

// import S from './components/Ui/s';
// import Sri from './components/Expanse/sri';
import Expanseform from './components/NewExpanse/Expanseform';
import Expenses from './components/Expanse/Expenses';
import { useState } from 'react';


// import Expence from './expence';
// import AS from './sri.js'
// import A from './music/Bus Horn.mp3'
// import B from './a/2.jpg'




// function App() {
//   return (
//     <div className="div">
//       <h1 id='ani'>Animals </h1>
//       <p id='para'>Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. With few exceptions, 
//         animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and go through an 
//         ontogenetic stage in which their body consists of a hollow sphere of cells, the blastula, during embryonic 
//         development. Over 1.5 million living animal species have been described—of which around 1 million are insects—but
//          it has been estimated there are over 7 million animal species in total. Animals range in length from 8.5
//           micrometres (0.00033 in) to 33.6 metres (110 ft). They have complex interactions with each other and their 
//           environments, forming intricate food webs. The scientific study of animals is known as zoology.</p><hr></hr>
//       <AS></AS>
     
      
//       <img src ={B} alt='a' id='a'></img><br></br>
//       <audio src={A} controls></audio><br></br>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/bI2tz7LV5VU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 
//     </div>
//   );
// }
// export default App;

function App(){
// let a="sample";
// let date1="may 13 2021"
//     let title1="fridge"
//     let amount1="20000"

//     let date2="june 13 2021"
//     let title2="waching machine"
//     let amount2="30000"

 let array=[{
  date:new Date(),
  title:"fridge",
  amount:"20000"
},
{ date:new Date('11/06/2021'),
   title:"waching machine",
  amount:"20000"},

  { date:new Date('10/07/2021'),
    title:"fridge",
   amount:"20000"},]
    
   const[ary,SetMonth]=useState(array)
  function add(a){
    console.log(a);
    SetMonth((array)=>{
   return[...array,a]
    })

  }
  return(

    
    <div id='bg'>
      <h1 id='Expenseapp'>Expense App</h1>
      {/* <SS a={a}></SS> */}
      <Expanseform add={add}></Expanseform>
      <Expenses Ex={ary}></Expenses>
     
      
      {/* <S>
      <Sri a={array[0].date1}  title={array[0].title1} amount={array[0].amount1}></Sri>
      <Sri a={array[1].date2}  title={array[1].title2} amount={array[1].amount2}></Sri>
      <Sri a={array[2].date3}  title={array[2].title3} amount={array[2].amount3}></Sri>
      </S> */}
      
      
      
      
      
      {/* <Expence></Expence>
      <SS date1={date1} date2={date2} title1={title1} title2={title2} amount1={amount1} amount2={amount2}></SS>
      <SS date2={date2} title2={title2} amount2={amount2}></SS>
       */}
     
    </div>

    
   
  ) 
}
export default  App;



