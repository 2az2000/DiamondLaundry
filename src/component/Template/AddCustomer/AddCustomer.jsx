import UserInfo from "../UserInfo/UserInfo";
import { useEffect, useState } from "react";
import Address from "../Address/Address";
import Contact from "../Contact/Contact ";
import Communication from "../Communication/Communication";
import OrderInformation from "../OrderInfomation/OrderInformation";
import "./addCustomer.css";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie } from "../../../utils/cookie";
import schemai from "../../../schema/schemai";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import TitleManeger from "../TitleManager/TitleManeger";
import ManagerTitle from "../../Layouts/ManagerTitle/ManagerTitle";
import handledFetch from "../../../utils/handledfetch";
export default function AddCustomer() {
  const [form, setForm] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({
    resolver: yupResolver(schemai),

    defaultValues: {
      additonal_infos: [
        {
          name: "",
          value: "",
        },
      ],
    },
  });
  const {
    formState: { isSubmitting ,errors },
    reset,
  } = methods;


  const onSubmit = (data) => {

    const formattedData = {
      id_code: data.id_code,
      gender: data.gender,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      city: data.city,
      province: data.province,
      // phone: data.phone,
      postal_code: data.postal_code,
      address: data.address,
      freight_type: data.freight_type,
      target_product_group_type: data.target_product_group_type,
      order_volume_type: data.order_volume_type,
      economic_code: data.economic_code,
      telephone_number: data.telephone_number,
      // economiccode: data.economiccode,
      // easycode: data.easycode,
      // grouping: data.grouping,
      acquaintance_type: data.acquaintance_type,
      visitor: data.visitor,
      additonal_infos: data.additonal_infos,
    };
    
    // const addData=form.some(item=>item.id_code===formattedData.id_code)

    // form.length<1||!md?setForm((prevState) => [...prevState,  formattedData]):alert("dr")
    // if(addData){
    //  toast.error("قبلا اضافه شده",{
    //   position:"top-right"
    //  })
    //   return
    // }else{
    // setForm((prevState) => [...prevState,  formattedData])
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", getCookie("accessToken"));
    // const raw = JSON.stringify({
    //   formattedData
    // });

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };
    // handledFetch("customer/", requestOptions,()=>{toast.success('با موفقیت افزوده شد')})
    //   .then((res) => {
    //     console.log(res)

    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   }).finally(
    //     ()=>{setIsLoading(false);
    //    }
    //   )

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", getCookie("accessToken"));
    const raw = JSON.stringify(formattedData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    handledFetch("customer/", requestOptions, (res) => {
    
      toast.success("با موفقیت افزوده شد");
      reset();
    })
      .then((res) => {
        
      })
      .catch((error) => {
        
      })
      .finally(() => {
        setIsLoading(false);
      });

    // }

    // console.log({...data.UserInfo,...data.Address,...data.additonal_infos,...data.Contact,...data.OrderInformation});
  };
  useEffect(() => {
    
  }, [form]);

  const handleCancel = () => {
    if (window.confirm("آیا مطمئن هستید که می‌خواهید عملیات را لغو کنید؟")) {
      reset();
    }
  };
  return (
    <div className="orderManeger">
      <div>
        {/* <p className="orderManeger-title" >افزودن مشتری</p> */}
        <ManagerTitle>افزودن مشتری</ManagerTitle>
        <p className="orderManeger-subtitle">
          برای ثبت اطلاعات مشتری جدید فرم‌ زیر را تکمیل کنید
        </p>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className=" wrapper1">
            <UserInfo />
            <Address />
            <Contact />
            <Communication />
          </div>
          <div className=" wrapper2">
            <OrderInformation />
          </div>
          <div className="btn-order-submit">
            <button type="submit" disabled={isSubmitting}>
        
              {isSubmitting ? "در حال ارسال..." : "افزودن مشتری"}
            </button>
            <button type="button" onClick={handleCancel}>
              لغو مشتری
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
