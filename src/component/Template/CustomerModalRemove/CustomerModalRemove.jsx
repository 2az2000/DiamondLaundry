import  { useEffect, useRef } from "react";
// import "./modalRemove.css";
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import handledFetch from "../../../utils/handledfetch";

import { getCookie } from "../../../utils/cookie";
export default function CustomerModalRemove({
  data,
  setData,
  setRemove,
  idDelete,
  pageCount,
  setCurrentPage,
  idDelete1,
  fetchPageData,
  idcode,
  currentPage
}) {




  function removeIpfromData( ){
   

//     setData((prevState) => prevState.filter((item) =>item.id!== idDelete));
// console.log(data)
//     // setCurrentPage(pageCount);
//     setRemove(false);





      const myHeaders = new Headers();
      myHeaders.append("Authorization", getCookie("accessToken"));
  
      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
      };
  
      handledFetch(`customer/${idcode}/`, requestOptions, () => {
        toast.success("آیتم با موفقیت حذف شد!");
        fetchPageData(currentPage); 
        setRemove(false)
      }).catch(() => toast.error("خطا در حذف آیتم!"));









  }
  let menuRef = useRef();

  useEffect(() => {
    let handeler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setRemove(false);
      }
    };
    document.addEventListener("mousedown", handeler);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setRemove(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="modalRemove">
      <div className="modalRemove-container" ref={menuRef}>
        <div className="title-remove">
        <p>حذف مشتری</p>
        </div>
        <div className="text-remove">
          {/* <p>آیا از حذف 192.168.1.2 :IP اطمینان دارید؟</p> */}
          <p>اطمینان دارید؟ {idDelete1} آیا از حذف</p>
        </div>
        <div className="subTitle-remove">
         

   <p>
    {`  این مشتری دسترسی داشته باشیددیگر نمی توانید به ${idDelete1}`}
   </p>
         
        </div>
        {/* <form action="" onSubmit={removeIpfromData}> */}
          <div className="btns-remove">
            <button className="remove-btn" onClick={removeIpfromData} >
              حذف
            </button>
            <button className=" " onClick={() => setRemove(false)}>
              انصراف
            </button>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
}
