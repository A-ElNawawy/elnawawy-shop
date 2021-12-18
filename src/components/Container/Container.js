import React from "react";

const style = {
  margin: "auto",
  width: "95%",
};

const Container = ({ children }) => {
  return (
    <div className='Container' style={style}>
      {children}
    </div>
  );
};

export default Container;
