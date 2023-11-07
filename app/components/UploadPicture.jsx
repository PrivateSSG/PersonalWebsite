"use client"
import { useState, useRef } from "react";
import { Client, ID, Storage, Databases } from "appwrite";
import Card from "../dashboard/components/Card";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("6533c1336f3a644753c1");
const storage = new Storage(client);
const database = new Databases(client)
const UploadPicture = ({ bucketId, aname, dataId,collectionId }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const myData = {
            name,
            date
        }
        const data = await database.createDocument(dataId,collectionId,ID.unique(),myData)
        da
        if (file === null) {
            return;
        }
        setUploading(true)
        fileInputRef.current.value = "";
        const response = await storage.createFile(bucketId, ID.unique(), file);
        // setFile(response);
        setImageUrl(response.url)
        setUploading(false);
        setName("")
        setDate("")
        alert("Event Picture Uploaded")

    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col ">
                    <h1 className="text-2xl ">{aname}</h1>
                    <input type="file" ref={fileInputRef} onChange={(e) => setFile(e.target.files[0])} />
                    <div className="flex flex-col py-2 space-y-3">
                        <input placeholder="Enter Name for Events" className="px-2 py-1 w-full border border-gray-300 " onChange={(e => setName(e.target.value))} value={name} />
                        <input placeholder="Enter Date for Events" className="px-2 py-1 w-full border border-gray-300 " onChange={(e => setDate(e.target.value))} value={date} />
                    </div>
                    <button
                        className="bg-green-500 px-3 py-1 rounded-md my-2 text-white"
                        disabled={uploading}
                    >
                        Upload
                    </button>
                </div>
            </form>
        </Card>
    )
}

export default UploadPicture