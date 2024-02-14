import logo from './logo.svg';
import './App.css';
import Obejct from './Component/Obejct';
import { useCallback, useEffect,useState } from 'react';

function App() {

  // const computerchoose="blank";
   const [computerchoose, setComputerchoose] = useState("blank");
   const [computerscore, setComputerscore] = useState(0);
   const [yourscore, setyourscore] = useState(0);

  const Entersnack =()=>{
    console.log("snack");
    const snack=document.getElementById('show').innerHTML="You choose: snack"
    console.log(snack);


    if(computerchoose==="snack"){
      document.getElementById("result").innerHTML="draw"
      document.getElementById("computerchoose").innerHTML="Computer choose:snack"
    }

    if(computerchoose==="water"){
      document.getElementById("result").innerHTML="you win"
      document.getElementById("computerchoose").innerHTML="Computer choose:water"
      setyourscore(yourscore+1);
    }

    if(computerchoose==="gun"){
      document.getElementById("result").innerHTML="computer win"
      document.getElementById("computerchoose").innerHTML="Computer choose:gun"
      setComputerscore(computerscore+1)
    }

    ComputerchooseNum();

  }

  const Enterwater =()=>{
    console.log("water");
    document.getElementById('show').innerHTML="You choose: water"

    if(computerchoose==="water"){
      document.getElementById("result").innerHTML="draw"
      document.getElementById("computerchoose").innerHTML="Computer choose:water"
    }

    if(computerchoose==="snack"){
      document.getElementById("result").innerHTML="computer win"
      document.getElementById("computerchoose").innerHTML="Computer choose:snack"
      setComputerscore(computerscore+1);
    }

    if(computerchoose==="gun"){
      document.getElementById("result").innerHTML="you win"
      document.getElementById("computerchoose").innerHTML="Computer choose:gun"
      setyourscore(yourscore+1);
    }

    ComputerchooseNum();
  }

  const Entergun =()=>{
    console.log("gun");
    document.getElementById('show').innerHTML="You choose: gun"

    if(computerchoose==="gun"){
      document.getElementById("result").innerHTML="draw"
      document.getElementById("computerchoose").innerHTML="Computer choose:gun"
    }

    if(computerchoose==="water"){
      document.getElementById("result").innerHTML="computer win"
      document.getElementById("computerchoose").innerHTML="Computer choose:water"
      setComputerscore(computerscore+1);
    }

    if(computerchoose==="snack"){
      document.getElementById("result").innerHTML="you win"
      document.getElementById("computerchoose").innerHTML="Computer choose:snack"
      setyourscore(yourscore+1);
    }

    ComputerchooseNum();
  }

  useEffect(()=>{
    ComputerchooseNum();
  },[])

  const ComputerchooseNum=useCallback(()=>{
    console.log("chnage");
    const num=Math.floor(Math.random() * 3);

    if(num===0){
      setComputerchoose("snack")
    }

    if(num===1){
      
      setComputerchoose("water")
    }

    if(num===2){
      
      setComputerchoose("gun")
    }
 },Entersnack,Entergun,Enterwater)
 
  return (
    
    <div className="App">

       <div >
        <h1 id='name'>Snack Water Gun</h1>
       </div>

       <div className='game-btn'>
       
        <button onClick={Entersnack}> 
         <Obejct name="snack" url="https://w0.peakpx.com/wallpaper/726/983/HD-wallpaper-snake-animal-black-green-snakes.jpg"/>
       </button>

       <button onClick={Enterwater}>
         <Obejct name="water" url="https://img.freepik.com/premium-vector/landscape-with-small-pond-park_1639-10185.jpg" />
       </button>

       <button onClick={Entergun}>
         <Obejct name="Gun" url="https://us.123rf.com/450wm/yuniar91/yuniar912109/yuniar91210900126/176418376-world-war-ii-american-revolver-rifle-vector-illustration-simple-vector-icon.jpg?ver=6"/>
       </button>

       </div>

      <div className='showresult'>

       <div className='shows'>

      <div>
        <h2 id='show' style={{paddingTop:"1vh"}}></h2>
        <h2 id='computerchoose' style={{marginTop:"3vh"}}></h2>
        <h1 id='result' style={{marginTop:"2vh"}}></h1>
      </div>

      </div>

       <div className='results'>

         <div className='in-score'>
            <div id='computer-score'>
               <h2 id='computer-score1'>Computer Score:{computerscore}</h2>
            </div>
            <div  id='your-score'>
                <h1 id='your-score1'>Your Score:{yourscore}</h1>
            </div>

          </div>

        </div> 
       </div>

       



    </div>

    
       

  );
}

export default App;
