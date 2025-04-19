import React, { useEffect, useRef } from "react";
import "./modalRemove.css";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AllModal from "../AllModal/AllModal";
export default function ModalRemove({
  data,
  setData,
  setRemove,
  idDelete,
  pageCount,
  setCurrentPage,
  idDelete1
}) {

  function removeIpfromData(event) {
    event.preventDefault();

    setData((prevState) => prevState.filter((item) => item.id !== idDelete));

    setCurrentPage(pageCount);
    setRemove(false);
  }
  // let menuRef = useRef();

  // useEffect(() => {
  //   let handeler = (event) => {
  //     if (!menuRef.current.contains(event.target)) {
  //       setRemove(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handeler);
  // }, []);

  // useEffect(() => {
  //   const close = (e) => {
  //     if (e.keyCode === 27) {
  //       setRemove(false);
  //     }
  //   };
  //   window.addEventListener("keydown", close);
  //   return () => window.removeEventListener("keydown", close);
  // }, []);

  return (

    <AllModal  setRemove={setRemove}>
        <div className="title-remove">
          <p>حذف IP</p>
        </div>
        <div className="text-remove">
          {/* <p>آیا از حذف 192.168.1.2 :IP اطمینان دارید؟</p> */}
          <p>اطمینان دارید؟ {idDelete1} آیا از حذف</p>
        </div>
        <div className="subTitle-remove">
          <p>
          {idDelete1} کاربران مرتبط با این آدرس :IP دیگر نمی توانند دسترسی
            داشته باشند.
          </p>
        </div>
        <form action="" onSubmit={removeIpfromData}>
          <div className="btns-remove">
            <button className="remove-btn" type="submit">
              حذف
            </button>
            <button className=" " onClick={() => setRemove(false)}>
              انصراف
            </button>
          </div>
        </form>
  

    </AllModal>
  );
}
