import React from 'react'
import Title from '../Title/Title'
import EventCard from '../EventCard/EventCard'

function Events() {
  return (
    <div>
        <Title  title="Events and more" />
                <div className='flex justify-center items-center gap -2 flex-wrap '>
                    <EventCard
                        title="Hackathon 2024"
                        date="October 15, 2024"
                        description="Join us for an exciting 24-hour hackathon with awesome prizes and networking opportunities."
                        
                    />
                    <EventCard
                        title="Tech Conference 2024"
                        date="November 5, 2024"
                        description="A conference featuring industry leaders, workshops, and networking opportunities."
                       
                    />
                    <EventCard
                        title="Tech Conference 2024"
                        date="November 5, 2024"
                        description="A conference featuring industry leaders, workshops, and networking opportunities."
                        
                    />
                </div>
    </div>
  )
}

export default Events