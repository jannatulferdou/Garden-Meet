import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiMapPin, FiX, FiCheck, FiAlertCircle } from 'react-icons/fi';

const MYBookings = () => {
  const location = useLocation();
  const [bookedServices, setBookedServices] = useState([]);
  const [cancelConfirm, setCancelConfirm] = useState(null);

  useEffect(() => {
    
    if (location.state && location.state.bookedService) {
      const newBookedService = {
        ...location.state.bookedService,
        bookingDate: new Date().toISOString(),
       
      };
      
      setBookedServices(prevServices => {
        if (!prevServices.some(service => service.id === newBookedService.id)) {
          return [...prevServices, newBookedService];
        }
        return prevServices;
      });
      
      // Clear the state from location
      window.history.replaceState({}, document.title);
    }

   
    const savedBookings = localStorage.getItem('gardenBookings');
    if (savedBookings) {
      setBookedServices(JSON.parse(savedBookings));
    }
  }, [location.state]);

  useEffect(() => {
    // Save to localStorage 
    if (bookedServices.length > 0) {
      localStorage.setItem('gardenBookings', JSON.stringify(bookedServices));
    } else {
      localStorage.removeItem('gardenBookings');
    }
  }, [bookedServices]);

  const handleCancelBooking = (idToCancel) => {
    setBookedServices(prevServices => prevServices.filter(service => service.id !== idToCancel));
    setCancelConfirm(null);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50 my-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
       

        {bookedServices.length === 0 ? (
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FiCalendar className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No Bookings Yet</h3>
            <p className="text-gray-600 mb-6">You haven't booked any gardening services yet.</p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-900 hover:bg-green-700 transition-colors duration-200"
            >
              Browse Services
            </Link>
          </div>
        ) : (
          <div className="space-y-4 ">
            {bookedServices.map((service,index) => (
              <div key={index} className="bg-green-50 rounded-xl shadow-sm overflow-hidden border border-gray-200 p-10">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h2>
                          
                        </div>
                        <div>
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-3">
                            {service.category}
                          </span> <br />
                        <span className="text-lg font-bold text-green-800">৳{service.price}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mt-4">
                        <div className="flex items-center text-gray-700">
                          <FiMapPin className="text-gray-500 mr-2 flex-shrink-0" />
                          <span>{service.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <FiClock className="text-gray-500 mr-2 flex-shrink-0" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <FiCalendar className="text-gray-500 mr-2 flex-shrink-0" />
                          <span>Booked on {formatDate(service.bookingDate)}</span>
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </div>
                <div className="">
                      
                      
                        
                        <button
                          onClick={() => setCancelConfirm(service.id)}
                          className="px-4 btn py-2 border border-green-700 rounded-xl font-medium text-green-900 hover:bg-green-100 w-full"
                        >
                          Cancel This Service
                        </button>
                      
                    </div>

                {cancelConfirm === service.id && (
                  <div className="bg-yellow-50 border-t border-yellow-200 p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <FiAlertCircle className="text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm text-yellow-700">
                          Are you sure you want to cancel this booking? This action cannot be undone.
                        </p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => setCancelConfirm(null)}
                          className="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
                        >
                          No, Keep It
                        </button>
                        <button
                          onClick={() => handleCancelBooking(service.id)}
                          className="px-3 py-1 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded"
                        >
                          Yes, Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MYBookings;