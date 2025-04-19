import React from "react";
import { Controller } from "react-hook-form";
import { useState , useEffect } from "react";
import Select from "react-select";
import { useFormContext } from "react-hook-form";
import "./selectCommodity.css";
import handledFetch from "../../utils/handledfetch";
import { getCookie } from "../../utils/cookie";


const SelectCommodity = ({ index, control ,handleOrderRowInput}) => {
  const { register, formState: { errors } } = useFormContext();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("accessToken"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    handledFetch("storage/", requestOptions, (res) => {
      let results = [];
      for (let item of res) {
        results.push({
          value: item.id,
          label: item.name +' '+ item.description,
        });
      }
      setOptions([...results]);
    })
      .then((res) => console.log(res))
      .catch((error) => {});
  }, []);
  return (
    <div>
      <Controller
        name={`table_invoice[${index}].commodity`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            placeholder="انتخاب کنید"
            isSearchable={true}
            
            // onChange={(e)=>handleOrderRowInput(e)}
          />
        )}
      />
      {errors?.table_invoice?.[index]?.commodity && (
        <span style={{ color: "red" }}>
          {errors.table_invoice[index].commodity?.message}
        </span>
      )}
    </div>
  );
};

export default SelectCommodity;
