import React, { useState, useRef, useEffect } from "react";
import "./inputOtp.css";


const InputOtp = ({ length = 4 ,setData} ) => {

 
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);
  // const [time , setTime]=useState(120);
//  useEffect(()=>{
// if(time>0){
//   const interval = setInterval(() => {
//     setTime((prevTime) => prevTime - 1);
//   }, 1000);
//   return () => clearInterval(interval)
// }else{
//   console.log("درخواست بفرست")

// }
//  },[time])

//  const FormData=(time)=>{
//  const minute = Math.floor(time/60);
//  const second=time%60

//  return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;

//  }

  const toPersianNumber = (number) => {
    return number.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
  };
  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^[0-9]{0,1}$/.test(value)) {
      const newOtp = [...otp];
      
      newOtp[index] = value;
    
      newOtp.toLocaleString("fa-IR");
      setOtp(newOtp);


const otpValue = Number(newOtp.join(""));

// setOtpData(otpValue);
// console.log(otpData)
// if (otpValue.length !== 4) return;
setData(otpValue)
// setForgot(otpValue)

      if (value && index < length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      if (otp[index] === "") {
        if (index > 0) {
          inputs.current[index - 1].focus();
        }
      }
       else {
        otp[index] === "";
      }
    }
  
  };

  useEffect(() => {
    inputs.current[0].focus();
  }, []);

  return (
    <>
      <p className="text-request">رمز یک بار مصرف پیامک شده را وارد کنید</p>
      <div className="wrapper-otp">
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={toPersianNumber(otp[index] || "")}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputs.current[index] = el)}
            className="input-otp"
          />
        ))}
      </div>
  
    </>
  );
};

export default InputOtp;
