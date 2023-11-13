import UploadStudentPicture from '@/app/components/UploadStudentPicture'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex flex-col flex-wrap'>
        <UploadStudentPicture bucketId={"654f6578d35447c23b4e"} aname={"PG Class Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6e37b693ae7e83df"} aname={"KG Class Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6ec0068d9c5e68d1"} aname={"Nursery Class Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6eec321c67d3416e"} aname={"Grade One Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6f1a05ee5867cd93"} aname={"Grade Two Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6f2fd07aebc00774"} aname={"Grade Three Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6f4c1cc5ca318fe0"} aname={"Grade Four Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6f665731a7385e87"} aname={"Grade Five Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6f8a620dfad359a8"} aname={"Grade Six Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6faa550aef7192af"} aname={"Grade Seven Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6fc08751749d0fea"} aname={"Grade Eight Student PIcture"} />
        <UploadStudentPicture bucketId={"654f6fe8045dcdb106f6"} aname={"Grade Nine Student PIcture"} />
      </div>
    </>
  )
}

export default page