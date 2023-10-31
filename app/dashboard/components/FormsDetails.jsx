"use client"
import React, { useEffect, useState } from 'react'

const FormsDetails = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch("http://localhost:3000/api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let result = await response.json();
            setData(result);
        }
        fetchData();
    }, [])
    return (
        <>
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
                        <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold">Interested In</th>
                    </tr>
                </thead>
                {data && data.map((item) => (

                    <tbody key={item._id}>
                        <tr>
                            <td className="px-6 py-4 text-left">{item.name}</td>
                            <td className="px-6 py-4 text-left">{item.fatherName}</td>
                            <td className="px-6 py-4 text-left">{item.email}</td>
                            <td className="px-6 py-4 text-left">{item.phoneNumber}</td>
                            <td className="px-6 py-4 text-left">{item.interested}</td>
                        </tr>

                    </tbody>
                ))}
            </table>
            }

        </>
    )
}

export default FormsDetails