// import order from "../../const/order";
import { useEffect, useState } from "react";
import InputManager from "../InputManager/InputManager";
import "./orderInformation.css";
import { useFormContext } from "react-hook-form";
import { getCookie } from "../../../utils/cookie";
import handledFetch from "../../../utils/handledfetch";
import { toast } from "react-toastify";

export default function OrderInformation() {
  const {
    register,
    // formState: { errors },
  } = useFormContext();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("accessToken"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const [volume, setVolume] = useState([]);
  const [freight , setFreight]=useState([]);
  const [productGroup, setProductGroup]=useState([])


  useEffect(() => {
    handledFetch("LBI/orderVolume", requestOptions, (res) => {
      setVolume(res);
      // console.log(volume);
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    handledFetch("LBI/freight", requestOptions, (res) => {
  //  console.log(freight)
      setFreight(res);
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);



  useEffect(() => {
    handledFetch("LBI/targetProductGroup/", requestOptions, (res) => {
      setProductGroup(res)
   
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);
  return (
    // <div className="wrapper2">
    //   <div className="btn-information">
    //     <p>اطلاعات سفارش</p>
    //   </div>
    //   <div className="orderInformation-wrapper">
    //     {order.map((item) => (
    //       <div key={item.id}>
    //         <InputManager title={item.title}>
    //           <select {...register(`OrderInformation.${item.register}`)}>
    //             <option value="-1">انتخاب کنید</option>
    //             <option value={item.value1}>{item.value1}</option>
    //             <option value={item.value2}>{item.value2}</option>
    //           </select>
    //         </InputManager>
    //         {errors.OrderInformation &&
    //           errors.OrderInformation[item.register] && (
    //             <span className='erorr-handele'>{errors.OrderInformation[item.register].message}</span>
    //           )}
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="wrapper2">
      <div className="btn-information">
        <p>اطلاعات سفارش</p>
      </div>
      <div className="orderInformation-wrapper">
        {/* {order.map((item) => (
        <div key={item.id}>
          <InputManager title={item.title}>
            <select {...register(`${item.register}`)}>
              <option value="-1">انتخاب کنید</option>
              <option value={item.value1}>{item.value1}</option>
              <option value={item.value2}>{item.value2}</option>
            </select>
          </InputManager>
          {errors&&
            `errors.${item.register}` && (
              <span className='erorr-handele'>{`errors.${item.register}.message`}</span>
            )}
        </div>
      ))} */}

        <div>
          <InputManager title="گروه کالا">
            <select {...register("target_product_group_type")}>
              <option value="-1">انتخاب کنید</option>

              {productGroup?.map((item , index)=>   <option key={index}  value={item.name}>{item.name}</option>)}
           
            
            </select>
          </InputManager>
          {/* {errors && errors.target_product_group_type && (
            <span className="erorr-handele">
              {errors.target_product_group_type.message}
            </span>
          )} */}
        </div>

        <div>
          <InputManager title="باربری">
            <select {...register("freight_type")}>
              <option value="-1">انتخاب کنید</option>

              {freight?.map((item , index)=>   <option key={index} value={item.name}>{item.name}</option>)}
            
           
            </select>
          </InputManager>
          {/* {errors && errors.freight_type && (
            <span className="erorr-handele">{errors.freight_type.message}</span>
          )} */}
        </div>

        <div>
          <InputManager title="حجم سفارش">
            <select {...register("order_volume_type")}>
              <option value="-1">انتخاب کنید</option>
              {volume?.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </InputManager>
          {/* {errors && errors.order_volume_type && (
            <span className="erorr-handele">
              {errors.order_volume_type.message}
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
}
