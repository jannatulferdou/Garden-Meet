import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Loading from './Loading';

const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [activeBtn, setActiveBtn] = useState('active');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGardeners = async () => {
      try {
        const response = await fetch('https://gardening-server-azure.vercel.app/gardeners');
        const data = await response.json();
        setGardeners(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gardeners:', error);
        setLoading(false);
      }
    };

    fetchGardeners();
  }, []);

  const filteredGardeners = gardeners.filter(gardener => 
    activeBtn === 'active' ? gardener.status === 'active' : gardener.status === 'inactive'
  );

  if (loading) {
    return (
     <Loading></Loading>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gardening Experts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the professionals who will bring your garden dreams to life
          </p>
        </div>

        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveBtn('active')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeBtn === 'active' ? 'bg-green-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Active Gardeners
            </button>
            <button
              onClick={() => setActiveBtn('inactive')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${activeBtn === 'inactive' ? 'bg-green-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Inactive Gardeners
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGardeners.map((gardener) => (
            <div 
              key={`${gardener.email}-${gardener.status}`}
              className="bg-green-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              
              <div className="relative h-48 bg-gradient-to-r from-green-700 to-green-900">
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden shadow-xl">
                    <img 
                      src={gardener.photoUrl} 
                      alt=''
                      className="w-full h-full object-cover"
                     
                    />
                  </div>
                </div>
              </div>

              
              <div className="pt-20 pb-6 px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-1">{gardener.name}</h2>
                <p className="text-green-800 font-medium">{gardener.speciality}</p>
                <div className="flex items-center justify-center mt-3 text-gray-500">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{gardener.location}</span>
                </div>

                
                <div className="flex justify-center space-x-4 my-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    {gardener.experience}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {gardener.totalSharedTips} Tips
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{gardener.description}</p>

                {/* Status Badge */}
                {gardener.status === 'inactive' && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gray-400 rounded-full">
                      Currently Inactive
                    </span>
                  </div>
                )}
              </div>

              
              <div className="px-6 pb-6 ">

                <Link to={`/gardeners/${gardener._id}`}>
                <button className="btn w-full px-10 bg-green-900 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                  View Profile
                </button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreGardeners;