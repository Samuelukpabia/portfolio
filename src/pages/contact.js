import React, {useState, useRef} from 'react'
import '../styles/contact.css'
import Mail from '../images/message.PNG'
import Phone from '../images/phone.PNG'
import Tea from '../images/teacup.PNG'
import {motion} from 'framer-motion'
import FormMenu from '../component/form'
import Thanks from '../component/thanks'


import { FormContext } from '../Helpers/context'


function Contact() {


  const transition = {duration: 1, type: 'spring'}
  const [send, setSend] = useState('send message')
  const [formInfo, setFormInfo] = useState('form')


  return (
    <div className='contact' id='Contact'>
      <motion.div
      initial={{scale: 0, opacity: 0.4}}
      whileInView={{scale: 1, opacity: 1}}
      transition={transition}>
        <h1>Take A <span>Cup of Coffee</span></h1>
        <h1>& Chat With Me</h1>
      </motion.div>
 
      <div className='contact-content'>
        <div className='mine'>
          <div className='mine-con'>
            <motion.div
             initial={{x: -50, opacity: 0.4}}
             whileInView={{x: 0, opacity: 1}}
             transition={transition}>
              <img src={Mail}/>
              <p>samuelukpabia@yahoo.com</p>
            </motion.div>

            <motion.div
             initial={{x: 50, opacity: 0.4}}
             whileInView={{x: 0, opacity: 1}}
             transition={transition}>
              <img src={Phone}/>
              <p>+234 812688 - 1963</p>
            </motion.div>
          </div>
         
          <motion.img 
           initial={{x: -50, opacity: 0.4}}
           whileInView={{x: 0, opacity: 1}}
           transition={transition}
          src={Tea} className='teacup'/>          
        </div>

      
        <div className='yours'>
          <FormContext.Provider value={{formInfo, setFormInfo}}>
          {formInfo == 'form' && <FormMenu/>}
          {formInfo == 'thanks' && <Thanks/>}
          </FormContext.Provider>
        </div>
        
       
      </div>

      <div className='footer'>
          <p>@2021 SAMUEL <br/>ALL RIGHT RESERVED</p>
      </div>
      <div className='blur3'></div>
      <div className='blur3' style={{background: 'gray', top: '400px', right: '-15px'}}></div>
      <div className='blur3' style={{background: 'pink', top: '200px', right: '-45p%'}}></div>

    </div>
  
  )
}
 
export default Contact