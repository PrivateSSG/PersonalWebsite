
export default function EventPictureBox({eventName,year,pic}) {

  return (
    <>
    <div className='max-lg:w-[270px] w-[300px] p-3 flex flex-col'>
       <img src={pic} className="w-full" />
       <div className="flex flex-col  border border-gray-500 space-y-4">

        <h1 className="px-2 py-2">{eventName}</h1>
        <p className="px-2 py-2">{year}</p>
        <button className="bg-green-600 w-full p-1 text-white">See Events</button>
       </div>

        </div>
    </>
  )
}
