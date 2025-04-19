import "./viewcustomerinformation.css";

import ManagerTitle from "../../component/Layouts/ManagerTitle/ManagerTitle";
import UsersTable from "../../component/Template/UsersTable/UsersTable";
import { viewcustomer } from "../../const/viewcustomer";
import { useEffect, useState } from "react";
import { getCookie } from "../../utils/cookie";
import SearchIP from "../../component/Template/SearchIp/SearchIP";
import Pagenation from "../../component/Template/pagenation/Pagenation";
import CustomerSearch from "../../component/Template/CustomerSearch/CustomerSearch";
import handledFetch from "../../utils/handledfetch";
import { toast } from "react-toastify";
import PagenationBackend from "../../component/Template/PagenationBackend/PagenationBackend";
export default function AddCustomerParent({reload,setReload}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageniationData, setPageniationData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [editModal, setEditModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPageData(currentPage);
  }, [currentPage,reload]);

  const fetchPageData = (page) => {
    setIsloading(true)
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("accessToken"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    const url = page > 1 ? `customer/?page=${page}` : `customer/`;
    handledFetch(url, requestOptions, (res) => {
      
      setData(res?.results);
      setPageCount(Math.ceil(res.count / 10));
      
    })
      .catch((error) => toast.error("خطا در دریافت داده‌ها!"))
      .finally(() => setIsloading(false));
  };

  return (
    <div className="viewcustomerWrapper">
      <ManagerTitle>مشاهده اطلاعات مشتری</ManagerTitle>
      <p className="viewcustomer-text">اطلاعات تمام مشتری ها</p>

      <CustomerSearch
        setSearchResult={setSearchResult}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        pageniationData={pageniationData}
        data={data}
      />
      <div className="wrapperTablepage">
        <UsersTable
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
          editModal={editModal}
          setEditModal={setEditModal}
          fetchPageData={fetchPageData}
          currentPage={currentPage}
          isLoading={isLoading}
          setReload={setReload}
          reload={reload}
        />

        <div className="wrapperPage">
          <PagenationBackend
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageCount={pageCount}
          />
        </div>
      </div>
    </div>
  );
}