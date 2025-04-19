import React, { useState } from "react";

import { Container } from "../../component/Layouts/Container/Container";
import { Title } from "../../component/Layouts/Title/Title";
import { IoMdPerson } from "react-icons/io";
import { BsKey } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../component/Layouts/Button/Button";
import  useToggle  from "../../component/Layouts/Toggle/custom/useToggle";
import { Input } from "../../component/Layouts/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie } from "../../utils/cookie";
import handledFetch from "../../utils/handledfetch";
import schemaYupPaaword from "../../schema/schemaYupPaaword";
export default function ConfirmPassword ({username,
  otp1}){
    const navigate=useNavigate()
    
  // -------------- -----for show password----------------->
  // const { toggleValue, toggler } = useToggle(false);
  const [isToggled2, toggle2] = useToggle(false);
  const [isToggled3, toggle3] = useToggle(false);
  // ----------------------------------------------------------->
  // -------------------for submit form----------------------->
const [newpassword , setNewpassword]=useState("")
const [repeatpassword , setRepeatpassword]=useState("")
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm(  { resolver: yupResolver(schemaYupPaaword) });

  const formHandele = async(data) => {



    const myHeaders = new Headers();
  
    myHeaders.append("Authorization", getCookie("accessToken"));
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ username: username, otp:otp1 ,   new_password: data.new_password,
      repeat_new_password: data?.repeat_new_password });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };


   await handledFetch("authentication/change-password/", requestOptions, (res) => {
     
      toast.success("پسورد با موفقیت تغییر کرد!");
      navigate('/')
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Title>
        <p>انتخاب رمز عبور جدید</p>
      </Title>
      <form className="user-form " onSubmit={handleSubmit(formHandele)}>
        <Input
          type="password"
          Icon={<BsKey />}
          toggler={toggle2}
          value={isToggled2}
        >
          <input
            {...register("new_password")}
            type={isToggled2 ? "text" : "password"}
            placeholder="رمز عبور جدید"
          />
        </Input>

        {errors.new_password && (
          <p className="error-login">{errors.new_password.message}</p>
        )}
        <Input
          type="password"
          Icon={<BsKey />}
          toggler={toggle3}
          value={isToggled3}
        >
          <input
            {...register("repeat_new_password")}
            type={isToggled3 ? "text" : "password"}
            placeholder="تکرار رمز عبور جدید"
          />
        </Input>

        {errors.repeat_new_password && (
          <p style={{ color: "red" }}>{errors.repeat_new_password.message}</p>
        )}
        <Button  iSubmitting={isSubmitting}>تایید رمز عبور جدید</Button>
      </form>
    </Container>
  );
};

