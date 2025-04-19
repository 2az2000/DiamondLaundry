import TitleManeger from "../TitleManager/TitleManeger";
import "./userInfo.css";
import InputManager from "../InputManager/InputManager";
// import name from "../../const/name.js";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import handledFetch from "../../../utils/handledfetch";
import { getCookie } from "../../../utils/cookie";
export default function UserInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("accessToken"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const [acquaintance, setAcquaintance] = useState([]);
  const [management, setManagement] = useState([]);
  useEffect(() => {
    handledFetch("LBI/acquaintance/", requestOptions, (res) => {
      setAcquaintance(res);
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    handledFetch("management/user/", requestOptions, (res) => {
      setManagement(res);
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);
  return (
    // <div>
    //   <div className="btn-information">
    //     <p>اطلاعات شخصی</p>
    //   </div>
    //   <div className="padding-wrapper">
    //     <TitleManeger>
    //       <p>اطلاعات فردی</p>
    //     </TitleManeger>
    //     <div className="user-information">
    //       {name.map((item) =>
    //         item.shape === "input" ? (
    //           <div key={item.id}>
    //             <InputManager title={item.title}>
    //               <input
    //                 type={item.type}
    //                 placeholder={item.placeholder}
    //                 {...register(`UserInfo.${item.register}`)}
    //               />
    //             </InputManager>
    //             {errors.UserInfo && errors.UserInfo[item.register] && (
    //               <span className='erorr-handele'>{errors.UserInfo[item.register].message}</span>
    //             )}
    //           </div>
    //         ) : (
    //           <div key={item.id}>
    //             <InputManager title={item.title}>
    //               <select
    //                 style={{ cursor: "pointer" }}
    //                 name=""
    //                 id=""
    //                 {...register(`UserInfo.${item.register}`)}
    //                 className="selected-option-manager"
    //               >
    //                 <option   disabled hidden value=""  className="selected-choose">
    //                   انتخاب کنید
    //                 </option>
    //                 <option value={item.value1}>{item.value1}</option>
    //                 <option value={item.value2}>{item.value2}</option>
    //               </select>
    //             </InputManager>
    //             {errors.UserInfo && errors.UserInfo[item.register] && (
    //               <span className='erorr-handele'>{errors.UserInfo[item.register].message}</span>
    //             )}
    //           </div>
    //         )
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="btn-information">
        <p>اطلاعات شخصی</p>
      </div>
      <div className="padding-wrapper">
        <TitleManeger>
          <p>اطلاعات فردی</p>
        </TitleManeger>
        <div className="user-information">
          <div>
            <InputManager title="نام">
              <input
                type="text"
                placeholder=" نام مشتری را واردکنید"
                {...register("first_name")}
              />
            </InputManager>
            {errors && errors.first_name && (
              <span className="erorr-handele">{errors.first_name.message}</span>
            )}
          </div>

          <div>
            <InputManager title="نام خانوادگی">
              <input
                type="text"
                placeholder="نام خانوادگی مشتری را وارد کنید  "
                {...register("last_name")}
              />
            </InputManager>
            {errors.last_name && errors.last_name && (
              <span className="erorr-handele">{errors.last_name.message}</span>
            )}
          </div>
          <div>
            <InputManager title="کدملی">
              <input
                type="number"
                placeholder="کد ملی مشتری را وارد کنید"
                {...register("id_code")}
              />
            </InputManager>
            {errors.id_code && errors.id_code && (
              <span className="erorr-handele">{errors.id_code.message}</span>
            )}
          </div>

          <div>
            <InputManager title="جنسیت">
              <select
                style={{ cursor: "pointer" }}
                name=""
                id=""
                {...register("gender")}
                // className="selected-option-manager"
              >
                <option value="-1" className="selected-choose">
                  انتخاب کنید
                </option>
                <option value="زن">زن</option>
                <option value="مرد">مرد</option>
              </select>
            </InputManager>
            {/* {errors && errors.gender && (
              <span className="erorr-handele">{errors.gender.message}</span>
            )} */}
          </div>
          <div>
            <InputManager title="ویزیتورها">
              <select
                style={{ cursor: "pointer" }}
                name=""
                id=""
                {...register("visitor")}
                // className="selected-option-manager"
              >
                <option value="-1" className="selected-choose">
                  انتخاب کنید
                </option>

                {management?.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.username}
                  </option>
                ))}
              </select>
            </InputManager>
            {/* {errors && errors.visitor && (
              <span className="erorr-handele">{errors.visitor.message}</span>
            )} */}
          </div>
          <div>
            <InputManager title="نحوه آشنایی">
              <select
                style={{ cursor: "pointer" }}
                name=""
                id=""
                {...register("acquaintance_type")}
                // className="selected-option-manager"
              >
                <option value="-1" className="selected-choose">
                  انتخاب کنید
                </option>

                {acquaintance?.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </InputManager>
            {/* {errors && errors.acquaintance_type && (
              <span className="erorr-handele">{errors.acquaintance_type.message}</span>
            )} */}
          </div>

          <div>
            <InputManager title="کد آسان">
              <input
                type="number"
                placeholder="کد آسان مشتری را وارد کنید"
                {...register("easycode")}
              />
            </InputManager>
            {/* {errors && errors.easycode && (
              <span className="erorr-handele">{errors.easycode.message}</span>
            )} */}
          </div>
          <div>
            <InputManager title="کد اقتصادی">
              <input
                type="number"
                placeholder="کد اقتصادی مشتری را وارد کنید"
                {...register("economic_code")}
              />
            </InputManager>
            {errors && errors.economiccode && (
              <span className="erorr-handele">
                {errors.economiccode.message}
              </span>
            )}
          </div>
          <div>
            <InputManager title="گروه بندی">
              <select
                style={{ cursor: "pointer" }}
                name=""
                id=""
                {...register("grouping")}
                // className="selected-option-manager"
              >
                <option value="-1">انتخاب کنید</option>
                <option value="item1">item1</option>
                <option value="item2">item2</option>
              </select>
            </InputManager>
            {/* {errors && errors.grouping && (
              <span className="erorr-handele">{errors.grouping.message}</span>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
