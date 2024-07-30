import React from "react";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-transparent rounded-lg p-4 mb-2 shadow-md">
          <Accordian
            title=" What is EduTown?"
            answer="EduTown is a comprehensive platform designed to provide students with a wide range of educational resources, including study materials, coding tutorials, hackathon links, internships, and job opportunities. Our goal is to be your one-stop solution for all your educational needs."
          />
        </div>
        <div className="bg-transparent rounded-lg p-4 mb-2 shadow-md">
          <Accordian
            title=" Is EduTown free to use?"
            answer="Yes, EduTown is free to use. We believe in providing accessible education to everyone. However, certain premium features and exclusive content may require a subscription."
          />
        </div>
        <div className="bg-transparent rounded-lg p-4 mb-2 shadow-md">
          <Accordian
            title=" How can I stay updated with the latest events and opportunities?"
            answer="To stay updated with the latest events, hackathons, internships, and other opportunities, you can subscribe to our newsletter or follow us on social media. We regularly post updates and announcements to keep our community informed."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
