import React from "react";
import Sidebar from "./components/Sidebar";

const layout = ({ children }) => {
  return (
    <>


      <div className="flex mx-auto max-w-6xl  gap-4 ">
        <div className="w-1/5">
          <Sidebar />
        </div>
        {children}
      </div>

    </>
  );
};

export default layout;
