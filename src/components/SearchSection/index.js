import React from "react";
import "./index.css";

export default function SearchSection({ setSearchTerm }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search.."
        name="search"
        onChange={(evt) => setSearchTerm(evt.target.value)}
      />
    </div>
  );
}
