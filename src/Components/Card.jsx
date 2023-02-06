import React from 'react'

const Card = (props) => {
  return (
    <div > 
       <h2>{props.name}</h2>
       <h3>{props.val}</h3>
    </div>
  )
}

export default Card