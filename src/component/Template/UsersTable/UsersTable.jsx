import React from "react";
import delet from "../../../assets/image/Delete Act.svg";
import "./usertable.css";
import FadeLoader from "react-spinners/FadeLoader";
import CustomerModalRemove from "../CustomerModalRemove/CustomerModalRemove";
import { useState } from "react";
// import { FaEdit } from "react-icons/fa";
import EditModal from "../EditModal/EditModal";
import { FiEdit } from "react-icons/fi";
export default function UsersTable({
  tableData,
  search,
  result,
  remove,
  setTableData,
  setRemove,
  setData,
  data,
  pageCount,
  setCurrentPage,
  editModal,
  setEditModal,
  fetchPageData,
  currentPage,
  isLoading,
  reload,
  setReload
}) {


  const [idDelete, setIdDelete] = useState("");
  const [idDelete1, setIdDelete1] = useState("");
  const [idcode ,setIdCode]=useState("")
  const [editData , setEditData]=useState([])

  return (
    <div className="tableData">
      <table className="table-item">
        <thead>
          <tr className="tr-table-Ip">
            <th className="th-table-Ip" colSpan={1}>
        کدملی
            </th>
            <th className="th-table-Ip" colSpan={2}>
              نام
            </th>
            <th className="th-table-Ip" colSpan={2}>
              نام خانوادگی
            </th>
         
            <th className="th-table-Ip" colSpan={2}>
             استان
            </th>
            <th className="th-table-Ip" colSpan={2}>
              شهر
            </th>
            <th className="th-table-Ip" colSpan={1}>
             ویرایش
            </th>
            <th className="th-table-Ip" colSpan={1}>
             حذف
            </th>
          </tr>
        </thead>
        <tbody>
          {search.length > 0 ? (
            result.length > 0 ? (
              result.map((item, index) => (
                <tr
                  className="tr-table-Ip"
                  key={item.id_code}
                  style={{ background: index % 2 === 0 ? "#F9FBFF" : "white" }}
                >
                  <td className="td-table-Ip" colSpan={1}>
                    {item.id_code}
                  </td>
                  <td className="td-table-Ip" colSpan={2}>
                    {item.first_name}
                  </td>
                  <td className="td-table-Ip" colSpan={2}>
                    {item.last_name}
                  </td>
                  <td className="td-table-Ip" colSpan={2}>
                    {item.province}
                  </td>
                  <td className="td-table-Ip" colSpan={2}>
                    {item.city}
                  </td>
                 
                  <td className="td-table-Ip" colSpan={1}>
                    <span className="span-edit">
                      <FiEdit />
                    </span>{" "}
                  </td>
                  <td
                    className="td-table-Ip"
                    onClick={() => {
                      setIdDelete(item.id), setIdDelete1(item.name);
                      setIdCode(item.id_code)
                    }}
                    colSpan={1}
                  >
                    <img src={delet} alt="" />
                  </td>
                </tr>
              ))
            ) : (
              <p>not found</p>
            )
          ) : data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={item.id_code}
                style={{ background: index % 2 === 0 ? "#F9FBFF" : "white" }}
              >
                <td className="td-table-Ip" colSpan={1}>
                  {item.id_code}
                </td>
                <td className="td-table-Ip" colSpan={2}>
                  {item.first_name}
                </td>
                <td className="td-table-Ip" colSpan={2}>
                  {item.last_name}
                </td>
                
                <td className="td-table-Ip" colSpan={2}>
                  {item.province}
                </td>
                <td className="td-table-Ip" colSpan={2}>
                  {item.city}
                </td>
                <td
                  className="td-table-Ip"
                  style={{ cursor: "pointer" }}
                  colSpan={1}
                  onClick={() => {
                    setEditModal(true), setIdDelete(item.id)
                    setIdCode(item.id_code)
                  }}
                >
                  <span className="span-edit"
             >
                    <FiEdit />
                  </span>
                </td>
                <td
                  className="td-table-Ip"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                 
                    
                    setIdDelete(item.id),
                    setIdCode(item.id_code)
                  
                      setRemove(true),
                      setIdDelete1(item.name);
                  }}
                  colSpan={1}
                >
                  <img src={delet} alt="" />
                </td>
              </tr>
            ))
          ) : (
            <tr style={{ height: "100%" }}>
              <td className="td-loder" colSpan={12}>
                <div className="loader">
                  {isLoading&&<FadeLoader />}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {remove && (
        <CustomerModalRemove
          idDelete={idDelete}
          setTableData={setTableData}
          setRemove={setRemove}
          setData={setData}
          data={data}
          pageCount={pageCount}
          setCurrentPage={setCurrentPage}
          idDelete1={idDelete1}
          fetchPageData={fetchPageData}
          idcode={idcode}
          currentPage={currentPage}
        />
      )}

      {editModal && (
        <EditModal
          idDelete={idDelete}
          data={data}
          setData={setData}
          editModal={editModal}
          idcode={idcode}
          setEditModal={setEditModal}
          setEditData={setEditData}
          setReload={setReload}
          reload={reload}
        />
      )}
    </div>
  );
}





