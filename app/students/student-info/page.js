import Link from 'next/link'

export default function page() {
  return (
    <>
      <div className='student-container'>
        <h1 className='text-2xl'>Student Information</h1>
        
        <p><Link href={"student-info/level/KG"}>Class Play Group</Link></p>
        <p><Link href={"student-info/level/Nursery"}>Class Nursery</Link></p>
        <p><Link href={"student-info/level/PG"}>Class Kindergarten</Link></p>
        <p><Link href={"student-info/level/Grade-One"}>Class Grade One</Link></p>
        <p><Link href={"student-info/level/Grade-Two"}>Class Grade Two</Link></p>
        <p><Link href={"student-info/level/Grade-Three"}>Class Grade Three</Link></p>
        <p><Link href={"student-info/level/Grade-Four"}>Class Grade Four</Link></p>
        <p><Link href={"student-info/level/Grade-Five"}>Class Grade Five</Link></p>
        <p><Link href={"student-info/level/Grade-Six"}>Class Grade Six</Link></p>
        <p><Link href={"student-info/level/Grade-Seven"}>Class Grade Seven</Link></p>
        <p><Link href={"student-info/level/Grade-Eight"}>Class Grade Eight</Link></p>
        <p><Link href={"student-info/level/Grade-Nine"}>Class Grade Nine</Link></p>
        <p><Link href={"student-info/level/Grade-Ten"}>Class Grade Ten</Link></p>


      </div>
    </>
  )
}
