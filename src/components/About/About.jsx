import React from "react";
import Title from "../Title/Title.jsx";
import Program from "../Program/Program.jsx";
import Faq from "../Faq/Faq.jsx";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Your One Stop Solution
            </h2>
            <p className="mt-6 text-gray-600">
              <span class="text-blue-700 font-bold text-xl tracking-wide">
                Edutown
              </span>{" "}
              , your one-stop solution for all educational resources and
              opportunities! At EduTown, we believe in empowering students with
              the right tools and knowledge to excel in their academic and
              professional journeys. We go beyond just providing educational
              resources; we also connect you with a plethora of opportunities
              such as hackathons, internships, workshops, and much more.
            </p>
            <p className="mt-4 text-gray-600">
              Join the thousands of users who have already experienced the power
              of Edutown. Say goodbye to scattered sticky notes and resources
              google for activities , and hello to a more organized, efficient,
              and productive you.
            </p>
          </div>
        </div>
      </div>
      <Title subTitle="WHAT WE OFFER" title="Programs" />
        <Program />
        <Faq />
    </div>
  );
}
