import React from "react";
import Title from "../Title/Title.jsx";
import Program from "../Program/Program.jsx";
import Faq from "../Faq/Faq.jsx";
import Testinomials from "../Testinomials/Testinomials.jsx";
import { Link } from 'react-router-dom';
import { FaDownload, FaRocket, FaInfoCircle } from 'react-icons/fa'; // Importing icons




export default function LandingPage() {
  return (
    <div className="py-16 bg-white">
                {/* <div className="bg-white text-gray-900  flex flex-col"> */}


          <main className="flex-grow flex items-center justify-center px-4 py-8">
            <div className="container mx-auto text-center">
              <div className="mb-8 mt-8">
                <h2 className="text-3xl font-semibold text-blue-700 mb-4">Welcome to EduTown</h2>
                <p className="text-lg text-gray-700">
                  Your one-stop solution for all educational resources and opportunities! At EduTown, we believe in empowering students with the right tools and knowledge to excel in their academic and professional journeys. We go beyond just providing educational resources; we also connect you with a plethora of opportunities such as hackathons, internships, workshops, and much more.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link to="/download" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300">
                  <FaDownload className="text-xl" />
                  <span>Download Our App</span>
                </Link>
                <Link to="/explore" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-green-700 transition-colors duration-300">
                  <FaRocket className="text-xl" />
                  <span>Explore</span>
                </Link>
                <Link to="/about" className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors duration-300">
                  <FaInfoCircle className="text-xl" />
                  <span>About Us</span>
                </Link>
              </div>
            </div>
          </main>
        {/* </div> */}

      <Title subTitle="WHAT WE OFFER" title="Your Learning Hub" />
        <Program />
        <Faq />
        {/* <Title subTitle="WHAT OUR STUDENT SAYS " title="Our Reviews" />
        <Testinomials /> */}
    </div>
  );
}

