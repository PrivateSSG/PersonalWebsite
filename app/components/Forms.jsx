"use client"
import React, { useState } from 'react'
import { Client, Databases, ID } from 'appwrite'

export default function Forms() {
    const [name, setName] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [cnic, setCnic] = useState("")
    const [dob, setDob] = useState(new Date())
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [applyingFor, setApplyingFor] = useState("");
    const [interestedIn, setInterestedIn] = useState([])
    const [subjectSpecification, setSubjectSpecification] = useState("");
    const [designation, setDesignation] = useState("");
    const [packages, setPackages] = useState("");
    const [doj, setDOJ] = useState(new Date());
    const [dol, setDOL] = useState(new Date());
    const [purposeOfLeaving, setPorposeOfLeaving] = useState("");
    const [institute, setInstitute] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const client = new Client()
        client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('6533c1336f3a644753c1'); // Replace with your project ID


        const databaseId = "6537b84f581243c8d965";
        const collectionId = "65462330bcaa2de5abd0";
        const data = {
            name,
            email,
            fatherName,
            maritalStatus,
            cnic,
            dob,
            applyingFor,
            contact,
            interestedIn,
            subjectSpecification,
            institute,
            designation,
            packages,
            dol,
            doj,
            purposeOfLeaving,
        };
        const database = new Databases(client);

        // Create the user if the email address does not exist
        const response = await database.createDocument(databaseId, collectionId, ID.unique(), data);

        // Check the response status code
        alert("Form for Job Submited")
    }

    const checkbox = [
        { value: "Pre-section", lable: "Pre-section" },
        { value: "Primary", lable: "Primary" },
        { value: "High", lable: "High" },

    ];
    const handleChange = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        if (checked && !interestedIn.includes(value)) {
            setInterestedIn([...interestedIn, value]);
        } else if (!checked && interestedIn.includes(value)) {
            setInterestedIn(interestedIn.filter((item) => item !== value));
        }
    };

    return (
        <>
            <div className='p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-3/4     mx-auto'>
                <h1 className='text-2xl text-center p-2'>Fill the Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col w-full space-y-6'>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type='text' placeholder='Name' value={name} onChange={(e => setName(e.target.value))} />
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type='text' placeholder='Father Name' value={fatherName} onChange={(e => setFatherName(e.target.value))} />
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type='text' placeholder='Marital Status' value={maritalStatus} onChange={(e => setMaritalStatus(e.target.value))} />
                        <input type="number" className='border border-gray-400 py-2 px-2 rounded-lg' placeholder='CNIC#' value={cnic} onChange={(e => setCnic(e.target.value))} />
                        <input type="date" className='border border-gray-400 py-2 px-2 rounded-lg' placeholder='DOB in Figure' value={dob} onChange={(e => setDob(e.target.value))} />
                        <div className='flex w-full space-x-4'>

                            <input type="number" className='border border-gray-400 py-2 w-full px-2 rounded-lg' placeholder='Contact#' value={contact} onChange={(e => setContact(e.target.value))} />
                            <input type="email" className='border border-gray-400 py-2 px-2 rounded-lg' placeholder='Email' value={email} onChange={(e => setEmail(e.target.value))} />
                        </div>
                        <input type="text" className='border border-gray-400 py-2 px-2 rounded-lg' placeholder='Applying for the Post Of' value={applyingFor} onChange={(e => setApplyingFor(e.target.value))} />
                        <div className='flex space-x-3'>
                            <h1>Interested In</h1>
                            {checkbox.map((checkbox, i) => (
                                <>
                                    <input
                                        type="checkbox"
                                        value={checkbox.value}
                                        name="interested"
                                        key={checkbox.value}
                                        checked={interestedIn.includes(checkbox.value)}
                                        onChange={handleChange}
                                    />
                                    <lable>{checkbox.lable}</lable>
                                </>
                            ))}
                        </div>
                        <div>
                            <input type="text" className='border border-gray-400 py-2 w-full px-2 rounded-lg' placeholder='Subject Specialization' value={subjectSpecification} onChange={(e => setSubjectSpecification(e.target.value))} />
                        </div>
                        <div className='mt-9'>
                            <h1>Work Experence</h1>
                            <div>
                                <ul className='flex space-x-3 justify-around mt-5'>
                                    <li>Institute</li>
                                    <li>Designation</li>
                                    <li>Package</li>
                                    <li>Date of Joining</li>
                                    <li>Date of Leaving</li>
                                    <li>Purpose of Leaving</li>
                                </ul>
                                <div className='flex space-x-4 justify-center'>
                                    <ul className='flex space-x-11 justify-around'>
                                        <input className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Institute' value={institute} onChange={((e) => setInstitute(e.target.value))} />
                                        <input className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Designation' value={designation} onChange={(e => setDesignation(e.target.value))} />
                                        <input className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='package' value={packages} onChange={(e => setPackages(e.target.value))} />
                                        <input type='date' className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Date of Joining' value={doj} onChange={(e => setDOJ(e.target.value))} />
                                        <input type='date' className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Date of Leaving' value={dol} onChange={(e => setDOL(e.target.value))} />
                                        <input className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Purpose of Leaving' value={purposeOfLeaving} onChange={(e => setPorposeOfLeaving(e.target.value))} />
                                    </ul>
                                </div>

                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-green-500 px-10 hover:bg-green-600 duration-200 py-2 text-white'>Submit</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
