import Link from 'next/link'

export default function page() {
  return (
    <>
    {/* <PictureGallery /> */}
    <div className='student-container'>
        <h1 className='text-2xl max-lg:text-xl'>Student Pictures</h1>
  
        <p><Link href={"student-pictures/level/PG"}>Class Play Group Picture</Link></p>
        <p><Link href={"student-pictures/level/Nursery"}>Class Nursery Picture</Link></p>
        <p><Link href={"student-pictures/level/KG"}>Class Kindergarten Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-One"}>Class Grade One Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-Two"}>Class Grade Two Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-Three"}>Class Grade Three Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-Four"}>Class Grade Four Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-Five"}>Class Grade Five Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-Six"}>Class Grade Six Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-Seven"}>Class Grade Seven Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-Eight"}>Class Grade Eight Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-Nine"}>Class Grade Nine Picture</Link></p>
        <p><Link href={"student-pictures/level/Grade-Ten"}>Class Grade Ten Picture</Link></p>


      </div>
    </>
  )
}
