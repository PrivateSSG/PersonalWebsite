import AllPictureFetch from "../../components/AllPictureFetch"
export default function page() {
  return (
    <>
      <div className='flex flex-col space-y-5 py-4' >
        <h1 className='text-2xl text-center'>Grade Seven Student Pictures</h1>
        <AllPictureFetch bucketId={"654f6faa550aef7192af"} />
      </div>
    </>
  )
}
