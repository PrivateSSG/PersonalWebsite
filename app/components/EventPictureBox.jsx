"use client"
import { Client,Storage } from "appwrite";
const client = new Client()
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("6533c1336f3a644753c1");

const storage = new Storage(client)
export default function EventPictureBox({eventName,year,pic}) {


  return (
    <>
    <div className='max-lg:w-[270px] w-[300px] p-3 flex flex-col'>
       <img src={pic} className="w-full aspect-square object-cover" alt="No Any Image" />
       <div className="flex flex-col  border border-gray-500 space-y-4">

        <h1 className="px-2 py-2">{eventName}</h1>
        <p className="px-2 py-2">{year}</p>

       </div>

        </div>
    </>
  )
}