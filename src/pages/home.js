import React from 'react'
import Hand from '../images/hand.PNG'
import Me from '../images/me.PNG'
import Sass from '../images/sass.PNG'
import Reactpg from '../images/react.PNG'
import Redux from '../images/redux.PNG'
import '../styles/home.css'
import Flyer from '../component/flyer'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import socials from '../component/socials'
import {Link} from 'react-scroll'



 

function Home() {
    const transition = {duration: 2, type: 'spring'}

  return (
    <div className='home' id='Home'>
        <div className='first-home'>
            <motion.div className='hello'
            initial={{top: '15%', opacity: 0.4}}
            whileInView={{top: '25%', opacity: 1}}
            transition={transition}>
                <img src={Hand}/>
                <div className='hay'>
                    <p>Hey, I Am</p>
                    <span>Samuel</span>

                </div>
            </motion.div>

            <Typewriter 
                onInit={(typewriter)=>{
                    typewriter.typeString('A WEB & MOBILE DEVELOPER')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('A FREELANCER')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('A DEVELOPER & FREELANCER...')
                    .start();
                }}
            />
 
            <div className='occupation'>
                <motion.div 
                initial={{y: 50, scale: 0, opacity: 0.4}}
                whileInView={{y: 10, scale: 1, opacity: 1}}
                transition={transition}
                >
                <p>With a passion for learning and creating</p>
                <Link spy={true} to='Contact' smooth={true} >
                    <button>Hire me</button>
                </Link>
                </motion.div>

                <div className='home-social'>
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

        <div className='second-home'>
            <img src={Me}/>
            <motion.div
             initial={{y: 50, scale: 0, opacity: 0.4}}
             whileInView={{y: 10, scale: 1, opacity: 1}}
             transition={transition}></motion.div>
            <motion.div
             initial={{y: 50, scale: 0, opacity: 0.4}}
             whileInView={{y: 10, scale: 1, opacity: 1}}
             transition={transition}></motion.div>
            <motion.div
            initial={{left: '-20%', opacity: 0.4}}
            whileInView={{left: '-14%', opacity: 1}}
            transition={transition}
            >
                <Flyer img={Redux} text1='Web' text2='Developer'/>
            </motion.div>
            <motion.div
            initial={{left: '20%', opacity: 0.4}}
            whileInView={{left: '8%', opacity: 1}}
            transition={transition}
            >
                <Flyer img={Reactpg} text1='App' text2='Developer'/>
            </motion.div>
            <motion.div 
            initial={{y: 50, scale: 0, opacity: 0.4}}
            whileInView={{y: 10, scale: 1, opacity: 1}}
            transition={transition}
            className='sass-img'><img src={Sass}/></motion.div>

            <div className='blur1'></div>
            <div className='blur1' style={{background: 'gray', top: '400px', right: '-15px'}}></div>

        
        </div>
    </div>
  )
}

export default Home