import React from "react";
import Grid from "../grid-layout/Grid";

function GridComponent() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        Grid
      </div>
      <Grid />
    </div>
  );
}

export default GridComponent;
