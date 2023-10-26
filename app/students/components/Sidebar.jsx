import React from 'react'
import Link from 'next/link'
import {VscBook,VscRepo,VscDeviceCamera,VscFeedback,VscOutput} from "react-icons/vsc"

export default function Sidebar() {
  return (
    <>
    <div className='p-2'>
      <div className='sidebar flex flex-col  space-y-6 p-2 items-center'>
          <div className="top text-center">
            <Link href={"/students"}><h1>Students Information</h1></Link>

          </div>
          <div className="main-sidebar flex flex-col  justify-center space-y-5 items-start">
            
            <div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscDeviceCamera size={25}/>
              <Link href={"/students/student-pictures"}><h1>Student Pictures</h1></Link>

            </div>
            <div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscRepo size={25} />
              <Link href={"/students/student-syllabus"}><h1>Student Syllabus</h1></Link>
            </div>
            <div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscBook size={25}/>
              <Link href={"/students/student-diaries"}><h1>Student Diaries</h1></Link>
            </div>
            
            <div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscOutput size={25}/>
              <Link href={"/students/student-result"}><h1>Student Results</h1></Link>
            </div>
            

          </div>

      </div>
      </div>
    </>
  )
}
