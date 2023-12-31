"use client";
import { useState } from "react";
export default function GenralQuery() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  return (
    <div className="queries-form mt-7 overflow-hidden">
      <div className="main-form bg-blue-950 p-4 py-7 flex flex-col items-center justify-center max-lg:w-[390px] w-[540px]  max-sm:w-[330px]">
        <img src="./arrow.png" alt="Arrow Image" />
        <div className="flex flex-col space-y-4">
          <h1 className="text-center text-2xl max-lg:text-sm  text-white font-bold">
            GENERAL INQUIRIES
          </h1>
          <input
            type="text"
            className="p-2 max-lg:text-sm max-lg:p-1  max-lg:w-[260px] w-[430px]"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="p-2 max-lg:text-sm max-lg:p-1 max-lg:w-[260px]  w-[430px]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="p-2 max-lg:text-sm max-lg:p-1 max-lg:w-[260px] w-[430px]"
            placeholder="Comment/Questions"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="button flex justify-end">
            <button className="bg-red-600 text-white p-2 px-5 max-lg:p1 max-lg:px-3">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
