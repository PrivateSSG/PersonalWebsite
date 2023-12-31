import React from "react";
import Link from "next/link";
import {
  VscBook,
  VscRepo,
  VscDeviceCamera,
  VscFeedback,
  VscOutput,
} from "react-icons/vsc";
import Card from "./Card";

export default function Sidebar() {
  return (
    <>
      <Card>
        <div className="sidebar flex flex-col space-y-6 p-2 ">
          <Link href={"/dashboard"}><h1>Dashboard Overview</h1></Link>
          <div className="main-sidebar flex flex-col  justify-center space-y-5 items-start">
            <Link href={"/dashboard/formDetail"}><div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscRepo size={25} />
              <h1 className="max-lg:text-[13px]">Forms</h1>
            </div></Link>
            <Link href={"/dashboard/dairies"}><div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscRepo size={25} />
              <h1 className="max-lg:text-[13px]">Diaries</h1>
            </div></Link>
            <Link href={"/dashboard/syllabus"}><div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscRepo size={25} />
              <h1 className="max-lg:text-[13px]">Syllabus</h1>
            </div></Link>
            <Link href={"/dashboard/jobForm"}><div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscRepo size={25} />
              <h1 className="max-lg:text-[13px]">Job Forms</h1>
            </div></Link>
            <Link href={"/dashboard/result"}><div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscRepo size={25} />
              <h1 className="max-lg:text-[13px]">Result Card</h1>
            </div></Link>
            <Link href={"/dashboard/picture"}><div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscRepo size={25} />
              <h1 className="max-lg:text-[13px]">Event Pictures</h1>
            </div></Link>
            <Link href={"/dashboard/student-picture"}><div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscRepo size={25} />
              <h1 className="max-lg:text-[13px]">Student Pictures</h1>
            </div></Link>

          </div>
        </div>
      </Card>
    </>
  );
}
