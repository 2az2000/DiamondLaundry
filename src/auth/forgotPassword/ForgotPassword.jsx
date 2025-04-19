import React, { useState } from "react";

import { Container } from "../../component/Layouts/Container/Container";
import { Title } from "../../component/Layouts/Title/Title";
import { IoMdPerson } from "react-icons/io";
import { BsKey } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../component/Layouts/Button/Button";
import { getCookie } from "../../utils/cookie";
import { Input } from "../../component/Layouts/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import './forgotpassword.css'
import handledFetch from "../../utils/handledfetch";
import * as yup from "yup";
export default function ForgotPassword ({ username, setStep2 ,setUserName}) {

  const yupValidate= yup.object().shape({
    userName: yup.string().required("نام کاربری الزامی می باشد"),})
  // -------------------for submit form----------------------->

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(yupValidate) });
  const formHandele = (data) => {
    setUserName(data?.userName)
   
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("accessToken"));
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({"username":data?.userName});
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
  handledFetch("authentication/change-password/", requestOptions ,()=>{setStep2(2);toast.success('ارسال شد OTP کد')})
      
      .then((result) => {})
      .catch((error) => console.error(error));
  
  };



  return (
    <Container>
      <Title>
        <p>فراموشی رمز عبور</p>
      </Title>
      <form className="user-form" onSubmit={handleSubmit(formHandele)}>
        <label className="useId1" htmlFor="userId">نام کاربری خود را وارد کنید</label>
        <Input type="user" Icon={<IoMdPerson />}>
          <input
          id="userId"
            {...register("userName")}
            type="text"
            placeholder="نام کاربری"
          />
        </Input>

      
      {errors?.userName && <span style={{color:"red" , fontSize:"0.7rem"}}>{errors.userName.message}</span>}
      
      
      {/* <button disabled={ isSubmitting } className='btn-submit'   type='submit' >
{isSubmitting  ?"loader" :"درخواسست"}
        </button> */}
  
      
      
        <Button  iSubmitting={isSubmitting}>درخواست رمز یکبار مصرف</Button>
      </form>
    </Container>
  );
};
