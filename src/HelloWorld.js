import React,{ Fragment, useState } from 'react';
import "./HelloWorld.css";

function HelloWorld(props) {
  
  const [isTrue,setIsTrue]=useState(false)

  const toggleTrue=()=>{
    if(isTrue){
      setIsTrue(false);
      return
    }
    setIsTrue(true)
  }


  return (
      <Fragment>
          <hr />
            <h1 className="h1-red">{props.msg}</h1>
          <hr />
          {isTrue &&
            <Fragment>
              <p>The current value of isTrue is true</p>
              <hr />
            </Fragment>

          }
          <hr />

          <hr />
          {isTrue 
          ? <p>Is true</p> 
          : <p>Is False</p>
          }
          <hr />
          <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle is true </a>
      </Fragment>
  )  
}
export default HelloWorld;