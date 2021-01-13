import React, { useState, useEffect } from "react";
import "./index.css";
import DATA from "../../data.json";
import Pagination from "../PaginationSection";
import TableSection from "../TableSection";
import SearchSection from "../SearchSection";

export default function DataTable() {
  const [tableData, setTableData] = useState(DATA);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange();
    }, 3 * 1000);

    return () => {
      console.table("handler");
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const onSearchChange = () => {
    let searchValue = searchTerm.toUpperCase();
    let newTableData = tableData.filter(
      (el) =>
        el.name.toUpperCase().search(searchValue) > -1 ||
        el.type.toUpperCase().search(searchValue) > -1 ||
        el.company.toUpperCase().search(searchValue) > -1
    );
    newTableData = searchValue ? newTableData : DATA;
    console.table(newTableData);
    setCurrentPage(0);
    setTableData(newTableData);
  };

  return (
    <div>
      <SearchSection setSearchTerm={setSearchTerm} />
      <TableSection currentPage={currentPage} tableData={tableData} />
      <Pagination
        count={tableData.length / 10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
