import React from 'react'
import '../styles/services.css'
import SFlyer from '../component/sflyer'
import Mobile from '../images/mob.JPG'
import Front from '../images/frontend.PNG'
import Laptop from '../images/laptop.PNG'
import {motion} from 'framer-motion'
import CV from '../Helpers/cv.pdf'


function Services() {
  const transition = {duration: 3, type: 'spring'}

  return (
    <div className='service' id='Services'>
        <motion.div 
        initial={{y: 80, opacity: 0.2}}
        whileInView={{y: 10, opacity: 1}}
        transition={transition}
        className='first-service'>
            <div className='awesome'>
                <h1>My <span>Awesome</span></h1>
                <h1>Services</h1>
            </div>
            <div className='dev'>
                <p>I Know That <span>Good Development</span> </p>
                <p>Means <span>Good Business</span></p>
            </div>
            <a href={CV} download>
            <button>Download CV</button>
            </a>
            <img src={Laptop}/>
        </motion.div>

        <div className='second-service'>
            <motion.div 
            initial={{top: '15%', opacity: 0.4}}
            whileInView={{top: '25%', opacity: 1}}
            transition={transition}
            style={{top: '30%', left: '60%'}}>
              <SFlyer img={Front} text1='Frontend Developer' text2='
             i am an exceptional front-end developer with great knowledge
              and experience of UI design techniques. I leverage technologies 
              to design and maintain website for optimal performance. Dedicated
              to providing clients with innovative and user-friendly applications 
              that solve complexd societal issues.'/>
            </motion.div>
            <motion.div 
             initial={{left: '0%', opacity: 0.4}}
             whileInView={{left: '15%', opacity: 1}}
             transition={transition}
            style={{top: '20%', left: '20%'}}>
              <SFlyer img={Mobile} text1='React Native Developer' text2='
              With the growth of Andriod/IOS Development, i have leverage the
              opportuinity to be an exceptional React Native Developer to 
              develope/build effecive and user friendly mobile applications.'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Services