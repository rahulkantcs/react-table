import React from "react";
import "./index.css";

export default function TableSection({ currentPage, tableData }) {
  const createTable = () => {
    let rowList = [];
    for (
      let i = currentPage * 10;
      i < currentPage * 10 + 10 && i < tableData.length;
      i++
    ) {
      let row = tableData[i];
      rowList.push(
        <tr key={row._id}>
          <td>{row.name}</td>
          <td>{row.type}</td>
          <td>{row.company}</td>
        </tr>
      );
    }
    return rowList;
  };

  return (
    <table className="customers">
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Type</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>{createTable()}</tbody>
    </table>
  );
}
