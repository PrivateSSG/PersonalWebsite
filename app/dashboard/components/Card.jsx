import React from 'react'

const Card = ({children}) => {
  return (
    <div className='shadow-md py-6 px-6 bg-white  rounded-md mb-6'>
        {children}
    </div>
  )
}

export default Card