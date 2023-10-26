import { SlBriefcase } from "react-icons/sl";
import { CiDollar } from "react-icons/ci";
import Link from "next/link";



export default function JobSection({ job, hour, skill, place,salary }) {
    return (
        <>
            <div className="py-5">
                <div className="Search-Bar"></div>
                <div className='Job-Box shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[550px] mx-auto my-auto flex justify-between p-4'>
                    <div className='flex flex-col'>
                        <div className="flex space-x-4 items-center">
                            <SlBriefcase size={26} />
                            <h1>{job}</h1>
                        </div>
                        <ul className='flex space-x-5 mt-8'>
                            <li>{hour}</li>
                            <li>{skill}</li>
                            <li>{place}</li>
                        </ul>
                    </div>
                    <div>
                        <div className='price-and-img flex space-x-1 items-center justify-center'>
                            <CiDollar size={22} />
                            <p>${salary} <span className='text-gray-400'>/Year</span></p>
                        </div>
                        <button className="bg-blue-500 text-white px-8 mt-8 py-1 rounded-lg"><Link href={"Jobvec/form"}>Apply Now</Link></button>
                    </div>
                </div>

            </div>
        </>
    )
}
