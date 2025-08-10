import { useEffect, useState } from 'react';
import { FaArrowLeft, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link } from 'react-router';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const GardenerProfile = () => {
  const { id } = useParams();
 
  const [gardener, setGardener] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGardener = async () => {
      try {
        const response = await fetch(`https://gardening-server-azure.vercel.app/gardeners/${id}`);
        const data = await response.json();
        setGardener(data);
      } catch (error) {
        console.error('Error fetching gardener:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGardener();
  }, [id]);

  if (loading) {
    return (
      <Loading></Loading>
    );
  }



  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
       

        <div className="bg-green-50 rounded-xl shadow-lg overflow-hidden">
          
          <div className="relative h-48 bg-gradient-to-r from-green-700 to-green-900">
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
              <div className="h-40 w-40 rounded-full border-4 border-white overflow-hidden shadow-xl">
                <img 
                  src={gardener.photoUrl} 
                  alt={gardener.name}
                  className="w-full h-full object-cover"
                  
                />
              </div>
            </div>
          </div>

          
          <div className="pt-24 pb-15 px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{gardener.name}</h1>
              <p className="text-green-800 text-xl font-medium">{gardener.speciality}</p>
              <div className="flex items-center justify-center mt-4 text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{gardener.location}</span>
              </div>
            </div>

            
            <div className="flex justify-center space-x-6 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-800">{gardener.experience}</p>
                <p className="text-gray-500">Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-800">{gardener.totalSharedTips}</p>
                <p className="text-gray-500">Tips Shared</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-800">{gardener.age}</p>
                <p className="text-gray-500">Age</p>
              </div>
            </div>

           
            <div className="max-w-2xl mx-auto mb-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">About</h3>
              <p className="text-gray-600 leading-relaxed">{gardener.description}</p>
            </div>

           
            <div className=" text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3 ml-65 mb-10">
                <div className="flex items-center">
                  
                  <MdOutlineMailOutline className="w-6 h-6 text-green-800 mr-3"></MdOutlineMailOutline>
                  <span className="text-gray-700 hover:text-green-600 transition-colors">
                    {gardener.email}
                  </span>
                </div>
                <div className="flex items-center">
                 
                  <FaPhoneAlt className="w-6 h-6 text-green-800 mr-3"></FaPhoneAlt>
                  <span className="text-gray-700 transition-colors">
                    {gardener.phone}
                  </span>
                </div>
              </div>
            </div>

            
            {gardener.status === 'inactive' && (
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-full">
                  Currently Inactive
                </span>
              </div>
            )}
          </div>
        </div>

         <Link to='/'>
         <button 
         
          className="flex items-center text-green-600 hover:text-green-800 mt-10 transition-colors"
        >
         
          <FaArrowLeft className="w-5 h-5 mr-2"></FaArrowLeft>
          Back to All Gardeners
        </button>
         </Link>
      </div>
    </div>
  );
};

export default GardenerProfile;