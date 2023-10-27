import Link from "next/link";
import EventPage from "./components/EventPage";
import PicturesContainer from "./components/PicturesContainer";
import WelcomePage from "./components/WelcomePage";

export default function Home() {
  return (
    <>
      <div className="form overflow-hidden max-lg:overflow-hidden max-xl:overflow-hidden flex max-lg:flex max-lg:justify-end justify-end px-6 max-lg:px-2">
        <Link
          href={"/Jobvec"}
          className="bg-green-700 text-white max-lg:text-[9px] max-lg:p-1 p-2 font-bold text-sm"
        >
          APPLY FOR ENROLLMENT
        </Link>
      </div>
      <WelcomePage />
      <PicturesContainer />

      <EventPage />
    </>
  );
}
