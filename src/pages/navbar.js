import React, { useState } from 'react'
import '../styles/nav.css'
import Logo from '../images/logo.PNG'
import {Link} from 'react-scroll'
import socials from '../component/socials'
import {motion} from 'framer-motion'

import { FaHome, FaServicestack,  FaToolbox, FaPhone} from 'react-icons/fa'
import {TbAntennaBars5, TbAntennaBarsOff} from 'react-icons/tb'
import {BiNetworkChart} from 'react-icons/bi'


function Navbar() {
  const [openlink, setOpenlink] = useState(false);
  const toggleOn =()=> {
    setOpenlink(true)

  }
  const toggleOff =()=> {
    setOpenlink(false)
  }

  const transition = {duration: 2, type: 'spring'}

  return (
    <div className='navbar'>
        <div className='logo'>
          <img src={Logo}/>
        </div>

        <div className='l-container'>
          <div className='links'>
            <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
              <a>Home</a>
            </Link>
            <Link spy={true} to='Services' smooth={true} >
              <a>Services</a>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true} >
              <a>Portfolio</a>
            </Link>
            <Link spy={true} to='Skills' smooth={true} >
              <a>Skills</a>
            </Link>
            <Link spy={true} to='Contact' smooth={true} >
              <a>Contact</a>
            </Link>
           
          </div>


          <div className='nav-social'>
            {socials.map((social, id)=>{
              return <motion.div
              whileHover={{scale: 1.5}}
               key={id}>
                <a href={social.link}>
                {social.img}
                </a>
              </motion.div>
            })}
          </div>  

          <button className='menu-btn' onClick={toggleOn}><TbAntennaBars5/></button>
          

        </div>

        <div className='hidden-links' id={openlink ? 'open' : 'close'}>
            <div>
            <button className='close-btn' onClick={toggleOff}><TbAntennaBarsOff/></button>
            </div>

            <div>
              <div className='links'>
                <Link spy={true} to='Home' className='option' smooth={true} onClick={toggleOff} activeClass='activeClass'>
                  <FaHome/><a>Home</a>
                </Link>
                <Link spy={true} to='Services' className='option' smooth={true} onClick={toggleOff} >
                  <FaServicestack/><a>Services</a>
                </Link>
                <Link spy={true} to='Portfolio' className='option' smooth={true} onClick={toggleOff} >
                  <BiNetworkChart/><a>Portfolio</a>
                </Link>
                <Link spy={true} to='Skills' className='option' smooth={true} onClick={toggleOff} >
                  <FaToolbox/><a>Skills</a>
                </Link>
                <Link spy={true} to='Contact' className='option' smooth={true} onClick={toggleOff} >
                  <FaPhone/><a>Contact</a>
                </Link>
              </div>


              <div className='nav-social'>
                {socials.map((social, id)=>{
                  return <motion.div
                  whileHover={{scale: 1.5}}
                  key={id}>
                    <a href={social.link}>
                      {social.img}
                    </a>
                  </motion.div>
                })}
              </div> 

            </div>   
          </div>

    </div>
  )
}

export default Navbar