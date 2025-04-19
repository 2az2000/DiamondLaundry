import React from 'react'
import './button.css'
import { Link , useNavigate } from 'react-router-dom'
export default function Button({children , iSubmitting ,loading, to , otp}) {
  const navigate=useNavigate()
  return (
    <div>
        <button disabled={iSubmitting} className='btn-submit' onClick={()=>navigate(to)}  type='submit' >
{iSubmitting ?"loader" :children}
        </button>
    </div>
  )
}
