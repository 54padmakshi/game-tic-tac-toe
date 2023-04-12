
import { useState } from 'react';

import Icons from './Components/Icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const ticArr = new Array(9).fill("")

function App() {
 
 const [isCross , setIsCross] = useState(true);
 const[winmsg , setWinMsg] = useState("X has won");

function playAgain(){
  ticArr.fill("");
  setIsCross(true);
  setWinMsg("");
}
function findWinner (){
  
 
  //row1 : 0,1,2
  if (ticArr[0] === ticArr[1] && ticArr[0] === ticArr[2] && ticArr[0] !== ""){
    setWinMsg(`Winner is ${ticArr[0]}`)
  }
  // row2 : 3,4,5
  else if (ticArr[3] === ticArr[4] && ticArr[3] === ticArr[5] && ticArr[3] !== ""){
    setWinMsg(`Winner is ${ticArr[3]}`)
  }
  //row3 : 6,7,8
  else if (ticArr[6] === ticArr[7] && ticArr[6] === ticArr[8] && ticArr[6] !== ""){
    setWinMsg(`Winner is ${ticArr[6]}`)
  }
  // for col1 : 0,3,6
  else if (ticArr[0] === ticArr[3] && ticArr[0] === ticArr[6] && ticArr[0] !== ""){
    setWinMsg(`Winner is ${ticArr[0]}`)
  }
  //col2 : 1,4,7
  else if (ticArr[1] === ticArr[4] && ticArr[1] === ticArr[7] && ticArr[1] !== ""){
    setWinMsg(`Winner is ${ticArr[1]}`)
  }
  //col3 : 2,5,8
  else if (ticArr[2] === ticArr[5] && ticArr[2] === ticArr[8] && ticArr[2] !== ""){
    setWinMsg(`Winner is ${ticArr[2]}`)
  }
  //diagonal 0,4,8
   else if (ticArr[0] === ticArr[4] && ticArr[0] === ticArr[8] && ticArr[0] !== ""){
    setWinMsg(`Winner is ${ticArr[0]}`)
  }
  //diagonal 2,4,6
  else if (ticArr[2] === ticArr[4] && ticArr[2] === ticArr[6] && ticArr[2] !== ""){
    setWinMsg(`Winner is ${ticArr[2]}`)
  }
  //draw
  else if(ticArr.indexOf("") === -1){
    setWinMsg(`Its a draw `);
  }

}
function play(index){
  if(winmsg){
    return toast(" Game is Over ")
  }

  if(ticArr[index] !== ""){
   return toast("i am getting clicked")
  }
  else if(ticArr[index] === ""){
       ticArr[index] = isCross === true ? "cross" : "circle";
       setIsCross(!isCross);
       findWinner();

  }
} // 
//<Icons usericon="" />  
  return (
    <div className="App">
          <h1> Tic Tac Toe -- Game   </h1> 
           <ToastContainer position='bottom-center' theme='dark' />
             { winmsg ?
              (
                <div>
                 <h2> {winmsg} </h2> 
                   <button onClick={playAgain}> Play Again</button>
                 </div>
               )

               :

               (
                 <div>
                 <h2> {isCross=== true? " Cross play now ":" Circle play now"}</h2>
                 </div>
               )
               }
   
              <div className='grid'> 
                   
                {
                  ticArr.map( (value,index)=>(
                       
                       <div onClick={()=>play(index)}>
                       <Icons usericon={value}/>
                        
                      </div> 
                 

                  ))
                }
            </div>
     
      </div>
  );
}

export default App;
