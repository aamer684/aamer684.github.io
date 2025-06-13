import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MainImage from '../../components/MainImage/MainImage'
import OurServices from '../../components/OurServices/OurServices'
import Title from '../../components/Title/Title'
import About from '../../components/About/About'
import Technologies from '../../components/Technologies/Technologies'
import Portfolio from '../../components/Portfolio/Portfolio'

const Home = () => {
  return (    
        <div>
          <Navbar />      
          <MainImage/>
          
          <div className="container">
            {/* Here Use props for passing values to the Title component */}
            <Title title='What We Offer' subTitle='Our Services' />
          <OurServices />
            </div>
          <About />          
          <div  >
          <Title title='We have experts in these areas' subTitle='Technologies' />
          <Technologies />
           </div>
          <Portfolio />     
        
          
        </div>
  )
}

export default Home
