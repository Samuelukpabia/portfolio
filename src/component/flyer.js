import React from 'react'
import '../styles/flyer.css'

const flyer = ({img,text1,text2}) => {
  return (
    <div className='flyer' >
        <img src={img}/>  
        <p>{text1} <span>{text2}</span></p>
    </div>
  )
}

export default flyer