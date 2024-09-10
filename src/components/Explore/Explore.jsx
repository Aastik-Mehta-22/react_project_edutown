import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import ExploreItems from '../ExploreItems/ExploreItems';


const Explore = () => {

    const handleRegister = () => {
        alert('Registred Successfully!');
      };
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
                
            </div>
            <div className='flex items-center justify-center mb-6 gap-2 flex-wrap'>
                   
                    <ExploreItems title="Events Updates" navigate="events" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhDJxqIAosTGOLOY1T14I3ZuCVS-3JJD7Pg&s"/>
                    <ExploreItems title="Manage Your Tasks" navigate="todos" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiCDR1aAfYhj1S4CKCLHmE-GKbXTgRviGyw&s"/>
            </div>

                
                

               

        </SignedIn>
  </>
    
  )
}

export default Explore