"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      {isVisible ? (
        <div className="hidden max-lg:flex max-lg:justify-center max-lg:flex-wrap max-lg:block duration-200 max-lg:bg-green-600 max-lg:text-white">
          <ul className="space-y-4 max-lg:items-center max-lg:py-2 max-lg:flex max-lg:flex-col max-lg:flex-wrap">
            <Link href={"/"} as={"/"}>
              <li className="cursor-pointer hover:text-gray-300">HOME</li>
            </Link>
            <Link href={"/about"} as={"/about"}>
              <li className="cursor-pointer hover:text-gray-300">ABOUT US</li>
            </Link>
            <li className="cursor-pointer hover:text-gray-300">
              <Link href={"/students"} as="/students">
                STUDENTS
              </Link>
            </li>
            <Link href={"/admission"} as={"/admission"}>
              <li className="cursor-pointer hover:text-gray-300">ADMISSION</li>
            </Link>
            <Link href={"/events"} as={"/events"}>
              {" "}
              <li className="cursor-pointer hover:text-gray-300">EVENTS</li>
            </Link>
            <Link href={"/announcement"}>
              <li className="cursor-pointer hover:text-gray-300">
                ANNOUNCEMENT
              </li>
            </Link>
            <li className="cursor-pointer hover:text-gray-300">
              <Link href={"/Jobvec"} as={"Jobvec"}>
                JOB VACANCIES
              </Link>
            </li>
            <Link href={"/contact"} as={"/contact"}>
              <li className="cursor-pointer hover:text-gray-300">CONTACT</li>
            </Link>
            <li onClick={() => setIsVisible(false)}>Close</li>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="Navbar p-5 py-10 text-sm max-lg:flex max-lg:justify-end  flex justify-center ">
        <ul className=" hidden lg:block lg:flex  space-x-4">
          <Link href={"/"} as={"/"}>
            <li className="cursor-pointer hover:text-gray-300">HOME</li>
          </Link>
          <Link href={"/about"} as={"/about"}>
            <li className="cursor-pointer hover:text-gray-300">ABOUT US</li>
          </Link>
          <li className="cursor-pointer hover:text-gray-300">
            <Link href={"/students"} as="/students">
              STUDENTS
            </Link>
          </li>
          <Link href={"/admission"} as={"/admission"}>
            <li className="cursor-pointer hover:text-gray-300">ADMISSION</li>
          </Link>
          <Link href={"/events"} as={"/events"}>
            {" "}
            <li className="cursor-pointer hover:text-gray-300">EVENTS</li>
          </Link>
          <Link href={"/announcement"}>
            <li className="cursor-pointer hover:text-gray-300">ANNOUNCEMENT</li>
          </Link>
          <li className="cursor-pointer hover:text-gray-300">
            <Link href={"/Jobvec"} as={"Jobvec"}>
              JOB VACANCIES
            </Link>
          </li>
          <Link href={"/contact"} as={"/contact"}>
            <li className="cursor-pointer hover:text-gray-300">CONTACT</li>
          </Link>
        </ul>
        {isVisible ? (
          <div className="hidden max-lg:flex max-lg:justify-end max-lg:hidden">
            <svg
              onClick={handleVisible}
              aria-label="Settings"
              className="_ab6-"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                x1="3"
                x2="21"
                y1="4"
                y2="4"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                x1="3"
                x2="21"
                y1="12"
                y2="12"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                x1="3"
                x2="21"
                y1="20"
                y2="20"
              ></line>
            </svg>
          </div>
        ) : (
          <div className="hidden max-lg:flex max-lg:justify-end max-lg:block">
            <svg
              onClick={handleVisible}
              aria-label="Settings"
              className="_ab6-"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                x1="3"
                x2="21"
                y1="4"
                y2="4"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                x1="3"
                x2="21"
                y1="12"
                y2="12"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                x1="3"
                x2="21"
                y1="20"
                y2="20"
              ></line>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
