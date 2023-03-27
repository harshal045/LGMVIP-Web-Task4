import React from 'react'
import "./input.css"
export const Input = ({text,result}) => {
  return (
    <div className='Inp-wrap'>
        <div className='result'>
                <h1>{result}</h1>
        </div>
        <div className='text'>
            <h3>{text}</h3>

        </div>
    </div>
  )
}
