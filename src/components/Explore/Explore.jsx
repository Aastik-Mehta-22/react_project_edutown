import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import ExploreItems from '../ExploreItems/ExploreItems';


const Explore = () => {

  
  return (
    <>
        <SignedOut>
            <div className="flex items-center justify-center h-screen bg-blue-50">
                    <div className="text-blue-600 text-4xl font-bold text-center p-8 border-4 border-blue-600 rounded-lg shadow-lg">
                        Please Sign In To Continue!
                    </div>
            </div>
        </SignedOut>
        <SignedIn>

            <div className='flex items-center justify-center mb-6 gap-2 flex-wrap'>
                    <ExploreItems title="Handwritten Notes" navigate="notes" image="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg"/>
                    <ExploreItems title="Courses" navigate="courses" image="https://www.questpond.com/img/2.png"/>
                    <ExploreItems title="Roadmaps" navigate="roadmap" image="https://thumbs.dreamstime.com/b/roadmap-word-black-letters-white-tiles-92162237.jpg"/>
            </div>
            <div className='flex items-center justify-center mb-6 gap-2 flex-wrap'>
                    <ExploreItems title="For Chitkara Students" navigate="chitkara" image="https://facultytick.com/wp-content/uploads/2022/07/Chitkara-University.jpg"/>
                    
            </div>
            
        </SignedIn>
  </>
    
  )
}

export default Explore