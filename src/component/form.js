import React, {useState, useContext, useRef} from 'react'
import {motion} from 'framer-motion'
import { FormContext } from '../Helpers/context'
import emailjs from 'emailjs-com';



function Form() {
  const transition = {duration: 2, type: 'spring'}
  const [send, setSend] = useState('send message')

  const {setFormInfo} = useContext(FormContext)

  const display = ()=>{
    setSend('sending..')
  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6pvdd7', 'template_u3ncnbv', form.current, 'EKZ7DOZfLOzO3JnbI')
      .then((result) => {
          console.log(result.text);
          setFormInfo('thanks')


      }, (error) => {
          console.log(error.text);
      }); 
      // e.target.reset()
  };

   

  return (
    <div>
         <motion.form ref={form} onSubmit={sendEmail}
          initial={{y: 50, opacity: 0.4}}
          whileInView={{y: 0, opacity: 1}}
          transition={transition}>
            <input type= 'text' name='user_name' placeholder = 'your name' className='user'/>
            <input type= 'email' name='user_email' placeholder = 'your email' className='user'/>
            <textarea name= 'message' placeholder = 'your message' className='user'/>
            <input type= 'submit' value= {send} className='button'
            onClick={display}/>
          </motion.form>
    </div>
  )
}

export default Form