
// import order from "../../const/order";
// import InputManager from "../InputManager/InputManager";
import InputEdit from "../../Layouts/InputEdit/InputEdit";
// import './orderInformation.css'

export default function EditOrderInformation({form, handelChange ,        
  Freight ,
OrderVolume,
TargetProductGroup}) {

  return (
    <div className="wrapper2">
    {/* <div className="btn-information">
      <p>اطلاعات سفارش</p>
    </div> */}
    <div className="orderInformation-wrapper">

<div >
          <InputEdit title="گروه کالا">
            <select  onChange={handelChange} name="target_product_group_type" value={form.target_product_group_type}>
              <option value="-1">انتخاب کنید</option>
              {TargetProductGroup.map((item , index)=> <option key={item.name} value={item.name}  >{item.name}</option>)}
             
             
            </select>
          </InputEdit>
       
        </div>

        <div >
          <InputEdit title='باربری'>
            <select onChange={handelChange} name="freight_type" value={form.freight_type}>

          
              <option value="-1">انتخاب کنید</option>

              { Freight.map((item , index)=> <option key={item.name} value={item.name}>{item.name}</option>)}
             
           
            </select>
          </InputEdit>
        
        </div>

        <div >
          <InputEdit title="حجم سفارش">
            <select onChange={handelChange} name="order_volume_type" value={form.order_volume_type} >
              <option value="-1">انتخاب کنید</option>

              {OrderVolume.map((item, index)=> <option  key={item.name }value={item.name}>{item.name}</option>)}

            </select>
          </InputEdit>
       
        </div>
    </div>
  </div>
  );
}
