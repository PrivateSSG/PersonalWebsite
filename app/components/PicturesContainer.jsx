import Image from "next/image";
export default function PicturesContainer() {
  return (
    <div className=" mt-5 flex justify-center overflow-hidden">
      <div className="imageBox flex justify-center max-lg:flex max-lg:flex-wrap space-x-6">
        {/* <img src="/logo.jpg" className='max-lg:w-[230px] w-[400px] ' alt="" /> */}
        <Image
          src="/logo.jpg"
          width={300}
          height={200}
          alt="Logo"
          className="max-lg:w-[230px]"
        />
        {/* <img
          src="buildingImage.jpg"
          className="max-lg:w-[200px] w-[420px] max-lg:h-[200px] h-[350px] "
          alt=""
        /> */}
        <Image
          src={"/buildingImage.jpg"}
          width={360}
          height={350}
          alt="building Image"
          className="max-lg:w-[270px]"
        />
      </div>
    </div>
  );
}
