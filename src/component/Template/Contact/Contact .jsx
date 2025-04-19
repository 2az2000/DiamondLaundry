import TitleManeger from "../TitleManager/TitleManeger";
import InputManager from "../InputManager/InputManager";
import { useFormContext } from "react-hook-form";
import "./contact.css";
export default function Contact() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // , formState:{errors}
  return (
    <div>
      <TitleManeger>
        <p>اطلاعات تماس</p>
      </TitleManeger>

      <div className="phone-wrapper edit-user-inputs-div">
        <div>
          <InputManager title="شماره موبایل">
            <input
              type="number"
              placeholder="مثال:091255884"
              {...register("phone_number")}
            />
          </InputManager>

          {errors && errors.phone_number && (
            <span className="erorr-handele">{errors.phone_number.message}</span>
          )}
        </div>
        <div>
          <InputManager title="شماره تلفن">
            <input
              type="number"
              placeholder="مثال:021-88442547"
              {...register("telephone_number")}
            />
          </InputManager>
          {errors && errors.telephone_number && (
            <span className="erorr-handele">
              {errors.telephone_number.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
