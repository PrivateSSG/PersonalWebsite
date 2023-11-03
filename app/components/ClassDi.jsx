"use client"
import { useState, useEffect } from "react";
import { Client, Storage, ID } from 'appwrite'
import Card from "../dashboard/components/Card";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("6533c1336f3a644753c1");
const storage = new Storage(client);

const ClassDi = () => {
    const [pdfFiles, setPdfFiles] = useState([]);
    const fetchFiles = async () => {
        const response = await storage.listFiles("65438b60d7c109a7a7d5");
        const pdfFiles = response.files.filter((file) => file.mimeType === "application/pdf");
        setPdfFiles(pdfFiles);
    };
    useEffect(() => {
        fetchFiles();
    }, [])
    return (
        <Card>
            <div className="flex flex-col">
                <h1>Play Group Class PDF FIles</h1>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pdfFiles.map((file) => (
                            <tr key={file.$id}>
                                <td>{file.name}</td>
                                <td>
                                    <button
                                        className="bg-blue-500 px-3 py-1 rounded-md my-2 text-white"
                                        onClick={async () => {
                                            const downloadUrl = await storage.getFileDownload(file.$id);
                                            window.open(downloadUrl, "_blank");
                                        }}
                                    >
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default ClassDi