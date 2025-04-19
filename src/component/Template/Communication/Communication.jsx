import React, { useState } from "react";
import TitleManeger from "../TitleManager/TitleManeger";
import { useFormContext, useFieldArray } from "react-hook-form";
import { IoIosAddCircle } from "react-icons/io";
// import name from "../../const/name";
import './communication.css'
export default function Communication() {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({ name: "additonal_infos" });

  // const [forms, setForm] = useState([
  //   {
  //     telegram: "",
  //     phoneCommunication: "",
  //   },
  // ]);
  //   const addNewRow = (event) => {
  //     event.preventDefault();
  //     setForm([...forms, { telegram: "", phoneCommunication: "" }]);
  //   };
  //   const handleForm = (event, index) => {

  // const { value, name } = event.target;

  // setForm((prevForms) =>
  //     prevForms.map((form, i) =>
  //         i === index ? { ...form, [name]: value } : form
  //     )
  // );

  // };

  async function addNewItem(event) {
    event.preventDefault();
    const isvalid = await trigger("additonal_infos");
    if (isvalid) {
      append({ name: "", value: "" });
    }
  }

  return (
    <div>
      <TitleManeger>
        <p>سایر راه های ارتباطی</p>
      </TitleManeger>
      <div className="table-communication-wrapper">
      <table>
        <thead>
          <tr>
            <th className="th-table-communication">راه ارتباطی</th>
            <th className="th-table-communication">شناسه ارتباطی</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
             <  React.Fragment key={index}>
              <tr key={field.id}  className="tr-">
                
                <td  className="td-table-communication">
                  <input
                    type="text"
                    name="telegram"
                    {...register(`additonal_infos[${index}].name`)}
                    // value={form.telegram}
                    // onChange={(event) => handleForm(event, index)}
                    placeholder="مثال:تلگرام یا نام"
                  />

               
                </td>
              

                <td  className="td-table-communication">
                  <input
                    type="text"
                    name="phoneCommunication"
                    {...register(`additonal_infos[${index}].value`)}
                    // value={form.phoneCommunication}
                    // onChange={(event) => handleForm(event, index)}
                    placeholder="مثال:@abc یا 091686"
                  />
                
                </td>
             
                </tr>
              <tr>
               
            
              <td >
              {errors.additonal_infos &&
                    errors.additonal_infos?.[index]?.name && (
                      <span className='erorr-handele1'>
                        {errors.additonal_infos[index].name.message}
                      </span>
                    )}
                    </td>
                    <td >
                {errors.additonal_infos &&
                  errors.additonal_infos?.[index]?.value && (
                    <span className='erorr-handele1'>
                      {errors.additonal_infos[index].value.message}
                    </span>
                  )}
                  </td>

</tr>
</React.Fragment>     
          
          ))}
        </tbody>
      </table>
   
      <button  className="btn-add-table-communication" onClick={addNewItem}>
        <IoIosAddCircle />  <span>افزودن راه ارتباطی</span>
      </button>
      </div>
    </div>
  );
}
