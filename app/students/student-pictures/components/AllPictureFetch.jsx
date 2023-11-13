"use client"
import { useState, useEffect } from "react"
import { Client, Storage } from "appwrite"
const client = new Client()
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("6533c1336f3a644753c1");
const AllPictureFetch = ({ bucketId }) => {
    const storage = new Storage(client)
    const [images, setImages] = useState([])
    useEffect(() => {
        const fetchImage = async () => {
            const response = await storage.listFiles(bucketId)
            const myList = await response.files
            setImages(myList)
        }
        fetchImage();
    }, [])
    return (
        <>
            <div>
                <div className="flex justify-center flex-wrap">
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                        {images.map((image, i) => (
                            <div>
                                <img
                                    className="h-auto w-72 rounded-lg"
                                    src={storage.getFilePreview(image.bucketId, image.$id)}
                                    alt=""
                                />
                            </div>
                        ))
                        }


                    </div>
                </div>



            </div>
        </>
    )
}

export default AllPictureFetch