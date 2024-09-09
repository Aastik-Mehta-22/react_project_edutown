import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Title from '../Title/Title';
import Card from '../Card/Card';
import Home from '../Home/Home';

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
                <Title subTitle="Personalized Insights" title="Hand Written Notes" />
            <div className='flex items-center justify-center mb-6 gap-8 flex-wrap'>

                <Card imageLink="https://static.javatpoint.com/fullformpages/images/dbms-full-form3.png" title="Database Management System" />
                <Card imageLink="https://dxknuvztu7bsi.cloudfront.net/2561-shutterstock_559459693-scaled-1693197202540.jpg" title="Operating System"/>
                <Card imageLink="https://chudovo.com/wp-content/uploads/2023/03/reactjs.jpg" title="React.js"/>
                <Card imageLink="https://chudovo.com/wp-content/uploads/2023/03/reactjs.jpg" title="React.js"/>
                <Card imageLink="https://chudovo.com/wp-content/uploads/2023/03/reactjs.jpg" title="React.js"/>
                <Card imageLink="https://chudovo.com/wp-content/uploads/2023/03/reactjs.jpg" title="React.js"/>
                <Card imageLink="https://chudovo.com/wp-content/uploads/2023/03/reactjs.jpg" title="React.js"/>
                <Card imageLink="https://chudovo.com/wp-content/uploads/2023/03/reactjs.jpg" title="React.js"/>

            </div>

                <Home />
                <Title  title="Events and more" />
                <div className='flex justify-center mb-3'>Coming soon...</div>
                <Title  title="Premium Courses" />
                <div className='flex justify-center mb-3'>Launching soon...</div>

        </SignedIn>
  </>
    
  )
}

export default Explore