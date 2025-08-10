
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Gardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch('https://gardening-server-azure.vercel.app/active-gardeners')
      .then(res => res.json())
      .then(data => setGardeners(data))
      .catch(error => console.error('Error fetching gardeners:', error));
  }, []);

  return (
    <div className="min-h-screen bg-white mb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-700">
            Our Active Gardening Experts
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the talented and experienced gardeners who will bring your garden dreams to life.
          </p>
        </div>

       
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {gardeners.map((gardener) => (
            <div 
              key={gardener._id} 
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              
              <div className="absolute opacity-5"></div>
              
              
              <div className="relative bg-green-50 backdrop-blur-sm h-full flex flex-col">
                
                <div className="relative h-40 bg-gradient-to-r from-green-900 to-green-700">
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <div className="h-35 w-35 rounded-full border-4 border-white overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={gardener.photoUrl} 
                        alt=''
                        className="w-full h-full object-cover"
                        
                      />
                    </div>
                  </div>
                </div>

               
                <div className="pt-20 pb-6 px-6 flex-1 flex flex-col">
                  <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">{gardener.name}</h2>
                    <p className="text-green-800 font-medium">{gardener.speciality}</p>
                    <div className="flex items-center justify-center mt-2 text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{gardener.location}</span>
                    </div>
                  </div>

                  
                  <div className="flex justify-center mb-5">
                    <span className="px-4 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full shadow-inner">
                      {gardener.experience} Experience
                    </span>
                  </div>

                  
                  <p className="text-gray-600 text-center mb-6 flex-1">{gardener.description}</p>

             
                </div>

                
                <div className="px-6 pb-8">
                  <Link to={`/gardeners/${gardener._id}`}>
                  <button className=" btn w-full rounded-lg bg-green-900 text-white font-medium hover:bg-green-700">
                    View Profile
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gardeners;