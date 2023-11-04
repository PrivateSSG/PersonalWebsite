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
        const collectionId = "65462330bcaa2de5abd0"
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
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Name</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Father Name</th>
                            <th className="px-6 py-3 text-center text-gray-700 uppercase font-bold text-[10px]">Email</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Contact</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Interested In</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Applying For</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">contact</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Subject Specification</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">institute</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Date of Joining</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Date of Leaving</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Purpose of Leaving</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Designation</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">packeges</th>
                            <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[10px]">Martial Stutus</th>
                        </tr>
                    </thead>
                    {data && data.map((item, i) => (

                        <tbody key={i}>
                            <tr>
                                <td className="px-6 py-4 text-left">{item.name}</td>
                                <td className="px-6 py-4 text-left">{item.fatherName}</td>
                                <td className="px-6 py-4 text-left">{item.email}</td>
                                <td className="px-6 py-4 text-left">{item.contact}</td>
                                <td className="px-6 py-4 text-left">{item.interestedIn}</td>
                                <td className="px-6 py-4 text-left">{item.applyingFor}</td>
                                <td className="px-6 py-4 text-left">{item.contact}</td>
                                <td className="px-6 py-4 text-left">{item.subjectSpecification}</td>
                                <td className="px-6 py-4 text-left">{item.doj}</td>
                                <td className="px-6 py-4 text-left">{item.dol}</td>
                                <td className="px-6 py-4 text-left">{item.purposeOfLeaving  }</td>
                                <td className="px-6 py-4 text-left">{item.designation}</td>
                                <td className="px-6 py-4 text-left">{item.packages}</td>
                                <td className="px-6 py-4 text-left">{item.maritalStatus}</td>
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