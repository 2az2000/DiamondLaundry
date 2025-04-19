import TitleManeger from "../TitleManager/TitleManeger";
import InputManager from "../InputManager/InputManager";
// import name from "../../const/name.js";
import InputEdit from "../../Layouts/InputEdit/InputEdit";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { getCookie } from "../../../utils/cookie";
export default function UserInfoEdit({
  form,
  handelChange,
  visitors,
  Acquaintance,
}) {
  // useEffect(()=>{

  //   const myHeaders = new Headers();
  //   myHeaders.append("Authorization", getCookie());

  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow"
  //   };

  //   fetch("http://0.0.0.0:8080/LBI/acquaintance/", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.error(error));

  // },[])
  useEffect(() => {
    console.log("visitors==", visitors);
  });

  return (
    <div className="edit-user-modal edit-user-inputs-div">
      <div className="padding-wrapper">
        {/* <TitleManeger>
          <p>اطلاعات فردی</p>
        </TitleManeger> */}
        <div className="user-information">
          <div>
            <InputEdit title="نام">
              <input
                onChange={handelChange}
                name="first_name"
                value={form.first_name}
                type="text"
                placeholder=" نام مشتری را واردکنید"
              />
            </InputEdit>
          </div>

          <div>
            <InputEdit title="نام خانوادگی">
              <input
                type="text"
                placeholder="نام خانوادگی مشتری را وارد کنید  "
                name="last_name"
                value={form.last_name}
                onChange={handelChange}
              />
            </InputEdit>
          </div>
          <div>
            <InputEdit title="کدملی">
              <input
                type="number"
                placeholder="کد ملی مشتری را وارد کنید"
                name="id_code"
                value={form.id_code}
                onChange={handelChange}
              />
            </InputEdit>
          </div>

          <div>
            <InputEdit title="جنسیت">
              <select
                style={{ cursor: "pointer" }}
                name=""
                id=""
                name="gender"
                onChange={handelChange}
                value={form.gender}
                // className="selected-option-manager"
              >
                <option value="-1" className="selected-choose">
                  انتخاب کنید
                </option>
                <option value="زن">زن</option>
                <option value="مرد">مرد</option>
              </select>
            </InputEdit>
          </div>
          <div>
            <InputEdit title="ویزیتورها">
              <select
                onClick={()=>console.log(form.visitor)}
                style={{ cursor: "pointer" }}
                id=""
                onChange={handelChange}
                value={form.visitor}
                name="visitor"
              >
                <option value="-1" className="selected-choose">
                  انتخاب کنید
                </option>
                {visitors.map((item, index) => (
                  <option key={item.id} value={item.id}>
                    {item.username}
                  </option>
                ))}
              </select>
            </InputEdit>
          </div>
          <div>
            <InputEdit title="نحوه آشنایی">
              <select
                style={{ cursor: "pointer" }}
                id=""
                name="acquaintance_type"
                value={form.acquaintance_type}
                onChange={handelChange}
                // className="selected-option-manager"
              >
                <option value="-1" className="selected-choose">
                  انتخاب کنید
                </option>

                {Acquaintance.map((item, index) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </InputEdit>
          </div>

          <div>
            <InputEdit title="کد آسان">
              <input
                type="number"
                placeholder="کد آسان مشتری را وارد کنید"
                name="ASAN_code"
                value={form.ASAN_code}
                onChange={handelChange}
              />
            </InputEdit>
          </div>
          <div>
            <InputEdit title="کد اقتصادی">
              <input
                type="number"
                placeholder="کد اقتصادی مشتری را وارد کنید"
                name="economic_code"
                onChange={handelChange}
                value={form.economic_code}
              />
            </InputEdit>
          </div>
          <div>
            <InputEdit title="گروه بندی">
              <select
                style={{ cursor: "pointer" }}
                name=""
                id=""
                value={form.grouping}
                onChange={handelChange}
                name="grouping"
                // className="selected-option-manager"
              >
                <option value="-1">انتخاب کنید</option>
                <option value="item1">item1</option>
                <option value="item2">item2</option>
              </select>
            </InputEdit>
          </div>
        </div>
      </div>
    </div>
  );
}
