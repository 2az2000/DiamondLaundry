import TitleManeger from "../TitleManager/TitleManeger";
import InputManager from "../InputManager/InputManager";
import { useFormContext } from "react-hook-form";
import InputEdit from "../../Layouts/InputEdit/InputEdit";
// import './contact.css'
export default function Phone({ form, handelChange }) {
  //   const { register , formState:{errors} } = useFormContext();

  return (
    <div className="edit-user-inputs-div">
      <div className="phone-wrapper">
        <div>
          <InputEdit title="شماره موبایل">
            <input
              type="number"
              placeholder="مثال:091255884"
              onChange={handelChange}
              name="phone_number"
              value={form.phone_number}
            />
          </InputEdit>
        </div>
        <div>
          <InputEdit title="شماره تلفن">
            <input
              type="number"
              placeholder="مثال:021-88442547"
              value={form.telephone_number}
            />
          </InputEdit>
        </div>
      </div>
    </div>
  );
}
