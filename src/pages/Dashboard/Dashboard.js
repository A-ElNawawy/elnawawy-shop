import React from "react";

const style = {
  backgroundColor: "green",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const Dashboard = ({ setAuthorized }) => {
  const handleSignOut = (e) => {
    e.preventDefault();
    setAuthorized(false);
  };

  return (
    <div className='Dashboard' style={style}>
      Welcome to Dashboard
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
