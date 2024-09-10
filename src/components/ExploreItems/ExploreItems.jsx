// ExploreCard.js
import React from 'react';
import { NavLink } from 'react-router-dom';
const ExploreItems = ({ image, title, navigate }) => {
  return (
    <div className="max-w-sm mx-6 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 mt-10">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <NavLink
                to={`/explore/${navigate}`}
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

export default ExploreItems;
