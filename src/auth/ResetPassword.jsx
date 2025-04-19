import React ,{useEffect, useState} from 'react'
import './reseatPassword.css'
import ForgotPassword from './forgotPassword/ForgotPassword'
import Otp2 from './Otp/Otp2'

import ConfirmPassword from './confirmPassword/ConfirmPassword'
import handledFetch from '../utils/handledfetch'
export default function ResetPassword() {
    const [code , setCode]=useState("")
    const [step2 , setStep2]=useState(1)
    const [username , setUserName]=useState("")
    const [otp1 , setOtp1]=useState()
    useEffect(()=>{
      
      handledFetch('authentication/helloworld')
    },[])

  return (
    <div>
{step2===1 && <ForgotPassword  setStep2={setStep2} username={username} setUserName={setUserName} /> }

{step2===2 && <Otp2  setStep2={setStep2}  username={username} setOtp1={setOtp1} otp1={otp1} />  }
{step2===3 && <ConfirmPassword  setStep2={setStep2} username={username} otp1={otp1}  /> }
    </div>
  )
}
