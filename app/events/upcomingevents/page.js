import EventPictureBox from "@/app/components/EventPictureBox"
import EventCard from "@/app/components/EventCard";
export default function page() {
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
        <h1 className="text-2xl text-center">Upcoming Events</h1>
            <div className='flex flex-wrap justify-center'>
                {events.map((event)=>(
                    // <EventCard key={event.img} text={event.text} img={event.img}/>
                    <EventPictureBox key={event.img} eventName={event.text} pic={event.img} year={event.year} />
                ))}
{/* 
                <EventPictureBox eventName={"MIC Function 2"} year={2024} pic={"/02.jpg"}/>
                <EventPictureBox eventName={"Happy New Year"} year={2027} pic={"/01.jpg"}/>
                <EventPictureBox eventName={"TERMS Function"} year={2026} pic={"/food.jpg"}/> */}

            </div>
            
        </>
    )
}
