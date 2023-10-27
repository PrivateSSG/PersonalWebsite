import React from "react";
import Sidebar from "./components/Sidebar";

const layout = ({ children }) => {
  return (
    <>
      <div className="max-lg:flex max-lg:space-x-3 max-lg:px-0  flex space-x-6 px-5 py-3">
        <Sidebar />
        <div className="flex justify-center">{children}</div>
      </div>
    </>
  );
};

export default layout;
