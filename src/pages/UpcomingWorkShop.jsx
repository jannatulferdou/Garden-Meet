import React, { useState } from 'react';
import Tanvir from '../assets/tanvir.jpg';
import Fatema from '../assets/fatema.jpg';
import { RxCross2 } from "react-icons/rx";
import { FaChalkboardTeacher, FaLeaf, FaRegCalendarCheck } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const workshops = [
  {
    id: 1,
    title: 'Soil Preparation & Composting',
    description:
      'A healthy garden starts with healthy soil. In this in-depth workshop, you’ll learn essential techniques to analyze your soil’s health, balance its pH, and enrich it with organic matter. We’ll also guide you through creating compost using everyday kitchen and yard waste, helping you build a sustainable and eco-friendly gardening routine. Whether you’re growing vegetables or flowers, this session will give your plants the foundation they need to thrive.',
    date: 'June 15, 2025',
    location: 'Green Thumb Garden Center',
    instructor: {
      name: 'Tanvir Hasan',
      bio: 'Agriculture Specialist & Urban Farming Consultant',
      image: Tanvir,
    },
    tag: 'Beginner Friendly',
  },
  {
    id: 2,
    title: 'Vertical Gardening for Small Spaces',
    description:
      'Limited space doesn’t mean limited possibilities! In this engaging session, you’ll explore the art of vertical gardening—perfect for balconies, rooftops, and tiny backyards. We’ll show you how to build and maintain vertical planters, select the right plants, and maximize sunlight exposure. From herb towers to hanging baskets, discover creative and practical methods to grow lush, productive gardens even in compact urban environments. Ideal for apartment dwellers and busy city gardeners.',
    date: 'July 5, 2025',
    location: 'Urban Greens Workshop Hub',
    instructor: {
      name: 'Fatema Khatun',
      bio: 'Sustainable Garden Designer & Educator',
      image: Fatema,
    },
    tag: 'Urban Gardening',
  },
];


const UpcomingWorkshop = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const openModal = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWorkshop(null);
  };

  return (
    <div className="bg-white mb-20 px-6 lg:px-20">
    
      <div className="text-center mb-16">
        <h2 className="lg:text-5xl text-3xl font-extrabold text-green-900 drop-shadow-sm ml-10 flex gap-4 lg:ml-50">
          <FaLeaf></FaLeaf> Upcoming Gardening Workshops
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Join our expert-led workshops to cultivate your gardening knowledge and skills.
        </p>
      </div>

      
      <div className="grid gap-14 max-w-6xl mx-auto">
        {workshops.map((workshop, index) => (
          <div
            key={workshop.id}
            className={`bg-green-50 rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            } hover:shadow-green-50 transition`}
          >
            <div className="lg:w-1/2 h-[300px] lg:h-auto overflow-hidden">
              <img
                src={workshop.instructor.image}
                alt=''
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            <div className="lg:w-1/2 p-8 flex flex-col justify-center space-y-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full w-fit">
                {workshop.tag}
              </span>
              <h3 className="text-3xl font-bold text-green-800">{workshop.title}</h3>
              <p className="text-gray-700">{workshop.description}</p>

              <ul className="text-sm text-gray-600 space-y-1">
                <li className='flex'><FaRegCalendarCheck className='w-4 h-4 mr-2'></FaRegCalendarCheck> <strong>Date:</strong> {workshop.date}</li>
                <li className='flex'><MdLocationOn className='w-5 h-5 mr-1'></MdLocationOn><strong>Location:</strong> {workshop.location}</li>
                <li className='flex'><FaChalkboardTeacher className='w-4 h-4 mr-2'></FaChalkboardTeacher> <strong>Instructor:</strong> {workshop.instructor.name}</li>
              </ul>

              <p className="italic text-sm text-gray-500 mt-1">“{workshop.instructor.bio}”</p>

              <button
                onClick={() => openModal(workshop)}
                className="mt-4 bg-green-900 btn hover:bg-green-700 text-white px-6 py-2 rounded-xl font-medium transition"
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedWorkshop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-4 text-green-800">
              Register for {selectedWorkshop.title}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Registration submitted!');
                closeModal();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
                required
              />
              <button
                type="submit"
                className="btn bg-green-900 text-white w-full"
              >
                Submit
              </button>
            </form>
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              <RxCross2></RxCross2>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingWorkshop;



