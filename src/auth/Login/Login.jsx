import React, { useState } from "react";
import "./login.css";
import { Container } from "../../component/Layouts/Container/Container";
import { Title } from "../../component/Layouts/Title/Title";
import { IoMdPerson } from "react-icons/io";
import {  toast } from "react-toastify";
import { BsKey } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../component/Layouts/Button/Button";
import useToggle from "../../component/Layouts/Toggle/custom/useToggle";
import { Input } from "../../component/Layouts/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
// import api from '../../pages/Manager/configs/api'
import schemaYupUserName from "../../schema/schemaYupUserName";
import { useNavigate } from "react-router-dom";
import handledFetch from "../../utils/handledfetch";

export const Login = ({ setStep, setUserName, setPassword, username, password }) => {
  // -------------- -----for show password----------------->
  const [isToggled0, toggle0] = useToggle(false);
  const [isLoading, setIsLoading] = useState(false);
const navigate=useNavigate()
  // ----------------------------------------------------------->
  // -------------------for submit form----------------------->
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schemaYupUserName) });
  const formHandele = (data) => {
    setUserName(data?.userName);
    setPassword(data?.password);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": data?.userName,
      "password": data?.password,
   
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    handledFetch("authentication/login/", requestOptions,()=>{setStep(2);toast.success('ارسال شد OTP کد')})
      .then((res) => {
        
      })
      .catch((error) => {
      }).finally(
        ()=>{setIsLoading(false);
       }
      )
  };


  return (
    <Container>
      <Title>
        <p>ورود به حساب</p>
      </Title>
      <form className="user-form  " onSubmit={handleSubmit(formHandele)}>
        <Input type="user" Icon={<IoMdPerson />}>
          <input
            {...register("userName")}
            type="text"
            placeholder="نام کاربری"
          />
        </Input>

        {errors.userName && (
          <p className="error-login">{errors.userName.message}</p>
        )}
        <Input
          type="password"
          Icon={<BsKey />}
          toggler={toggle0}
          value={isToggled0}
        >
          <input
            {...register("password")}
            type={isToggled0 ? "text" : "password"}
            placeholder="رمز عبور"
          />
        </Input>
        <Link to="/resetpassword" className="remberPassword">
          فراموشی رمز عبور
        </Link>
        {errors.password && (
          <p className="error-login">{errors.password.message}</p>
        )}
        <Button iSubmitting={isSubmitting}>ورود</Button>
      </form>
    </Container>
  );
};











    // fetch("http://192.168.1.113:8080/authentication/login/").then(res=>res.json())
    // .then(data=>console.log(data))
    // const loginForm = async () => {
    //   setIsLoading(true);
    //   try {

    //     const requestBody = {
    //       username: data?.userName, 
    //       password: data?.password,
    //     };
    //     const data1 = await api.post("authentication/login/",requestBody );
       
    //   console.log(data1)
    //     if (data1.status === 200) {
    //       toast.success("موفقیت", {
    //         position: "top-right",
    //       });
    //       setIsLoading(false);
    //       // setStep(2);
    //       navigate("/manager")
    //     } else {
    //       console.log("خطا در ورود");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     setIsLoading(false);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // loginForm();