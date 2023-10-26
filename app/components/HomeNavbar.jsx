import Link from "next/link"
export default function HomeNavbar() {
  return (
    <>
    <div className='Navbar p-5  text-sm justify-center'>
        <ul className='flex  space-x-4'>

           <Link href={"/"}><li className="cursor-pointer hover:text-gray-300">HOME</li></Link>
           <Link href={"/about"}><li className="cursor-pointer hover:text-gray-300">ABOUT</li></Link>
            <li className="cursor-pointer hover:text-gray-300"><Link href={"/students"}>STUDENTS</Link></li>
           <Link href={"/parents"}> <li className="cursor-pointer hover:text-gray-300">PARENTS</li></Link>
           <Link href={'/resources'}><li className="cursor-pointer hover:text-gray-300">RESOURCES</li></Link>
           <Link href={'events'}><li className="cursor-pointer hover:text-gray-300">EVENTS</li></Link>
           <Link href={"/news"}><li className="cursor-pointer hover:text-gray-300">NEWS</li></Link>
           <Link href={"/contact"}><li className="cursor-pointer hover:text-gray-300">CONTACT</li></Link>
        </ul>
    </div>
    </>
  )
}
