import React from 'react'
import '../styles/sflyer.css'

const sflyer=({img, text1, text2})=> {
  return (
    <div className='sflyer'>
        <div className='img-c' style={{backgroundImage: `url(${img})`}}>
            
        </div>
        <h5>{text1}</h5>
        <p>{text2}</p>
    </div>
  )
}

export default sflyer