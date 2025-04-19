import React, { useState, useEffect } from "react";

import { Container } from '../../component/Layouts/Container/Container'
import { Title } from "../../component/Layouts/Title/Title";
import Button from "../../component/Layouts/Button/Button";
import InputOtp from "../../component/Layouts/InputOtp/InputOtp";


import { useNavigate } from "react-router-dom";
import { getRole, setCookie } from "../../utils/cookie";
import "./otp1.css";
// import api from "../../pages/Manager/configs/api";
import { toast } from "react-toastify";
import handledFetch from "../../utils/handledfetch";
export default function Otp1({ password, username }) {
  
  const [data, setData] = useState([]);

  const [loading , setLoading]=useState(true)
  const navigate = useNavigate();

  const [time, setTime] = useState(120);

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
  const clickTime=(event)=>{
    if(loading) return
    setLoading(true)
    setTime(120)
    refetchOTP()
  }
  function refetchOTP(){  
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        "username": username,
        "password": password,
     
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      handledFetch("authentication/login/", requestOptions,()=>{toast.success('مجدد ارسال شد OTP کد')})
        .then((res) => {
          
        })
        .catch((error) => {
        }).finally(
          ()=>{}
        )
    
  }
  // useEffect(()=>{
  // console.log(time)
  // },[time])

  // console.log(time)
  function submitForm(event) {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: username,
      password: password,
      otp: data,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    handledFetch("authentication/login/", requestOptions, (res) => {
      setCookie(res);
      navigate("/manager");
    })

    
    //           if (status === 422) {
    //             toast.error("کد را صحیح وارد کنید");
    //           } else if (status === 400) {
    //             navigate("/auth");
    //           } else {
    //             toast.error("خطای غیرمنتظره‌ای رخ داده است");
    //           }
      .then((result) => {
       
      })
      .catch((error) =>     toast.error("ارسال درخواست با خطا مواجه شد."));
  }
  return (
    <Container>
      <Title class1="m-t">تایید رمز یکبار مصرف</Title>

      <form action="" onSubmit={submitForm} className="user-form user-form-otp">
        <InputOtp setData={setData} />

        <div className="time-otp">
        <p className="time-otp-min">{FormData(time)}</p>
        <button onClick={clickTime} type="button" className="time-otp-text" style={{opacity:loading?"0.5":"1"}}  disabled={loading}  >  {loading ? "منتظر بمانید..." : "درخواست مجدد"}</button>
      </div>
        <Button loading={loading} otp='otp'>تایید</Button>
      </form>
    </Container>
  );
}
