import AllPictureFetch from "../../components/AllPictureFetch"
export default function page() {
  return (
    <>
      <div className='flex flex-col space-y-5 py-4' >
        <h1 className='text-2xl text-center'>Grade Three Student Pictures</h1>
        <AllPictureFetch bucketId={"654f6f2fd07aebc00774"} />
      </div>
    </>
  )
}
