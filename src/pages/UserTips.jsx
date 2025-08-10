import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Provider/AuthProvider';
import { FaEdit, FaTrash, FaEye, FaEyeSlash, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import Loading from './Loading';

const UserTips = () => {
  const { user } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`https://gardening-server-azure.vercel.app/tips?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => {
          
          setTips(data);
          console.log(data);
          
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching tips:", err);
          setLoading(false);
        });
    }
  }, [user]);
  // console.log(user);
  

  const handleDelete = async (id) => {
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    // deleteing

    fetch(`https://gardening-server-azure.vercel.app/tips/${id}`, {
        method: 'DELETE',

    }).then(res=>res.json()).then(data=>{
        if(data.deletedCount){
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    const remainingTips= tips.filter(tip=>tip._id!==id);
    setTips(remainingTips)

        }
        
    })
    
  }
});
  };

  

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 my-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-800 flex gap-2"><FaLeaf></FaLeaf> My Garden Tips</h1>

        <Link to='/share-tips'>

        <button 
         
          className="bg-green-900 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          + Add New Tip
        </button>
        </Link>
        
      </div>

      {tips.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">Plant Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tips.map(tip => (
                <tr key={tip._id} className="hover:bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{tip.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{tip.plantType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {tip.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {tip.availability === 'Public' ? (
                        <FaEye className="text-green-800 mr-1" />
                      ) : (
                        <FaEyeSlash className="text-gray-500 mr-1" />
                      )}
                      <span className="text-sm text-gray-600">{tip.availability}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link to={`/update-tips/${tip._id}`}>
                      <button
                      
                      className="text-green-800 cursor-pointer mr-4"
                      title="Edit"
                    >
                      <FaEdit className="inline" />
                    </button>
                    </Link>
                  
                    <button
                      onClick={() => handleDelete(tip._id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <FaTrash className="inline" />
                    </button>
                    <Link to={`/tips-details/${tip._id}`}>
                    <button className='text-green-800 cursor-pointer ml-4'>
                      <FaEye className='inline'></FaEye>
                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <p className="text-gray-500 mb-4">You haven't shared any tips yet.</p>
          <Link to='/share-tips'>
          <button
            
            className="bg-green-700 cursor-pointer text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Share Your First Tip
          </button>
          </Link>
          
        </div>
      )}
    </div>
  );
};

export default UserTips;