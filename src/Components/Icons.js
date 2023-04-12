import { FaTimes,FaPen,FaRegCircle } from "react-icons/fa";


import React from 'react'

const  Icons= ({usericon})=> {
 
 switch (usericon){
  
  case "circle" : return <FaRegCircle className="icons"/>
  case "cross" : return <FaTimes className="icons"/> 
  default : return <FaPen className="icons"/>
 }
}

export default Icons
