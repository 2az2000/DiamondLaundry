import React, { useEffect } from "react";
import './pagenation.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Pagenation({
  currentPage,
  setCurrentPage,
  data,
  setPageniationData,
  setPageCount,
  pageCount
}) { 

  const clickADD=()=>{
    setCurrentPage(currentPage+1);
  }

  const clickADD1=()=>{
   
    setCurrentPage(currentPage-1);
  }
  let pageSize = 10;
  useEffect(() => {
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;

    let showData = data.slice(startIndex, endIndex);
    setPageniationData(showData);

  }, [currentPage , data]);

useEffect(()=>{
  const page = Math.ceil(data.length / pageSize);
  setPageCount(page)
},[pageCount ,data])

  function changePage(newPage) {
    setCurrentPage(newPage);
  }
  return (
    <div  className="pagenation-wrapper">
    
 
 
<div>
        <button  className="bt-addorbefor" style={{display:currentPage===1?"none":"flex"}}  onClick={clickADD1} ><MdKeyboardArrowRight/> قبلی    </button>
      </div>
      <div className="pagenation-btn">
      {[...Array(pageCount)].map((_, index) => (
        <div
          key={index}
          className="page-btn"
          style={{
            borderColor: currentPage === index + 1 ? "#161C68" : "#EAECF0",
          }}
          onClick={() => changePage(index + 1)}
        >
          {index + 1}
        </div>
      ))}


      </div>

<div>
        <button className="bt-addorbefor" style={{display:currentPage===pageCount?"none":"flex"}}  onClick={clickADD}>بعدی  
        < MdKeyboardArrowLeft/>
        </button>
      </div>

    </div>
  );
}
