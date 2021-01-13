import React from "react";
import "./index.css";

export default function Pagination({ count, currentPage, setCurrentPage }) {
  const creatPaginations = () => {
    let paginationButtons = [];
    for (let i = 0; i < count; i++) {
      let customClass = currentPage === i ? "active" : "";
      paginationButtons.push(
        <a
          key={i}
          href="#"
          className={customClass}
          onClick={() => setCurrentPage(i)}
        >
          {i + 1}
        </a>
      );
    }
    return paginationButtons;
  };

  return <div className="pagination">{creatPaginations()}</div>;
}
