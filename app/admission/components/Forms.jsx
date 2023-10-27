import React from "react";

export default function Forms() {
  return (
    <>
      <div className="p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-2/4 mx-auto">
        <h1 className="text-2xl text-center p-2">Fill the Form</h1>
        <form>
          <div className="flex flex-col w-full space-y-6">
            <input
              className="border border-gray-400 py-2 px-2 rounded-lg"
              type="text"
              placeholder="Name"
            />
            <input
              className="border border-gray-400 py-2 px-2 rounded-lg"
              type="text"
              placeholder="Father Name"
            />
            <input
              className="border border-gray-400 py-2 px-2 rounded-lg"
              type="text"
              placeholder="Marital Status"
            />
            <input
              type="number"
              className="border border-gray-400 py-2 px-2 rounded-lg"
              placeholder="CNIC#"
            />
            <input
              type="date"
              className="border border-gray-400 py-2 px-2 rounded-lg"
              placeholder="DOB in Figure"
            />
            <div className="flex w-full space-x-4">
              <input
                type="number"
                className="border border-gray-400 py-2 w-full px-2 rounded-lg"
                placeholder="Contact#"
              />
              <input
                type="email"
                className="border border-gray-400 py-2 px-2 rounded-lg"
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              className="border border-gray-400 py-2 px-2 rounded-lg"
              placeholder="Post"
            />
            <label htmlFor="InterestedIn">Interesting In</label>
            <input type="radio" placeholder="Post" />
          </div>
        </form>
      </div>
    </>
  );
}
