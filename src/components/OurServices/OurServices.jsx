import React from 'react'
import './OurServices.css'
import service_1 from '../../assets/service-softdev.png'
import detailsIcon from '../../assets/details.png'
import service_2 from '../../assets/service-webdev.png'

import service_3 from '../../assets/service-mobiledev.png'

const OurServices = () => {
  return (
    <div>
      <div className='services'>
        <div className="service">
            {/* <h1>Custom Development</h1> */}
            <img src={service_1} alt="" /> 
            <div className="caption">
                <img src={detailsIcon} alt="" />
                <p>Custom Development</p>
            </div>           
        </div>
        <div className="service">
        {/* <h1>Web Development</h1> */}
            <img src={service_2} alt="" />
            <div className="caption">
            <img src={detailsIcon} alt="" />
                <p>Web Development</p>
            </div>     
        </div>
        <div className="service">
        {/* <h1>Mobile Development</h1> */}
            <img src={service_3} alt="" />
            <div className="caption">
            <img src={detailsIcon} alt="" />
                <p>Mobile Development</p>
            </div>     
        </div>
        </div>
    </div>
  )
}

export default OurServices
