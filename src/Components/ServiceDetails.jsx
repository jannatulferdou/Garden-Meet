import React from 'react';
import { FaPhoneAlt, FaStar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { MdLocationPin, MdOutlineEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
   const navigate = useNavigate();

  let ServiceDetails;

  if (Array.isArray(details)) {
    ServiceDetails = details.find(detail => detail.id === id);
  } else if (typeof details === 'object' && details !== null && details.id === id) {
    ServiceDetails = details;
  } else {
    ServiceDetails = null;
  }

  if (!ServiceDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8 bg-green-50 rounded-xl shadow-lg max-w-md">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Service Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the gardening service you're looking for.</p>
          <Link href="/" className="btn bg-green-900 hover:bg-green-700 text-white">
            Browse All Gardening Services
          </Link>
        </div>
      </div>
    );
  }

  const { 
    _id,
    title, 
    imageUrl, 
    price, 
    location, 
    rating, 
    reviews,
    description,
    category,
    tags,
    duration,
    contactPhone,
    contactEmail,
    available
  } = ServiceDetails;

  const handleBookService = () => {
    if (available) {
      
      navigate('/my-bookings', { state: { bookedService: ServiceDetails } });
    }
  };


  return (
    <div key={_id} className="min-h-screen bg-white my-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-green-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            <div className="relative h-80 lg:h-full">
              <img
                src={imageUrl}
                alt=''
                className="w-150 h-163 object-cover"
              />
              
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {available ? 'Available' : 'Unavailable'}
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-gray-100">
                <span className="font-bold text-green-800 text-lg">৳{price}</span>
              </div>
            </div>

            
            <div className="p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{category}</span>
                {tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">#{tag}</span>
                ))}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-5">{title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center bg-amber-50 px-3 py-1 rounded-full">
                  
                  <FaStar className="w-5 h-5 text-amber-500 mr-1"></FaStar>
                  <span className="font-medium">{rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  
                  <IoMdTime className="w-5 h-5 mr-1 text-green-800"></IoMdTime>
                  <span>{duration}</span>
                </div>
              </div>

              <div className="flex items-center mb-6">
               
                <MdLocationPin className="w-5 h-5 mr-2 text-green-800"></MdLocationPin>
                <span className="text-lg font-semibold text-gray-700">{location}</span>
              </div>

              <div className=" text-gray-600 mb-8">
                <p className="text-gray-800 font-medium mb-3">{description}</p>
                <p>
                  This service includes professional installation and setup. Our team of gardening experts will ensure your {category.toLowerCase()} is properly installed and you receive all necessary guidance.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      
                      <FaPhoneAlt className="w-4 h-4 text-gray-500 mr-2"></FaPhoneAlt>
                      <span>{contactPhone}</span>
                    </div>
                    <div className="flex items-center">
                     
                      <MdOutlineEmail className="w-5 h-5 text-gray-500 mr-2 relative top-1"></MdOutlineEmail>
                      <span>{contactEmail}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button onClick={handleBookService}
                    className={`w-full py-3 btn text-white font-medium rounded-lg transition-all duration-200 ${available ? 'bg-green-900 ' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!available}
                  >
                    {available ? 'Book This Service' : 'Currently Unavailable'}
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;