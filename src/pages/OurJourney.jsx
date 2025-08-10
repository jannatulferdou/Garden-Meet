import React from 'react';
import { FaSeedling, FaUsers, FaAward, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router';

const events = [
  {
    date: 'Spring 2018',
    title: 'The Seed Was Planted',
    description:
      'Founded by a group of gardening enthusiasts who wanted to create a platform to share their passion and knowledge.',
    icon: <FaSeedling />,
    position: 'left',
  },
  {
    date: 'Summer 2019',
    title: 'First 1,000 Members',
    description:
      'Our community reached its first major milestone with passionate gardeners joining from all over the country.',
    icon: <FaUsers />,
    position: 'right',
  },
  {
    date: 'Spring 2020',
    title: 'New Features Bloomed',
    description:
      'Launched our mobile app and interactive features including plant care reminders and community forums.',
    icon: <FaLeaf />,
    position: 'left',
  },
  {
    date: 'Fall 2022',
    title: 'National Recognition',
    description:
      'Awarded "Best Gardening Community Platform" by the National Horticultural Society for our innovative approach.',
    icon: <FaAward />,
    position: 'right',
  },
  {
    date: 'Today',
    title: 'Growing Stronger',
    description:
      'Over 50,000 active members sharing tips, 10,000+ gardening guides, and a thriving community of plant lovers.',
    icon: <FaSeedling />,
    position: 'left',
  },
];

const OurJourney = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-900 mb-4 tracking-tight">
            Our Gardening Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From a small seed of an idea to a thriving community of plant lovers.
          </p>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute w-1 bg-green-100 h-full left-1/2 transform -translate-x-1/2" />

          <div className="space-y-20 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-10">
            {events.map((event, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col items-center ${
                  event.position === 'left'
                    ? 'sm:items-end sm:justify-center'
                    : 'sm:items-start sm:justify-center sm:col-start-2'
                }`}
              >
                <div
                  className={`w-full max-w-md bg-white p-6 rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02] ${
                    event.position === 'left' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className="flex items-center mb-2 text-green-900">
                    <div className="text-2xl mr-2">{event.icon}</div>
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>

                
                <div className="absolute left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-[-12px] sm:top-1/2 sm:transform sm:-translate-y-1/2 w-6 h-6 bg-green-800 border-4 border-white rounded-full z-10"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-extrabold text-green-900 mb-4">Join Our Growing Community</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Whether you're a seasoned gardener or just starting out, there's a place for you in our community.
          </p>
          <Link to='/share-tips'>
          <button className="px-8 py-3 cursor-pointer bg-green-900 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition duration-200">
            Share Your Gardening Story
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
