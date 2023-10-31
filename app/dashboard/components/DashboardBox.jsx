"use client";

import getConnect from "@/libs/connection";
import { useEffect, useState } from "react";

const DashboardBox = () => {
  const [data,setData] = useState(null)
  useEffect(()=>{
      const fetchData = async () => {
          await getConnect();
          let response = await fetch("http://localhost:3000/api/user", {
            method: "GET",
          });
          response = await response.json();
          
          setData(response);
          

      }
      fetchData();
  },[])

  return (
    <>
      <div className="flex flex-col  items-center p-4 ">
        <h1 className="text-2xl text-teal-600 font-bold">Dashboard</h1>
        <div className="max-lg:space-x-3 flex space-x-10 mt-6 mb-6 max-lg:flex-wrap max-lg:flex-col max-lg:space-y-6 max-lg:items-center max-lg:justify-center">
          <h1 className="bg-sky-500 p-7 text-white font-bold max-lg:p-4">
            English Student Forms <span>0</span>
          </h1>
          <h1 className="bg-sky-500 p-7 text-white font-bold max-lg:p-4">
            IT Student Forms <span>0</span>
          </h1>
          <h1 className="bg-sky-500 p-7 text-white font-bold max-lg:p-4">
            Coaching Student Forms <span>0</span>
          </h1>
          <h1 className="bg-sky-500 p-7 text-white font-bold max-lg:p-4">
            School Student Forms <span>0</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default DashboardBox;
