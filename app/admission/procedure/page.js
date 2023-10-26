export default function page() {
  return (
    <>
      <div className='my-7 mx-28'>
        <h1 className='text-2xl'>Procedure</h1>
        <h3 className='text-2xl font-bold'>The City School aims to instill a uniform set of values in our students from all over Pakistan.</h3>

        <p className='mt-7'>Your child may attend The City School in Punjab, Sindh, Balochistan, Khyber-Pakhtunkhwa or Kashmir but our mission will be the same and that is, to encourage regional pride alongside a national consciousness that unifies the diverse areas of Pakistan.</p>
        <p className='text-sm pt-6'>*All academic sessions consists of two terms.</p>
        <div className='pt-6 flex space-x-6  text-gray-700 text-sm font-bold'>
          <button className='px-3  py-2 border border-blue-500 hover:bg-blue-700 hover:text-white'>VIEW ALL OUR COMPUSES</button>
          <button className='px-3 py-2 border border-blue-500 hover:bg-blue-700 hover:text-white'>BOOK A TOUR</button>
        </div>
      </div>
    </>
  )
}
