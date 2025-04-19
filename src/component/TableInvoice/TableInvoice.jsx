import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useFormContext, useFieldArray } from "react-hook-form";
import SelectCommodity from "../SelectUser/SelectCommodity"; 
import "./tableinvoice.css";

export default function TableInvoice() {
  const { register, formState: { errors }, control, setValue, getValues } = useFormContext(); 
  const { fields, append, remove } = useFieldArray({
    control,
    name: "table_invoice",
  });

  const AddNewRow = (event) => {
    event.preventDefault();
    append({
      commodity: "",
      requested: "",
      discount: "",
      allocated: "",
      off: "",
      total_price: "",
      value_added_tax: "",
    });
  };

  const calculateTotalPrice = (index) => {
    const values = getValues(); 
    const requested = parseFloat(values.table_invoice[index]?.requested) || 0;
    const unitPrice = parseFloat(values.table_invoice[index]?.discount) || 0;
    const discount = parseFloat(values.table_invoice[index]?.off) || 0;
    const valueAddedTax = parseFloat(values.table_invoice[index]?.value_added_tax) || 0;


    const priceBeforeDiscount = requested * unitPrice;


    const priceAfterDiscount = priceBeforeDiscount - discount;


    const totalPrice = priceAfterDiscount + valueAddedTax;

    setValue(`table_invoice[${index}].total_price`, totalPrice);
  };

  return (
    <div className="tableData" onClick={()=>console.log(fields)}>
      <table className="table-item">
        <thead>
          <tr className="tr-table-Ip">
            <th className="th-table-Ip" >کالا</th>
            <th className="th-table-Ip">تعداد</th>
            <th className="th-table-Ip">قیمت واحد</th>
            <th className="th-table-Ip">قیمت کل</th>
            <th className="th-table-Ip">ارزش افزوده</th>
            <th className="th-table-Ip">تخفیف</th>
            <th className="th-table-Ip">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((row, index) => (
            <tr key={row.id} style={{ background: index % 2 === 0 ? "#F9FBFF" : "white" }}>
              <td className="td-table-Ip">
                <SelectCommodity index={index} control={control} />
              </td>
              <td className="td-table-Ip">
                <input
                  type="number"
                  {...register(`table_invoice[${index}].requested`, { required: "This field is required" })}
                  className="input-name"
                  onBlur={() => calculateTotalPrice(index)} 
                />
                {errors?.table_invoice?.[index]?.requested && (
                  <span style={{ color: "red" }}>
                    {errors.table_invoice[index].requested?.message}
                  </span>
                )}
              </td>
              <td className="td-table-Ip" >
                <input
                  type="number"
                  {...register(`table_invoice[${index}].discount`)}
                  className="input-name"
                  onBlur={() => calculateTotalPrice(index)}
                />
              </td>
              <td className="td-table-Ip" >
                <input
                  type="number"
                  value={getValues(`table_invoice[${index}].total_price`) || 0} 
                  readOnly
                  className="input-name"
                />
              </td>
              <td className="td-table-Ip" >
                <input
                  type="number"
                  {...register(`table_invoice[${index}].value_added_tax`)}
                  className="input-name"
                  onBlur={() => calculateTotalPrice(index)} 
                />
              </td>
              <td className="td-table-Ip">
                <input
                  type="number"
                  {...register(`table_invoice[${index}].off`)}
                  className="input-name"
                  onBlur={() => calculateTotalPrice(index)} 
                />
              </td>
              <td className="td-table-Ip">
                <button type="button" onClick={() => remove(index)}>
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn-add-table-communication" onClick={AddNewRow}>
        <IoIosAddCircle /> <span>افزودن ردیف</span>
      </button>
    </div>
  );
}
// import React, { useState } from "react";
// import { IoIosAddCircle } from "react-icons/io";
// import { useFormContext, useFieldArray } from "react-hook-form";
// import SelectUser from "../SelectUser/SelectUser"; 
// import "./tableinvoice.css";

// export default function TableInvoice() {
//   const { register, formState: { errors }, control, setValue, getValues } = useFormContext(); // getValues here
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "table_invoice",
//   });

//   const AddNewRow = (event) => {
//     event.preventDefault();
//     append({
//       commodity: "",
//       requested: "",
//       discount: "",
//       allocated: "",
//       off: "",
//       total_price: "",
//       value_added_tax: "",
//       percentage_discount: "",
//     });
//   };

//   const calculateTotalPrice = (index) => {
//     const values = getValues(); 
//     const requested = parseFloat(values.table_invoice[index]?.requested) || 0;
//     const unitPrice = parseFloat(values.table_invoice[index]?.discount) || 0;
//     const discount = parseFloat(values.table_invoice[index]?.off) || 0;
//     const valueAddedTax = parseFloat(values.table_invoice[index]?.value_added_tax) || 0;
//     const percentageDiscount = parseFloat(values.table_invoice[index]?.percentage_discount) || 0;


//     const priceBeforeDiscount = requested * unitPrice;


//     const discountAmount = (priceBeforeDiscount * percentageDiscount) / 100;
//     const priceAfterDiscount = priceBeforeDiscount - discountAmount - discount;

//     const totalPrice = priceAfterDiscount + valueAddedTax;

//     setValue(`table_invoice[${index}].total_price`, totalPrice);
//   };

//   return (
//     <div className="tableData">
//       <table className="table-item">
//         <thead>
//           <tr className="tr-table-Ip">
//             <th className="th-table-Ip">کالا</th>
//             <th className="th-table-Ip">تعداد</th>
//             <th className="th-table-Ip">قیمت واحد</th>
//             <th className="th-table-Ip">قیمت کل</th>
//             <th className="th-table-Ip">ارزش افزوده</th>
//             <th className="th-table-Ip">تخفیف</th>
//             <th className="th-table-Ip">تخفیف درصدی</th> 
//             <th className="th-table-Ip">عملیات</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fields.map((row, index) => (
//             <tr key={row.id} style={{ background: index % 2 === 0 ? "#F9FBFF" : "white" }}>
//               <td className="td-table-Ip">
//                 <SelectUser index={index} control={control} />
//               </td>
//               <td className="td-table-Ip">
//                 <input
//                   type="number"
//                   {...register(`table_invoice[${index}].requested`, { required: "This field is required" })}
//                   className="input-name"
//                   onBlur={() => calculateTotalPrice(index)} 
//                 />
//                 {errors?.table_invoice?.[index]?.requested && (
//                   <span style={{ color: "red" }}>
//                     {errors.table_invoice[index].requested?.message}
//                   </span>
//                 )}
//               </td>
//               <td className="td-table-Ip">
//                 <input
//                   type="number"
//                   {...register(`table_invoice[${index}].discount`)}
//                   className="input-name"
//                   onBlur={() => calculateTotalPrice(index)} 
//                 />
//               </td>
//               <td className="td-table-Ip">
//                 <input
//                   type="number"
//                   value={getValues(`table_invoice[${index}].total_price`) || 0} 
//                   readOnly
//                   className="input-name"
//                 />
//               </td>
//               <td className="td-table-Ip">
//                 <input
//                   type="number"
//                   {...register(`table_invoice[${index}].value_added_tax`)}
//                   className="input-name"
//                   onBlur={() => calculateTotalPrice(index)} 
//                 />
//               </td>
//               <td className="td-table-Ip">
//                 <input
//                   type="number"
//                   {...register(`table_invoice[${index}].off`)}
//                   className="input-name"
//                   onBlur={() => calculateTotalPrice(index)} 
//                 />
//               </td>
//               <td className="td-table-Ip">
//                 <input
//                   type="number"
//                   {...register(`table_invoice[${index}].percentage_discount`)} 
//                   className="input-name"
//                   onBlur={() => calculateTotalPrice(index)} 
//                 />
//               </td>
//               <td className="td-table-Ip">
//                 <button type="button" onClick={() => remove(index)}>
//                   حذف
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button className="btn-add-table-communication" onClick={AddNewRow}>
//         <IoIosAddCircle /> <span>افزودن ردیف</span>
//       </button>
//     </div>
//   );
// }








































// const onSubmit = (data) => {
//   const formattedCommodities = data.table_invoice.map((item) => ({
//       commodity: item.commodity,
//       requested: item.requested,
//       allocated: item.allocated || item.requested,
//       discount: item.discount,
//       increase_price: 0, 
//   }));

//   const form = {
//       customer: invoiceData,
//       commodities: formattedCommodities,
//   }