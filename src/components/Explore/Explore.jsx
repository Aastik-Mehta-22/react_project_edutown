import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

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
            <div>Explore</div>
        </SignedIn>
  </>
    
  )
}

export default Explore