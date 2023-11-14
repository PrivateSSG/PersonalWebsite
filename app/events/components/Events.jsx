"use client"
import { useState, useEffect } from "react";
import { Storage, Client } from 'appwrite'
import Link from "next/link";
const client = new Client()
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("6533c1336f3a644753c1");

const storage = new Storage(client)
export default function Events() {
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchImage = async () => {
     const response = await storage.listFiles("65463670ac798a2879e7")
     const image = response.files.map((file)=> file.url)
     setImages(image)
    }
    fetchImage();
  }, [])
  return (
    <>
      <div className="mx-72 max-lg:mx-5 my-12 flex space-x-4 ">
        <button className="border-b-2 border-gray-300 hover:border-gray-400 transition duration150 active:border-gray-400 ">
          <Link href={"events/alllevents"} as={"/events/alllevents"}>
            All Events
          </Link>
        </button>
        <button className="border-b-2 border-gray-300 hover:border-gray-300 transition duration150 active:border-gray-400">
          <Link href={"/events/upcomingevents"}>Upcoming Events</Link>
        </button>
      </div>
    </>
  );
}
