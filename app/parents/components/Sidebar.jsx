import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <>
      <div className='p-2'>
        <div className='sidebar flex flex-col  space-y-6 p-2 items-center'>
          <div className="top text-center">
            <Link href={"/students"}><h1>Parents Section</h1></Link>

          </div>
          <div className="main-sidebar flex flex-col  justify-center space-y-5 items-start">
            <div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <img className='w-5 h-5' src='../student-logo.svg' alt='pic not loaded' />
              <Link href={"/students/student-info"}><h1>Parents </h1></Link>

            </div>
            <div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <img className='w-5 h-5' src='../globe.svg' alt='pic not loaded' />
              <Link href={"/students/student-pictures"}><h1></h1></Link>

            </div>


          </div>

        </div>
      </div>
    </>
  )
}
