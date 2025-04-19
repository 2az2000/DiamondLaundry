import TitleManeger from "../TitleManager/TitleManeger";
import InputManager from "../InputManager/InputManager";
import { useFormContext } from "react-hook-form";
import province from "../../../const/address";
import InputEdit from "../../Layouts/InputEdit/InputEdit";
// import './address.css';
export default function UserAdressEdit({ form, handelChange ,selectedProvince}) {
  //   const { watch, register  ,formState:{errors}} = useFormContext();

  //   const selectedProvince = watch("province");

    let md = province.find((item) => item.name === selectedProvince);
    // console.log(md)

  return (
    <div>
      <div className="address-wrapper edit-user-inputs-div">
        <div>
          <InputEdit title="استان">
            <select
              onChange={handelChange}
              name="province"
              value={form.province}
              id=""
            >
              <option value="-1">انتخاب کنید</option>
              {province.map(item=>  <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
          </InputEdit>

          <InputEdit title="شهر">
            <select
              name=""
              id=""
              onChange={handelChange}
              name="city"
              value={form.city}
              disabled={md?.cities?.length === 0}
            >
              <option value="-1">انتخاب کنید</option>

               {md?.cities.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))} 
            </select>
          </InputEdit>

          <InputEdit title="کد پستی">
            <input
              onChange={handelChange}
              name="postal_code"
              value={form.postal_code}
              type="number"
              placeholder="مثال:09351514664"
            />
          </InputEdit>
        </div>
        <div>
          <div className="textArea-wrapper">
            <span>نشانی</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"

              onChange={handelChange}
              name="address"
              value={form.address}
              placeholder="نشانی مورد نظر را بنویسید"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
