import React, { useState } from "react";
import "./invoice.css";
import ManagerTitle from "../../component/Layouts/ManagerTitle/ManagerTitle";
import SelectUser from "../../component/SelectUser/SelectCommodity";
import SelectData from "../../component/SelectData/SelectData";
import TableInvoice from "../../component/TableInvoice/TableInvoice";
import { useForm, FormProvider } from "react-hook-form";
export default function Invoice() {
  const [invoiceData, setInvoiceData] = useState("");


  const methods = useForm({defaultValues: {
    table_invoice: [
      {
        requested:"",
        discount:"",
        allocated:"",
        increase_price:"",

      },
    ],
  },});



console.log(invoiceData.value)


    

const onSubmit=(data)=>{
  console.log(data)


  const form={
    customer:invoiceData,
    commodities:data
  }
}
  

  return (

    <div className="invoiceWrapper" >
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
   
      <ManagerTitle>دیدن تمامی فاکتورها</ManagerTitle>
      <div className="wrapper1">
        <div className="btn-information">
          <p>ایجاد فاکتور</p>
        </div>

        <SelectData 
invoiceData={invoiceData} setInvoiceData={setInvoiceData}
          
  />

        <TableInvoice
          


        
        />
      </div>

    <button type="submit">فرستادن</button>
    </form>
    </FormProvider>
    </div>
  );
}
