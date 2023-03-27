import React from 'react'
import './button.css';
const Button = ({symbol,color,handleClick}) => {
  return (
    
    <div   onClick={() =>handleClick(symbol)}
     className='btn-wrap' style={{backgroundColor:color}}>
        
        {symbol}</div>
  )
}

export default Button