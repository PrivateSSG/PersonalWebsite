
export default function PictureGallery() {
  return (
    <>

      <div className="flex justify-center flex-wrap">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
          <div>
            <img
              className="h-auto w-72 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </>
  );
}
