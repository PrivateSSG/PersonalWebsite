"use client"
import { useState } from "react"
import PSDFKit from 'pspdfkit'
import { Client, ID, Storage } from 'appwrite'
const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject("6533c1336f3a644753c1")
const storage = new Storage(client)

const UploadDownloadPDF = () => {
    const [file, setFile] = useState(null)
    const handleFileUpload = async (e) => {
        if (file === null) {
            return
        }
        //upload file
        const response = await storage.createFile("65438b60d7c109a7a7d5",ID.unique(),file)
        //get file
        const fileUrl = storage.getFileDownload(response.$id)

        //open the pdf
        const psdfkit = new PSDFKit();
        psdfkit.open(fileUrl)


    }
    return (
        <>
            <h1>UPlaod and display file</h1>
            <input type="file" onChange={((e) => setFile(e.target.files[0]))} />
            <button onClick={handleFileUpload}>UPload</button>

        </>
    )
}

export default UploadDownloadPDF