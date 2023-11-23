import React from "react";
import Pagination from "../Pagination/Pagination";

function PaginationComponent() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "7px",
      }}
    >
      <div
        style={{
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        Pagination
      </div>
      <Pagination />
    </div>
  );
}

export default PaginationComponent;
