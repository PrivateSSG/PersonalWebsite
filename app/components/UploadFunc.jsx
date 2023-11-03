"use client"
import { useEffect, useState, useRef } from "react";
import { Client, ID, Storage } from "appwrite";
import Card from "../dashboard/components/Card";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("6533c1336f3a644753c1");
const storage = new Storage(client);

const UploadFunc = ({gradeName, bucketId}) => {
    const [pdfFiles, setPdfFiles] = useState([]);
    const [file, setFile] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const fileInputRef = useRef(null)
    const uploadFile = async () => {
        if (file === null) {
            return;
        }
        fileInputRef.current.value = "";
        const response = await storage.createFile(bucketId, ID.unique(), file);
        setFile(response);
    };

    const downloadFile = async () => {
        const downloadUrl = await storage.getFileDownload(bucketId, file.$id);
        setDownloadUrl(downloadUrl);
    };
    return (
        <Card>
            <div className="flex flex-col ">
                <h1 className="text-2xl ">{gradeName}</h1>
                <input type="file" ref={fileInputRef} onChange={(e) => setFile(e.target.files[0])} />
                <button
                    className="bg-green-500 px-3 py-1 rounded-md my-2 text-white"
                    onClick={uploadFile}
                >
                    Upload
                </button>
                {downloadUrl && (
                    <button
                        className="bg-blue-500 px-3 py-1  rounded-md my-2 text-white"
                        onClick={async () => {
                            window.open(downloadUrl, "_blank");
                        }}
                    >
                        Download
                    </button>
                )}
            </div>
        </Card>
    )
}

export default UploadFunc