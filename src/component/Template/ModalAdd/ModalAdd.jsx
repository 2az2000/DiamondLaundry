import React, { useEffect, useState, useRef } from "react";
import "./modalAdd.css";


import ip from '../../../assets/image/ip.png'
import { RxCross1 } from "react-icons/rx";

import { ToastContainer, toast } from "react-toastify";
import AllModal from "../AllModal/AllModal";

export default function ModalAdd({
  setAddModal,
  setData,
  data,
  setPageCount,
  pageCount,
  setCurrentPage,
}) {
  const [addIp, setAddIp] = useState("")
  const [d, setD] = useState(false)
  const SubmitHandele = (event) => {
    event.preventDefault();

    if (addIp.trim() === "" || addIp.trim() === null || !addIp) {
      toast.error("اینپوت خالی می باشد", {
        position: "top-right",
      });
      return;
    } else {
      setData([
        ...data,
        {
          id: data.length + 1,
          aip: addIp,
          enter: "12/9/1403",
          exit: "15/9/1403",
        },
      ]);
    }

    setCurrentPage(pageCount);
    setAddModal(false);
  };

  const menuRef = useRef();
  useEffect(() => {
    const page = Math.ceil(data.length / 10);
    setPageCount(page);
  }, [pageCount, data.length]);

  useEffect(() => {
    const handeler = (event) => {
      if (
        menuRef?.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".Toastify")
      ) {

        setAddModal(false);
      }
    };

    document.addEventListener("mousedown", handeler);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setAddModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    // <div className="modalAdd">
    //   <div className="container-addModal" ref={menuRef}>
        <AllModal  className1={'container-addModa'} setRemove={setAddModal}>
        
        <div className="title-addModal">
          <span>
           
            <RxCross1 onClick={() => setAddModal(false)} />
          </span>

          <p>افزودن IP جدید</p>
        </div>

        <div className="text-addModal">
          <p>IP آدرس جدید را وارد کنید</p>
        </div>
        <form action="" onSubmit={SubmitHandele}>
          <div className="input-addModal">
            <img src={ip} alt="" />
            <input
              placeholder="مثال: 192.168.1.2"
              type="text"
              value={addIp}
              onChange={(event) => setAddIp(event.target.value)}
            />
          </div>
          <button type="submit" className="btn-addModal">
            افزودن
          </button>
        </form>
        </AllModal>
    //   </div>
    // </div>
  );
}
