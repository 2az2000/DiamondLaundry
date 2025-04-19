// import './pagenation.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function PagenationBackend({ currentPage, setCurrentPage, pageCount }) {
  const clickADD = () => {
    if (currentPage < pageCount) setCurrentPage(currentPage + 1);
  };

  const clickADD1 = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  function changePage(newPage) {
    setCurrentPage(newPage);
  }
  return (
    <div className="pagenation-wrapper">
      <div>
        <button
          className="bt-addorbefor"
          style={{ display: currentPage === 1 ? "none" : "flex" }}
          onClick={clickADD1}
        >
          <MdKeyboardArrowRight /> قبلی{" "}
        </button>
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
        <button
          className="bt-addorbefor"
          style={{ display: currentPage === pageCount ? "none" : "flex" }}
          onClick={clickADD}
        >
          بعدی
          <MdKeyboardArrowLeft />
        </button>
      </div>
    </div>
  );
}
