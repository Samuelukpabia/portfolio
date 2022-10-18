import React from 'react'
import '../styles/skills.css'
import skills from '../component/skillsData'
import experience from '../component/experience'
import {motion} from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {FaNetworkWired} from 'react-icons/fa'



function Skills() {
  const transition = {duration: 2, type: 'spring'}

  return (
    <div className='skills' id='Skills'>
      <div>
        <motion.h1
         initial={{y: 50, opacity: 0.4}}
         whileInView={{y: 0, opacity: 1}}
         transition={transition}
        >  Skills & <span>Experience</span></motion.h1>
      </div>

      <div className='container'>
        <div className='skills-container'>
          <div className='bbb'>
            {skills.map((skill, key)=>{
              return <motion.div 
              initial={{opacity: 0.2}}
         whileInView={{opacity: 1}}
         transition={{duration: 5, type: 'spring'}}
              key={key} className='sss'>
                <div className='img-container' 
                style={{backgroundImage: `url(${skill.img})`}}>
                </div>
                <h5>{skill.title}</h5>
              </motion.div>
            })}
          </div>
          
        </div>

        <div className='experience'>
            <VerticalTimeline lineColor=' black'>
              {experience.map((exp, key)=>{             
              return <VerticalTimelineElement className='vertical-timeline-element- education'
              date={exp.year}
              iconStyle={{background: " black", color: 'rgb(216, 6, 6)'}}
              icon={<FaNetworkWired/>} key={key}>
                <h3 className='vertical-timeline-element-title'>{exp.company}</h3>
                <p>{exp.job}</p>
              </VerticalTimelineElement>
              })}
            </VerticalTimeline>



          
            {/* {experience.map((exp, key)=>{
              return <div key={key} className='exp'>
                  <h4>{exp.year}</h4>
                  <div className='job-com'>
                    <h4>{exp.job}</h4>
                    <p>{exp.company}</p>
                  </div>
              </div>
            })}
             */}
          
        </div>
      </div>
       
     
    </div>
  )
}

export default Skills