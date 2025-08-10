import React from 'react';
import { GoStarFill } from 'react-icons/go';
import { MdLocationPin, MdOutlineReviews } from 'react-icons/md';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
    const { id, title, imageUrl, price, location, rating, reviews } = service;

    return (
        <div className="w-full max-w-xs bg-green-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group">
            
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            
                <div className="absolute top-3 right-3 bg-green-50 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-200">
                    <span className="font-bold text-green-900 text-sm">৳{price}</span>
                </div>
            </div>

          
            <div className="p-4">
                
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-800 ">{title}</h3>
                    <div className="flex items-center bg-amber-50 px-2 py-1 rounded-full">
                        
                        <GoStarFill className="w-4 h-4 text-amber-500"></GoStarFill>
                        <span className="ml-1 text-sm font-medium">{rating}</span>
                    </div>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                    
                    <MdLocationPin className="w-4 h-4 mr-1 text-green-800"></MdLocationPin>
                    <span className="text-sm truncate">{location}</span>
                </div>

        
                <div className="flex justify-between items-center border-t-1 border-green-200 p-4 border-dashed">
                    <span className="text-xs text-gray-500 flex"><MdOutlineReviews className='relative top-1 right-1'></MdOutlineReviews> {reviews} reviews</span>
                    <Link to={`/serviceDetails/${id}`}>
                    <button className=" btn px-4 py-2 bg-green-900 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-sm">
                        Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;