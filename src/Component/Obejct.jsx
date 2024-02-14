import React from 'react'
import "../Component/compon.css";



export default function Obejct(props) {

    

  return (

    <div >
        
      <button className='snack'>
        <img style={{height:"100%",width:"100%"}} src={props.url} alt=""/>
      </button>
    </div>
  )
}
