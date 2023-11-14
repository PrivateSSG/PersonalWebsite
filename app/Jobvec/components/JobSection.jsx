import { SlBriefcase } from "react-icons/sl";
import { CiDollar } from "react-icons/ci";
import Link from "next/link";

export default function JobSection({ job, hour, skill, place, salary }) {
  return (
    <>
      <div className="py-5 ">
        <div className="Search-Bar"></div>
        <div className="Job-Box shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-lg:w-[370px] w-[550px] mx-auto my-auto flex justify-between p-4">
          <div className="flex flex-col flex-wrap">
            <div className="flex space-x-4 max-lg:space-x-2 items-center max-lg:text-sm">
              <SlBriefcase size={21} />
              <h1>{job}</h1>
            </div>
            <ul className="flex max-lg:text-[10px] space-x-5 mt-8 ">
              <li>{hour}</li>
              <li>{skill}</li>
              <li>{place}</li>
            </ul>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-8 mt-8 py-1 rounded-lg max-lg:px-4">
              <Link href={"Jobvec/form"}>Teacher Performa</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
