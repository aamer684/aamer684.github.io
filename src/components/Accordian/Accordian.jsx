/*
Write some comments to explain how are you going to solve a problem.
In this case we will mention the approach that we will use to create
our accordian.

1. Single Selection accordian
2. Multiple Selection accordian
*/
import './Accordian.css'
import React, { useState } from 'react'
import data from './data'

const Accordian = () => {
    //no selection initially
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(currentId){      
      setSelected(currentId ===selected ? null:currentId);
    }    
  return (
    <div className='wrapper'> 
    <div className='accbtn'> <button>Enable Multi-Selection</button> </div> 
         
      <div className='accordian'>
        {
            data && data.length > 0 ? 
            (
                data.map((dataItem)=> (
                <div className='item' key={dataItem.id}>                 
                    <div  onClick={() => handleSingleSelection(dataItem.id)} className='accTitle' >
                        <h3 >{dataItem.technology_name}</h3>
                        <span>+</span>
                    </div>
                    {                      
                      selected===dataItem.id ?
                      <div className='content'>{dataItem.description}</div>
                        :null                        
                    }                                 
                </div>                
                ))
            )
            : 
            (<div>No Data Found</div>
        )}
      </div>
    </div>
  )
}

export default Accordian
