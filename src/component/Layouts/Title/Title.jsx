import React from 'react'
import './title.css'
export const Title = ({children  , class1=""}) => {
  return (
    <div className={`titleHeader ${class1}`}>{children}</div>
  )
}

