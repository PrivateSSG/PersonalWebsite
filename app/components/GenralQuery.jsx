"use client"
import { useState } from 'react'
import {} from 'appwrite'
export default function GenralQuery() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    return (
        <div className="queries-form mt-7">
            <div className="main-form bg-blue-950 p-4 py-7 flex flex-col items-center justify-center w-[540px]">
                <img src='./arrow.png' />
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-center text-2xl text-white font-bold'>GENERAL INQUIRIES</h1>
                    <input type='text' className='p-2  w-[430px]' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                    <input type='text' className='p-2 w-[430px]' placeholder='Email' value={email} onChange={(e => setEmail(e.target.value))} />
                    <input type='text' className='p-2 w-[430px]' placeholder='Comment/Questions' value={comment} onChange={(e => setComment(e.target.value))} />
                    <div className='button flex justify-end'>
                        <button className='bg-red-600 text-white p-2 px-5'>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
