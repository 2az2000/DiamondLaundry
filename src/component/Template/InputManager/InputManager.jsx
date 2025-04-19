import React from 'react'
import './inputmanager.css'
export default function InputManager({children ,title}) {
  return (

    <div className='input-information'>
        <span > {title}</span>
        {children}
    </div>

  )
}
