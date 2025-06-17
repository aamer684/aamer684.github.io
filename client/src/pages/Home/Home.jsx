import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MainImage from '../../components/MainImage/MainImage'
import OurServices from '../../components/OurServices/OurServices'
//import Title from '../../components/Title/Title'
import About from '../../components/About/About'
import Technologies from '../../components/Technologies/Technologies'
//import Portfolio from '../../components/Portfolio/Portfolio'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
import Industries from '../../components/Industries/Industries'
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {
  return (    
        <div>
          <Navbar />      
          <MainImage/>
          
          <div id="services" className="container">            
          <OurServices />
            </div>         
          <div id="technologies" >         
          <Technologies />
           </div>    
           <div id="industries" >
            <Industries />
          </div>       
           <div id="getintouch" >          
          <GetInTouch />
           </div>          
          <div id="about" >          
          <About />          </div> 
          <div>
            <Footer />
          </div>      
         </div>     
  )
}

export default Home
