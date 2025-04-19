import TitleManeger from "../TitleManager/TitleManeger";
import InputManager from "../InputManager/InputManager";
import { useFormContext } from "react-hook-form";

import province from '../../../const/address'
import './address.css';
export default function Address() {
  const { watch, register ,formState:{errors}  } = useFormContext();

  const selectedProvince = watch("province");

{console.log(province)}
  let md = province.find((item) => item.name === selectedProvince);

  return (
    
    // <div>
    //   <TitleManeger>
    //     <p>اطلاعات آدرس</p>
    //   </TitleManeger>
    //   <div className="address-wrapper">
    //     <div>
    //       <InputManager title="استان">
    //         <select
     
    //           name="" id="" {...register( 'Address.province')}>
              
    //           <option value="-1">انتخاب کنید</option>
    //           <option value="تهران">تهران</option>
    //           <option value="گیلان">گیلان</option>
    //           <option value="مازندران">مازندران</option>
    //         </select>
    //       </InputManager>
    //     {errors.Address&& errors.Address.province && (<span className='erorr-handele'>{errors.Address.province.message}</span>)}
    //       <InputManager title="شهر">
    //         <select name="" id="" {...register('Address.city')}>
              
    //           <option value="-1">انتخاب کنید</option>

    //           {md?.cities.map((item) => (
    //             <option key={item} value={item}>{item}</option>
    //           ))}
    //         </select>
    //       </InputManager>
    //       {errors.Address&& errors.Address.city && (<span className='erorr-handele'>{errors.Address.city.message}</span>)}
    //       <InputManager title="کد پستی">
    //         <input
    //           {...register("Address.zipcode")}
    //           type="number"
    //           placeholder="مثال:09351514664"
            
    //         />
    //       </InputManager>
    //       {errors.Address&& errors.Address.zipcode && (<span className='erorr-handele'>{errors.Address.zipcode.message}</span>)}
    //     </div>
    //     <div>
    //     <div className="textArea-wrapper">
    //       <span>نشانی</span>
    //       <textarea name="" id="" cols="30" rows="10" {...register(`Address.address`)}     placeholder="نشانی مورد نظر را بنویسید"></textarea>
  
    //     </div>
    //     {errors.Address&& errors.Address.address && (<div className='erorr-handele'>{errors.Address.address.message}</div>)}
    //   </div>
    //   </div>
    // </div>

<>
    <div>
    <TitleManeger>
      <p>اطلاعات آدرس</p>
    </TitleManeger>
    <div className="address-wrapper">
      <div>
        <InputManager title="استان">
          <select
   
            name="" id="" {...register( 'province')}>
            
            <option value="-1">انتخاب کنید</option>

            {province.map(item=>  <option key={item.id} value={item.name}>{item.name}</option>)}
        
          </select>
        </InputManager>
      {/* {errors&& errors.province && (<span className='erorr-handele'>{errors.province.message}</span>)} */}
        <InputManager title="شهر">
          <select name="" id="" {...register('city')}    disabled={md?.cities?.length === 0}>
            
            <option value="-1">انتخاب کنید</option>

            {md?.cities.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </InputManager>
        {/* {errors&& errors.city && (<span className='erorr-handele'>{errors.city.message}</span>)} */}
        <InputManager title="کد پستی">
          <input
            {...register("postal_code")}
            type="number"
            placeholder="مثال:09351514664"
          
          />
        </InputManager>
        {errors&& errors.postal_code && (<span className='erorr-handele'>{errors.postal_code.message}</span>)}
      </div>
      <div>
      <div className="textArea-wrapper">
        <span>نشانی</span>
        <textarea name="" id="" cols="30" rows="10" {...register(`address`)}     placeholder="نشانی مورد نظر را بنویسید"></textarea>

      </div>
      {errors&& errors.address && (<div className='erorr-handele'>{errors.address.message}</div>)}
    </div>
    </div>



  </div>






</>
  );
}
