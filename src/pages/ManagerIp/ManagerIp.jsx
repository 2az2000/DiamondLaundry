import React, { useState } from "react";

import aip from '../../const/aip'
import { IoIosAddCircle } from "react-icons/io";
import "./managerip.css";
import Table from "../../component/Template/Table/Table";
import Pagenation from "../../component/Template/pagenation/Pagenation";
import ModalAdd from "../../component/Template/ModalAdd/ModalAdd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManagerTitle from '../../component/Layouts/ManagerTitle/ManagerTitle'
import SearchIP from "../../component/Template/SearchIp/SearchIP";
export default function ManagerIp() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageniationData, setPageniationData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [data, setData] = useState(aip);
  const [pageCount , setPageCount]=useState("")
 
  function addRow() {
    setAddModal(true);
  }
  return (
    <>
    <div className="managerIp" >
      <div>

        <ManagerTitle>مدیریت    <span>IP</span>     ها</ManagerTitle>
        <p className="managerip-text">
          برای ثبت اطلاعات مشتری جدید فرم‌ زیر را تکمیل کنید
        </p>
      </div>
      <div className="managerip-wrapperSecond">
        <SearchIP
          setSearchResult={setSearchResult}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          pageniationData={pageniationData}
        />

        <button className="managerip-btnAdd" onClick={addRow}>
          افزودن   <span>IP</span>  جدید
          <IoIosAddCircle />
        </button>
      </div>
      {addModal && (
        <ModalAdd setAddModal={setAddModal} setData={setData} data={data} setCurrentPage={setCurrentPage} 
        setPageCount={setPageCount}
        pageCount={pageCount}
        />
      )}
      <div className="wrapperTablepage">
        <Table
          tableData={pageniationData}
          setTableData={setPageniationData}
          search={searchInput}
          result={searchResult}
          setData={setData}
          remove={removeModal}
          setRemove={setRemoveModal}
          data={data}
          pageCount={pageCount}
          setCurrentPage={setCurrentPage}
        />

        <div className="wrapperPage">
          <Pagenation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            data={data}
            setPageniationData={setPageniationData}
            setPageCount={setPageCount}
            pageCount={pageCount}
          />
        </div>
      </div>
    </div>



    </>
  );
}
