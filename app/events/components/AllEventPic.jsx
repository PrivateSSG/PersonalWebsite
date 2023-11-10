"use client"
import { useState, useEffect } from "react"
import { Client, Storage, Databases } from "appwrite"
import EventPictureBox from "@/app/components/EventPictureBox"
const client = new Client()

client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("6533c1336f3a644753c1");
const AllEventPic = ({ aname, bucketId }) => {
    const storage = new Storage(client)
    const database = new Databases(client)
    const [images, setImages] = useState([])
    const [events, setEvents] = useState(null)

    useEffect(() => {

        const fetchImage = async () => {
            const response = await storage.listFiles(bucketId)
            const myList = await response.files
            setImages(myList)
        }
        fetchImage();
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            const allevents = await database.listDocuments("654a2db3019134465e0d", "654a2dc605f329455c48")
            const eve = await allevents.documents
            setEvents(eve)

        }
        fetchData()
    }, [])

    return (
        <>

            <div>
                <h1 className='text-center text-2xl'>{aname}</h1>
                <div className='flex flex-wrap justify-center'>
                    {images.map((image, i) => (
                        <EventPictureBox key={i}  year={events && events[i].date} eventName={events && events[i].name} pic={storage.getFilePreview(image.bucketId, image.$id)} />
                    ))
                    }

                </div>
            </div>
        </>
    )
}

export default AllEventPic