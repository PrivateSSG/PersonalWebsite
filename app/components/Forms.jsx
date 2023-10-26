"use client"
import React, { useState } from 'react'

export default function Forms() {
    const [name, setName] = useState("")
    const [fName, setFName] = useState("")
    const [maritalStatus, setMaritialStatus] = useState("")
    const [cnic, setCnic] = useState("")
    const [dob, setDOB] = useState("")
    const [contact, setContact] = useState(0)
    const [email,setEmail] = useState("")
    const [post, setPost] = useState("");
    const [interested, setInterested] = useState("")
    const [subjectSpecialization, setSubjectSpecialization] = useState("");
    const [lastDegreeAttended, setLastDegreeAttended] = useState("");
    const [lastinstitute, setLastInstitute] = useState("");
    const [designation, setDesignation] = useState("");
    const [packages, setPackages] = useState("");
    const [doj, setDOJ] = useState ();
    const [dol, setDOL] = useState  ();
    const [purposeOfLeaving, setPorposeOfLeaving] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name,email)
    }

    return (
        <>
            <div className='p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-3/4     mx-auto'>
                <h1 className='text-2xl text-center p-2'>Fill the Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col w-full space-y-6'>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type='text' placeholder='Name' value={name} onChange={(e => setName(e.target.value))}/>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type='text' placeholder='Father Name' value={fName} onChange={(e => setFName(e.target.value))}/>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type='text' placeholder='Marital Status' value={maritalStatus} onChange={(e => setMaritialStatus(e.target.value))}/>
                        <input type="number" className='border border-gray-400 py-2 px-2 rounded-lg' placeholder='CNIC#' value={cnic} onChange={(e => setCnic(e.target.value))}/>
                        <input type="date" className='border border-gray-400 py-2 px-2 rounded-lg' placeholder='DOB in Figure' value={dob} onChange={(e => setDOB(e.target.value) )} />
                        <div className='flex w-full space-x-4'>

                            <input type="number" className='border border-gray-400 py-2 w-full px-2 rounded-lg' placeholder='Contact#' value={contact} onChange={(e=> setContact(e.target.value))}/>
                            <input type="email" className='border border-gray-400 py-2 px-2 rounded-lg' placeholder='Email' value={email} onChange={(e => setEmail(e.target.value))} />
                        </div>
                        <input type="text" className='border border-gray-400 py-2 px-2 rounded-lg' placeholder='Post' value={post} onChange={(e => setPost(e.target.value))}/>
                        <div className='flex space-x-3'>

                            <h1>Interested In</h1>
                            <label>Pre-Section</label>
                            <input type="checkbox" />
                            <label>Middle</label>
                            <input type="checkbox" />
                            <label>High</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <input type="text" className='border border-gray-400 py-2 w-full px-2 rounded-lg' placeholder='Subject Specialization'value={subjectSpecialization} onChange={(e => setSubjectSpecialization(e.target.value))} />
                        </div>
                        <div>
                            <input type="text" className='border border-gray-400 py-2 w-full px-2 rounded-lg' placeholder='Last Degree attended' value={lastDegreeAttended} onChange={(e => setLastDegreeAttended(e.target.value))} />
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
                                        <input className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Institute' />
                                        <input className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Designation' />
                                        <input className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='package' />
                                        <input type='date' className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Date of Joining' />
                                        <input type='date' className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Date of Leaving' />
                                        <input className='px-2 py-1  mb-6 w-full border border-gray-600' placeholder='Purpose of Leaving' />
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
