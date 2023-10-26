import Link from "next/link"
export default function Links() {
    return (
        <>
            <div className='border border-gray-300 p-4'>
                <h1 className='text-center text-2xl text-gray-500'>Begin Your Journey with the first step in the right direction </h1>
            </div>
            <div className='flex justify-center items-center p-5'>
                <div className='border-b-2 border-gray-500  justify-center text-center p-2 flex space-x-9  items-center  '>
                    <p><Link href={"/admission/procedure"}>Procedure</Link></p>
                    <p><Link href={"/admission/registration"}>Resgistration</Link></p>
                    <p><Link href={"/admission/addmi-req"}>Admission Requirements</Link></p>
                </div>
            </div>
        </>
    )
}
