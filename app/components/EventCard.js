// EventCard.js
import React from 'react';

const EventCard = ({ img, text }) => {
  return (
    <div className='flex flex-col'>
      <img src={img} className='h-[300px] w-[450px]' alt="" />
      <div className='flex gap-3 items-center'>
        <h1 className='text-xl w-[334px]'>{text}</h1>
      </div>
    </div>
  );
};
export default EventCard;