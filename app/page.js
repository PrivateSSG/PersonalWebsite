import Link from "next/link";
import EventPage from "./components/EventPage";
import PicturesContainer from "./components/PicturesContainer";
import WelcomePage from "./components/WelcomePage";


export default function Home() {

  return (
    <>

      <div className="form flex justify-end px-6 overflow-auto">
        <Link href={"/Jobvec"} className="bg-green-700 text-white p-2 font-bold text-sm">APPLY FOR ENROLLMENT</Link>
      </div>
      <WelcomePage />
      <PicturesContainer/>
      
      <EventPage  />


    </>
  )
}
