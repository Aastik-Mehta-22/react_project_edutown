import React from 'react'
import Title from '../Title/Title'
import EventCard from '../EventCard/EventCard'

function FirstYear() {
  return (
    <div>
        <Title  title="Explore Your Potential"  subTitle="Here you find all the resources including notes , coding questions ,previous year st and much more ....."/>
                <div className='flex justify-center items-center gap -2 flex-wrap '>
                    <EventCard
                        title="Github Repo for first Year"
                        date="Last updated 9,2024"
                        description="Here is the link for github Repository 
                        Dont forget to give it a Star 🌟 "
                        urlLink="https://github.com/Aastik-Mehta-22/edutown_first_year_repo"
                    />
                </div>
    </div>
  )
}

export default FirstYear