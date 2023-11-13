import AllPictureFetch from "../../components/AllPictureFetch"

export default function page() {
  return (
   <>
   <div className="flex flex-col space-y-4 text-xl text-center">
   <h1>PG CLass Student Pictures</h1>
   <AllPictureFetch bucketId={"654f6578d35447c23b4e"} />
   </div>
   </>
  )
}
