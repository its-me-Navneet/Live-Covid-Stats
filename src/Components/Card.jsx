import React from 'react'
import '../App.css'
const Card = (props) => {
  return (
    <div className='container'> 
       <h1>{props.name}</h1>
       <h1>{props.val}</h1>
    </div>
  )
}

export default Card