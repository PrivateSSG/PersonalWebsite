import Link from "next/link"

export default function page() {
  return (
        
        <div className='student-container'>
        <h1 className='text-2xl'>Student Syllabus</h1>
        
        
        <p><Link href={"student-syllabus/level/PG"}>Class Play Group</Link></p>
        <p><Link href={"student-syllabus/level/Nursery"}>Class Nursery</Link></p>
        <p><Link href={"student-syllabus/level/KG"}>Class Kindergarten</Link></p>
        <p><Link href={"student-syllabus/level/Grade-One"}>Class Grade One</Link></p>
        <p><Link href={"student-syllabus/level/Grade-Two"}>Class Grade Two</Link></p>
        <p><Link href={"student-syllabus/level/Grade-Three"}>Class Grade Three</Link></p>
        <p><Link href={"student-syllabus/level/Grade-Four"}>Class Grade Four</Link></p>
        <p><Link href={"student-syllabus/level/Grade-Five"}>Class Grade Five</Link></p>
        <p><Link href={"student-syllabus/level/Grade-Six"}>Class Grade Six</Link></p>
        <p><Link href={"student-syllabus/level/Grade-Seven"}>Class Grade Seven</Link></p>
        <p><Link href={"student-syllabus/level/Grade-Eight"}>Class Grade Eight</Link></p>
        <p><Link href={"student-syllabus/level/Grade-Nine"}>Class Grade Nine</Link></p>
        <p><Link href={"student-syllabus/level/Grade-Ten"}>Class Grade Ten</Link></p>


      </div>

  )
}
