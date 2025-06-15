import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MainImage from '../../components/MainImage/MainImage'
import OurServices from '../../components/OurServices/OurServices'
import Title from '../../components/Title/Title'
import About from '../../components/About/About'
import Technologies from '../../components/Technologies/Technologies'
import Portfolio from '../../components/Portfolio/Portfolio'
import GetInTouch from '../../components/GetInTouch/GetInTouch'

import './Home.css'

const Home = () => {
  return (    
        <div>
          <Navbar />      
          <MainImage/>
          
          <div id="services" className="container">
            {/* Here Use props for passing values to the Title component */}
            <Title title='What We Offer' superTitle='Our Services' />
          <OurServices />
            </div>
         <div id="about" >          
          <About />          </div> 
          <div id="technologies" >
          <Title title='We have experts in these areas' superTitle='Technologies' />
          <Technologies />
           </div>           
           <div id="getintouch" >
          <Title title='Submit below form please!' superTitle='Get In Touch' />
          <GetInTouch />
           </div>

          <div id="ourwork" >
          <Portfolio /> 
          </div>    
         </div>     
  )
}

export default Home
