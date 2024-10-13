// EventCard.js
import React from 'react';
import { NavLink } from 'react-router-dom';



const EventCard = ({ title, date, description, urlLink}) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">{date}</p>
        <p className="text-gray-700 mb-6">{description}</p>
        {/* <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          <Link></Link>
          🌟 Check out here 🌟
        </button> */}
        <NavLink
                to={urlLink}
          
        >
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >

                Let's Go 🚀
            
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default EventCard;
