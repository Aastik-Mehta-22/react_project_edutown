import React from 'react';

const handleNotify = () => {
    alert("You will be notified via mail when our app is launch!🚀")
}
const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <img 
          src="https://images.pexels.com/photos/5498387/pexels-photo-5498387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Coming Soon" 
          className="mb-6 w-48 h-48 object-cover mx-auto" 
        />
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          Our App is Coming Soon!
        </h1>
        <p className="text-gray-600 mb-6">
          We're working hard to bring you the best educational experience.
          Stay tuned for updates and get ready to access your study materials and roadmaps like never before!
        </p>
        <button
        onClick={handleNotify}
        >
        <a 
          href="#"
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Notify Me
        </a>
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
