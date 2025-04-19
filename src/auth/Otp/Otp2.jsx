import React, { useState, useEffect } from "react";
import { Container } from "../../component/Layouts/Container/Container";
import { Title } from "../../component/Layouts/Title/Title";
import Button from "../../component/Layouts/Button/Button";
import InputOtp from "../../component/Layouts/InputOtp/InputOtp";

import handledFetch from "../../utils/handledfetch";
import { getCookie } from "../../utils/cookie";
import { toast } from "react-toastify";
export default function Otp2({ username, setStep2, setOtp1 ,otp1 }) {
  const [data, setData] = useState("");
  const [time, setTime] = useState(60);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setLoading(false)
    }  
  }, [time]);

  const FormData = (time) => {
    const minute = Math.floor(time / 60);
    const second = time % 60;

    return `${String(minute).padStart(2, "0")}:${String(second).padStart(
      2,
      "0"
    )}`;
  };
  const clickTime = (event) => {
    if (time > 0) {
      setLoading(true);
      alert(`${time} باقی مانده`);
      return;
    }
 else{

 setLoading(true)
 setTime(120)
 otpSend()
 }
    
  };


  const otpSend=()=>{
    setOtp1(data);

    const myHeaders = new Headers();
  
    myHeaders.append("Authorization", getCookie("accessToken"));
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ username: username});

   

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    handledFetch("authentication/change-password/", requestOptions, (res) => {
  
     toast.success('مجدد ارسال شد OTP کد')
      
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  

   function submitForm(event) {
    event.preventDefault();
    setOtp1(data);

    const myHeaders = new Headers();
  
    myHeaders.append("Authorization", getCookie("accessToken"));
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ username: username, otp: data });

   

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    handledFetch("authentication/change-password/", requestOptions, (res) => {
      setStep2(3);
      toast.success("مرحله تغییر پسورد");
      
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  return (
    <Container>
      <Title class1="m-t">تایید رمز یکبار مصرف</Title>

      <form action="" onSubmit={submitForm} className="user-form user-form-otp">
        <InputOtp setData={setData} />
        <div className="time-otp">
          <p className="time-otp-min">{FormData(time)}</p>
          <button
            onClick={clickTime}
            type="button"
            className="time-otp-text"
            style={{ opacity: loading ? "0.5" : "1" }}
          >
           {loading ? "منتظر بمانید..." : "درخواست مجدد"}
          </button>
        </div>
        <Button  loading={loading} otp='otp'>تایید</Button>
      </form>
    </Container>
  );
}
// import { IoIosArrowDown } from "react-icons/io";
