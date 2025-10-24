import React from "react";

const Error = () => {
  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
          width: "100%",
          height: "90dvh",
          flexDirection:"column"
        }}
      >
        <h1 style={{ fontSize: "60px", opacity: "0.6" }}>404</h1>
        <h4 style={{ fontSize: "30px", opacity: "0.6" }}>Page not found</h4>
      </div>
    </div>
  );
};

export default Error;
