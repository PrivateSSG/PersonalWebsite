import { Fragment } from 'react';
export default function page() {
  return (
    <Fragment>
      <div className="bg-white p-10">
        <h1 className="text-3xl font-bold">About PEARL Satellite Educational Institute</h1>
        <p className="text-base">PEARL Satellite Educational Institute is an independent, Non-governmental, non-political, and non-sectarian Educational organization. It was established in December 2015 by a Highly Committed, Motivated & Well Educated Professionals i.e</p>
        <div className='flex flex-col font-bold'>
          <span>1. Mr.Ahmed Seyal Khilji(MS Management Sciences) as CEO PSEI</span>
          <span>2. Mr Arbab Naseeb Ullah Kasi(MS HR)</span>
          <span>3. Mr Manzoor Hussain (MS Environmental sciences)</span>
          <span>4. Dr Nabeel Ul Huq (PhD Economics)</span>
          <span>5. Dr Hadi Hassan Khan (PhD Management Sciences)</span>
          <span>6. Mr Kamal Khilji (MS Computer Science)</span>
        </div>
        <p>who believes in teamwork and discipline.
          Quetta, capital of Balochistan, still lacks in different fields of life due to very low literacy rate and substandard education level. PEARL Satellite aims to provide facilities in-order to enhance and improve the lower level of life through modern education. These facilities will be extended throughout Balochistan in terms of technical education.
          In a rapidly evolving world, PEARL Satellite Educational Institute is constantly innovating and updating the learning environment with the need and age of Technical Education & INFORMATION TECHNOLOGY.
          PEARL Satellite dares to take lead by offering its best faculty team and supportive learning to the community. By the Grace of Almighty Allah and the cooperation of the community, we are serving and training people of our nation successfully. PEARL Satellite with its highly Professional & educated faculty, richly qualified management, and the most experienced advisory committee is earning stable standard in the field of Schooling, management sciences, computer sciences, Information and communication professional education.
          Reels</p>
        <div className='flex space-x-5 justify-center items-center p-2'>
          <div className='p-2 flex space-x-2 items-center'>
            <img className='h-7' src='https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/poZ_P5BwYaV.png' />
            <div className='flex  flex-col '>
              <h1>Pearl Satellite Educational Institute, Quetta, Pakistan, 87500</h1>
              <p>Address</p>
            </div>
          </div>
          <div className='p-2 flex space-x-2 items-center'>
            <img className='h-7' src='https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/mxbGn5aKz1f.png' />
            <div className='flex  flex-col '>
              <h1>(081) 2440871</h1>
              <p>Mobile</p>
            </div>
          </div>
          <div className='p-2 flex space-x-2 items-center'>
            <img className='h-7' src='https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/VtfpQ9pmUXR.png' />
            <div className='flex  flex-col '>
              <h1>pearl.satellite@gmail.com</h1>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
