import React from 'react'
import './Title.css'
const Title = ({title,superTitle}) => {
  return (
    <div className='title'>
      <p className='superTitle'>{superTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
