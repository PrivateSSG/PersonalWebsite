import EventPictureBox from "@/app/components/EventPictureBox"
export default function page() {
    return (
        <>
        <h1 className="text-2xl text-center">Previous Events</h1>
            <div className='flex flex-wrap justify-center'>

                <EventPictureBox eventName={"tribe function"} year={2019} pic={"/food.jpg"}/>
                <EventPictureBox eventName={"Memory function"} year={2018} pic={"/bg.jpg"}/>
                <EventPictureBox eventName={"Kings function"} year={2017} pic={"/about_us_4.jpg"}/>

            </div>
            
        </>
    )
}
