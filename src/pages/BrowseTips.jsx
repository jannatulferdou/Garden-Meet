import React, { useEffect, useState } from 'react';
import { FaEdit, FaLeaf, FaRegEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Correct import
import Swal from 'sweetalert2';

const BrowseTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('https://gardening-server-azure.vercel.app/tips')
      .then(res => res.json())
      .then(data => setTips(data));
  }, []);
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

  return (
    <div className="my-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center flex items-center justify-center gap-2">
        <FaLeaf className="text-green-900" />
        Browse Gardening Tips
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full min-w-[700px]">
          <thead>
            <tr className="bg-base-200 text-base font-semibold">
              <th>No.</th>
              <th>User</th>
              <th>Title</th>
              <th>Plant</th>
              <th>Difficulty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr key={tip._id} className="hover">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                        <img src={tip.userPhotoUrl} alt="User" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{tip.userName}</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">{tip.title}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      src={tip.imageUrl}
                      alt="Plant"
                      className="w-10 h-10 rounded object-cover"
                    />
                    <span>{tip.plantType}</span>
                  </div>
                </td>
                <td>
                  <span className="badge text-green-800 bg-green-100">
                    {tip.difficulty}
                  </span>
                </td>
                <td className="space-x-2">
                  <Link to={`/update-tips/${tip._id}`}>
                    <button className="btn btn-sm text-green-800">
                      <FaEdit />
                    </button>
                  </Link>
                  <Link to={`/tips-details/${tip._id}`}>
                    <button className="btn btn-sm text-green-800">
                      <FaRegEye />
                    </button>
                  </Link>
                  <button
                       onClick={() => handleDelete(tip._id)}
                          className=" btn btn-sm text-red-600 hover:text-red-900"
                     title="Delete"
                  >
                       <FaTrash className="inline" />
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tips.length === 0 && (
          <p className="text-center py-4 text-gray-500">No tips found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseTips;
