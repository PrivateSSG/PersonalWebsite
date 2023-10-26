import EventPictureBox from '@/app/components/EventPictureBox'
import EventCard from '@/app/components/EventCard';
export default function allevents() {
  const events = [
    {
      img: '/december.jpg',
      text: 'Celebrating 9 Years of Success!',
      year: "1st December 2023"
    },
    {
      img: '/result.jpg',
      text: 'Final Result Day',
      year: "9th December 2023"
    },
  ];
  return (
    <>
      <div>
        <h1 className='text-center text-2xl'>All Events</h1>
        <div className='flex flex-wrap justify-center'>

        {events.map((event)=>(
          <EventPictureBox key={event.img} eventName={event.text} year={event.year} pic={event.img} />
        ))}
          {/* <EventPictureBox eventName="Happy New YEar" year="2027" pic={"/01.jpg"} />
          <EventPictureBox eventName="new Function" year="2026" pic={"/food.jpg"} />
          <EventPictureBox eventName="Function" year="1926" pic={"/kids.jpg"} /> */}

        </div>
      </div>
    </>
  )
}
