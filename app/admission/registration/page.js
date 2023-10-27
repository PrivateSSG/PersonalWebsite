import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="my-7 mx-28 max-lg:mx-4">
        <h1 className="text-2xl">Registration</h1>
        <div>
          <h1 className="text-2xl py-5">Enroll Now in 3 Easy Step</h1>
          <div className="max-lg:flex max-lg:flex-col max-lg:space-y-4 flex justify-start border-b-2 py-5 border-gray-500 ">
            <div className=" flex  justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="bg-gray-600 p-2 rounded-full">
                  <img className="p-2" src="/registration.png" />
                </div>
                <h1 className="font-bold text-2xl">Registration</h1>
              </div>
              <span className="text-[66px] max-lg:hidden text-gray-400">
                ----
              </span>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-600 p-2 rounded-full">
                  <img className=" p-2 " src="/admission-test.png" />
                </div>
                <h1 className="font-bold text-2xl">Admission Test</h1>
              </div>
              <span className="text-[66px] text-gray-400 max-lg:hidden">
                ----
              </span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-600 p-2 rounded-full">
                <img className="p-2" src="/documentation.png" />
              </div>
              <h1 className="text-2xl font-bold">Documentation</h1>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-8">
          <h1 className="text-blue-900 text-[32px] font-bold py-5">
            Registration
          </h1>
          <p className="text-[18px]">
            Please choose your desired mode for registration:{" "}
          </p>
        </div>
        <div>
          <div className="online-form bg-blue-900 w-[390px] max-lg:w-[260px] h-52 flex flex-col text-white p-5">
            <h1 className="font-bold text-2xl">ONLINE</h1>
            <p className="text-sm pb-9 pt-2">
              Parents will receive online Admission Test after payment of a
              non-refundable registration* fee.
            </p>
            <Link
              className="border-white hover:bg-white hover:text-blue-900 duration-300 bg-blue-900 
              border-2 py-2 font-bold "
              href={"registration/form"}
            >
              <button className="px-2">ENROLL NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
