import Link from "next/link"
export default function Events() {
    return (
        <>
            <div className='mx-72 my-12 flex space-x-4 '>
                <button className='border-b-2 border-gray-300 hover:border-gray-400 transition duration150 active:border-gray-400 '><Link href={"events/alllevents"} as={"/events/alllevents"}>All Events</Link></button>
                <button className='border-b-2 border-gray-300 hover:border-gray-400 transition duration150 active:border-gray-400'><Link href={"/events/previous"} as={"/events/previous"}>Previous Events</Link></button>
                <button className='border-b-2 border-gray-300 hover:border-gray-400 transition duration150 active:border-gray-400'><Link href={"/events/upcomingevents"}>Upcoming Events</Link></button>
            </div>
        </>
    )
}
