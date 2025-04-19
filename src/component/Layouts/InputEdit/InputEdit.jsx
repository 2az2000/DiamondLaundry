import React from 'react'
import './inputEdit.css'
export default function InputEdit({children ,title}) {
  return (

    <div className='input-information1'>
        <span > {title}</span>
        {children}
    </div>

  )
}

