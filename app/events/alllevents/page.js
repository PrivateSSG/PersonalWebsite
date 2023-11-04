"use client"
import { useState, useEffect } from "react";
import EventPictureBox from '@/app/components/EventPictureBox'
import EventCard from '@/app/components/EventCard';
import { Storage, Client } from 'appwrite'
import Link from "next/link";
const client = new Client()
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("6533c1336f3a644753c1");

const storage = new Storage(client)
export default function allevents() {
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchImage = async () => {
      const response = await storage.listFiles("65463670ac798a2879e7")
      const image = response.files.map((file) => file.url)
      setImages(image)
    }
    fetchImage();
  }, [])
  const events = [
    {
      img: '/December.jpg',
      text: 'Celebrating 9 Years of Success!',
      year: "1st December 2023"
    },
    {
      img: '/result.jpg',
      text: 'Final Result Day',
      year: "9th December 2023"
    },
  ];
  return (
    <>
      <div>
        <h1 className='text-center text-2xl'>All Events</h1>
        <div className='flex flex-wrap justify-center'>

          {images.map((image,index) => (
              <EventPictureBox key={index} eventName={events[index].text} year={events[index].year} pic={image} />
          ))}
          {/* <EventPictureBox eventName="Happy New YEar" year="2027" pic={"/01.jpg"} />
          <EventPictureBox eventName="new Function" year="2026" pic={"/food.jpg"} />
          <EventPictureBox eventName="Function" year="1926" pic={"/kids.jpg"} /> */}

        </div>
      </div>
    </>
  )
}
