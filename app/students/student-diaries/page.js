import Link from "next/link"
export default function page() {
  return (
    <div className='student-container'>
        <h1 className='text-2xl'>Student Diaries</h1>
        <p><Link href={"student-diaries/level/KG"}>Class Play Group</Link></p>
        <p><Link href={"student-diaries/level/Nursery"}>Class Nursery</Link></p>
        <p><Link href={"student-diaries/level/PG"}>Class Kindergarten</Link></p>
        <p><Link href={"student-diaries/level/Grade-One"}>Class Grade One</Link></p>
        <p><Link href={"student-diaries/level/Grade-Two"}>Class Grade Two</Link></p>
        <p><Link href={"student-diaries/level/Grade-Three"}>Class Grade Three</Link></p>
        <p><Link href={"student-diaries/level/Grade-Four"}>Class Grade Four</Link></p>
        <p><Link href={"student-diaries/level/Grade-Five"}>Class Grade Five</Link></p>
        <p><Link href={"student-diaries/level/Grade-Six"}>Class Grade Six</Link></p>
        <p><Link href={"student-diaries/level/Grade-Seven"}>Class Grade Seven</Link></p>
        <p><Link href={"student-diaries/level/Grade-Eight"}>Class Grade Eight</Link></p>
        <p><Link href={"student-diaries/level/Grade-Nine"}>Class Grade Nine</Link></p>
        <p><Link href={"student-diaries/level/Grade-Ten"}>Class Grade Ten</Link></p>


      </div>
  )
}
