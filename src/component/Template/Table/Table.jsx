import React from "react";
import delet from "../../../assets/image/Delete Act.svg";
import "./table.css";
import FadeLoader from "react-spinners/FadeLoader";
import ModalRemove from "../ModalRemove/ModalRemove";
import { useState } from "react";
export default function Table({
  tableData,
  search,
  result,
  remove,
  setTableData,
  setRemove,
  setData,
  data
,
  pageCount,
  setCurrentPage
}) {
  const [idDelete, setIdDelete] = useState("");
  const [idDelete1, setIdDelete1] = useState("");

  return (
    <div className="tableData">
      <table className="table-item">
        <thead>
          <tr className="tr-table-Ip">
            <th className="th-table-Ip" colSpan={1}>#</th>
            <th className="th-table-Ip" colSpan={3}>آدرس آی پی ها</th>
            <th className="th-table-Ip" colSpan={3}>تاریخ ثبت</th>
            <th className="th-table-Ip" colSpan={3}>تاریخ آخرین ورود</th>
            <th className="th-table-Ip" colSpan={1}>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {search.length > 0 ? (
            result.length > 0 ? (
              result.map((item, index) => (
                <tr className="tr-table-Ip" key={item.id} style={{background:index%2===0?"#F9FBFF":"white"}}  >
                  <td className="td-table-Ip"  colSpan={1}>{item.id}</td>
                  <td  className="td-table-Ip" colSpan={3}>{item.aip}</td>
                  <td  className="td-table-Ip" colSpan={3}>{item.enter}</td>
                  <td  className="td-table-Ip" colSpan={3}>{item.exit}</td>
                  <td  className="td-table-Ip" onClick={() => {setIdDelete(item.id ) ,setIdDelete1(item.aip)}} colSpan={1}>
                    <img src={delet} alt="" />
                  </td>
                </tr>
              ))
            ) : (
              <p>not found</p>
            )


         

          ) : tableData.length > 0 ? (
            tableData.map((item, index) => (
              <tr key={item.id}  style={{background:index%2===0?"#F9FBFF":"white"}} >
                <td  className="td-table-Ip" colSpan={1}>{item.id}</td>
                <td  className="td-table-Ip" colSpan={3}>{item.aip}</td>
                <td  className="td-table-Ip" colSpan={3}>{item.enter}</td>
                <td  className="td-table-Ip" colSpan={3}>{item.exit}</td>
                <td  className="td-table-Ip" 
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setIdDelete(item.id), setRemove(true)   ,setIdDelete1(item.aip);
                  }}
                  colSpan={1}
                >
                  <img src={delet} alt="" />
                </td>
              </tr>
            ))
          ) : (
           <tr style={{height:"100%"}}>
           
              <td className="td-loder"  colSpan={12}>

              <div className="loader">
              
              <FadeLoader />
            </div>
              </td>
             
              </tr>
           
           
          )}
        </tbody>
      </table>
      {remove && (
        <ModalRemove
          idDelete={idDelete}
          setTableData={setTableData}
          setRemove={setRemove}
          setData={setData}
          data={data}
          pageCount={pageCount}
          setCurrentPage={setCurrentPage}

          idDelete1={idDelete1}
        />
      )}
    </div>
  );
}
