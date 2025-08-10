import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Service = ({ services }) => {
     const [visibleService, setVisibleService] = useState(8);
    return (
        <div className="py-12 my-20 ">
            <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold text-green-900 sm:text-4xl">
                       
                          <Typewriter
      words={['Our Wide Variety of Gardening Services']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Discover our exceptional services tailored for you
                    </p>
                </div>
                
               
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {services.slice(0, visibleService).map((service, index) => (
                        <ServiceCard 
                            key={index} 
                            service={service}
                            className="transition-all duration-300 hover:scale-[1.02]"
                        />
                    ))}
                </div>

                
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-900 hover:bg-green-700 " onClick={() => setVisibleService(services.length)}>
                        View All Services
                        
                        <FaArrowRight className="ml-3 -mr-1 w-5 h-5"></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;