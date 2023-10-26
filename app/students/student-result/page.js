import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <div>
    <h1 className='text-2xl'>Student Results</h1>
    <h1><Link href={"/students/student-result/first-assessment"}>First Assessment Results</Link></h1>
    <h1><Link href={"/students/student-result/second-assessment"}>Second Assessment Results</Link></h1>
    <h1> <Link href={"/students/student-result/Mid-Term"}>Mid-Term Result</Link></h1>
    <h1><Link href={"/students/student-result/Final-Term"}>Final-Term Result</Link></h1>
    </div>
    </>
  )
}
