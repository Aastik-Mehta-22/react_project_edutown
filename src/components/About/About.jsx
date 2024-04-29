import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.ibb.co/5BCcDYB/Remote2.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        <span class="text-blue-700 font-bold text-xl tracking-wide">TaskZen</span>  isn't just 
                        another task manager; it's your ultimate productivity companion, meticulously crafted to 
                        streamline your workflow and empower you to achieve more. Whether you're a busy 
                        professional, a diligent student, or a proactive homemaker, TaskZen is here to revolutionize the way you manage your tasks.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Join the thousands of users who have already experienced the power of TaskZen. Say goodbye to scattered 
                            sticky notes and overwhelming to-do lists, and hello to a more organized, efficient, and productive you. 


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}