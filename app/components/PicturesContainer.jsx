import React from 'react'

export default function PicturesContainer() {
  return (
    <div className=" mt-5 flex justify-center">
        <div className="imageBox flex justify-center space-x-6">
            <img src="/logo.jpg" className='w-[400px] ' alt="" />
            <img src="buildingImage.jpg" className='w-[420px] h-[350px] ' alt="" />
        </div>
    </div>
  )
}
