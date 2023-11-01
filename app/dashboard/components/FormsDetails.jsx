"use client"
import React, { useEffect, useState } from 'react'
import { Databases, Client } from 'appwrite'
import Card from './Card'

const FormsDetails = () => {

    const client = new Client();
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('6533c1336f3a644753c1');
    const [data, setData] = useState([]);
    useEffect(() => {
        const databaseId = '6537b84f581243c8d965'
        const collectionId = "6537bef49fd2fe4d0630"
        const database = new Databases(client);
        const fetchData = async () => {
            let response = await database.listDocuments(databaseId, collectionId)

            setData(response.documents)
            console.log(data)
            console.log(response)

        }
        fetchData()

    }, []);
    return (
        <>

            <Card>
                {data && data.length === 0 ? (
                    <div className="text-2xl font-bold mx-60">
                        <h2>No Data</h2>
                    </div>
                ) : <table className="table-auto">
                    <thead >
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold">Name</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold">Father Name</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold">Email</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold">Contact</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold">Class Interested</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold">Interested In</th>
                        </tr>
                    </thead>
                    {data && data.map((item, i) => (

                        <tbody key={i}>
                            <tr>
                                <td className="px-6 py-4 text-left">{item.name}</td>
                                <td className="px-6 py-4 text-left">{item.fatherName}</td>
                                <td className="px-6 py-4 text-left">{item.email}</td>
                                <td className="px-6 py-4 text-left">{item.contact}</td>
                                <td className="px-6 py-4 text-left">{item.classInterest}</td>
                                <td className="px-6 py-4 text-left">{item.interested}</td>
                            </tr>

                        </tbody>
                    ))}

                </table>
                }
            </Card>
        </>
    )
}

export default FormsDetails