import Link from "next/link"
export default function Navbar() {
  return (
    <>
      <div className='Navbar p-5 py-10  text-sm flex justify-center '>
        <ul className='flex space-x-4'>

          <Link href={"/"} as={"/"}><li className="cursor-pointer hover:text-gray-300">HOME</li></Link>
          <Link href={"/about"} as={"/about"}><li className="cursor-pointer hover:text-gray-300">ABOUT US</li></Link>
          <li className="cursor-pointer hover:text-gray-300"><Link href={"/students"} as="/students">STUDENTS</Link></li>
          <Link href={'/admission'} as={"/admission"} ><li className="cursor-pointer hover:text-gray-300">ADMISSION</li></Link>
          <Link href={'/events'} as={"/events"}> <li className="cursor-pointer hover:text-gray-300">EVENTS</li></Link>
          <Link href={"/announcement"}  ><li className="cursor-pointer hover:text-gray-300">ANNOUNCEMENT</li></Link>
          <li className="cursor-pointer hover:text-gray-300"><Link href={"/Jobvec"} as={"Jobvec"}>JOB VACANCIES</Link></li>
          <Link href={"/contact"} as={"/contact"}><li className="cursor-pointer hover:text-gray-300">CONTACT</li></Link>
        </ul>
      </div>
    </>
  )
}
