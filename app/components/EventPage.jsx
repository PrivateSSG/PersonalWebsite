import EventCard from './EventCard'
import Link from 'next/link'
import GenralQuery from './GenralQuery';
export default function EventPage() {

    const events = [
        {
            img: "/December.jpg",
            text: 'Celebrating 9 Years of Success!',
            year: "1st December 2023"
        },
        {
            img: '/result.jpg',
            text: 'Final Result Day',
            year: "9th December 2023"
        },
    ];
    return (
        <>
            <div className="mt-7 flex flex-col items-center text-2xl font-bold bg-gray-300">
                <h1 className='mt-7'>UPCOMING <span className='text-red-600'>EVENTS</span></h1>

                <div className=' flex justify-center  space-x-5 mt-6  '>
                    <div className='flex flex-col'>
                        <img src="december.jpg" className='h-[300px] w-[450px]' alt="" />
                        <div className='flex gap-3 items-center'>
                            <div className='bg-gray-700 w-20 rounded-xl flex justify-center h-16 items-center mt-3'  >
                                <div className='flex flex-col'>
                                    <h1 className='text-white text-center text-3xl'>1st</h1><span className='text-sm text-white'>Dec 2023</span>
                                </div>
                            </div>
                            <h1 className='text-xl w-[334px]'>Celebrating 9 Years of Success!</h1>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <img src="result.jpg" className='h-[300px] w-[450px]' alt="" />
                            <div className='flex gap-3 items-center'>
                                <div className='bg-gray-700 w-20 rounded-xl flex justify-center h-16 items-center mt-3'  >
                                    <div className='flex flex-col'>
                                        <h1 className='text-white text-center text-3xl'>9th</h1><span className='text-sm text-white'>Dec 2023</span>

                                    </div>
                                </div>
                                <h1 className='text-xl w-[334px]'>Final Result Day</h1>
                            </div>
                        </div>


                    </div>

                </div>
                <button className='bg-green-600 p-2 rounded-md text-xl text-white mt-14 my-14'><Link href={"/events/alllevents"}>See All Event</Link></button>
            </div>


            <div className="imagesPart">
                <img src='./buildImage.jpg' className='w-full' />
            </div>

            <div className='bg-gray-300 py-14 flex flex-col items-center'>
                <div className='text-c text-3xl font-bold mt-9'>
                    <h1>CONNECT <span className='text-red-600'>WITH US</span></h1>
                </div>
                <GenralQuery />
            </div>

        </>
    )
}
