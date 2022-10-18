import React, { useState } from 'react'
import '../styles/portfolio.css'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css'
import Datas from '../component/portfolioData'
import Swips from '../component/SwiperImg'
import {FaGithub,FaEye} from 'react-icons/fa'
import {motion} from 'framer-motion'



const allCategories = ['all', ...new Set(Datas.map((data)=> data.cat))];
console.log(allCategories);

function Portfolio() {
  const transition = {duration: 2, type: 'spring'}

  const [portItems, setPortItems] = useState(Datas);
  const [categories, setCategories] = useState(allCategories);


  const filterData = (category) =>{
    if(category == 'all'){
      setPortItems(Datas);
      return;
    }
    const newData = Datas.filter((data)=> data.cat === category)
    setPortItems(newData)
  }


  return (
    <div className='portfolio' id='Portfolio'>
      <div>
       <motion.h1
       initial={{x: -70, opacity: 0.2}}
       whileInView={{x: 0, opacity: 1}}
       transition={transition}
        >My Creative <span>Portfolio</span> <br/> Section</motion.h1>
        <div className='blur2'></div>
        <div className='blur2' style={{background: 'gray', top: '-12%', right: '10%'}}></div>
      </div>

      <div className='categories'>
        {categories.map((category, index, key) =>{
          return <button key={key} className='port-btn'
          onClick={()=> filterData(category)}>
            {category}
          </button>
        })}
      </div>

      <div className='container-port'>
        {portItems.map((item, key)=>{
           
         
          return  <motion.div 
          initial={{y: 50, opacity: 0.4}}
            whileInView={{y: 10, opacity: 1}}
            transition={transition}
          key={key} className='port'>
                    <div className='port-img' 
                    style={{backgroundImage: `url(${item.img})`}}>
                        <motion.div 
                        initial={{opacity: 0.4}}
                        whileHover={{opacity: 1}}
                        transition={transition}
                        className='view-code'>
                            <a href={item.git}>
                                <FaGithub/>
                            </a>

                            <a href={item.view}>
                                <FaEye/>
                            </a>
                        </motion.div> 

                    </div>

                   <div className='port-info'>
                      <div>
                        <h4>{item.title}</h4>
                        <a href={item.git} >
                          <FaGithub className='gitt' />
                        </a>
                      </div>
                     
                      <p>{item.desc}</p>
                    </div>

                  </motion.div>
                  
        })} 
 
       
      </div>

      <div className='swiper-con'>
        <motion.h2
        initial={{y: 40, opacity: 0.2}}
        whileInView={{y: 0, opacity: 1}}
        transition={transition}
        >Other Side <span>Projects</span></motion.h2>
      
        <Swiper spaceBetween={30}
                slidesPerView={5}
                grabCursor={true}
                className='portfolio-slider'>
          {Swips.map((swip)=>{
            return <SwiperSlide>
                      <img src={swip.img}/>
                  </SwiperSlide>
          })}
        </Swiper>
       
        </div>
        
      
      <div className='blur4'></div>
      <div className='blur4' style={{background: 'gray', top: '30%', left: '20%'}}></div>
      <div className='blur4' style={{background: 'pink', top: '45%', left: '40%'}}></div>
      <div className='blur4' style={{background: 'gray', top: '60%', left: '60%'}}></div>
                  

    </div>
  )
}

export default Portfolio