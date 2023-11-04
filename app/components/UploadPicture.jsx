"use client"
import { useState, useRef } from "react";
import { Client, ID, Storage } from "appwrite";
import Card from "../dashboard/components/Card";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("6533c1336f3a644753c1");
const storage = new Storage(client);

const UploadPicture = ({ bucketId, name }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef(null)
    const uploadImage = async () => {
        if (file === null) {
            return;
        }
        setUploading(true)
        fileInputRef.current.value = "";
        const response = await storage.createFile(bucketId, ID.unique(), file);
        // setFile(response);
        setImageUrl(response.url)
        setUploading(false);
    };
    return (
        <Card>
            <div className="flex flex-col ">
                <h1 className="text-2xl ">{name}</h1>
                <input type="file" ref={fileInputRef} onChange={(e) => setFile(e.target.files[0])} />
                <button
                    className="bg-green-500 px-3 py-1 rounded-md my-2 text-white"
                    onClick={uploadImage}
                    disabled={uploading}
                >
                    Upload
                </button>
            </div>

        </Card>
    )
}

export default UploadPicture