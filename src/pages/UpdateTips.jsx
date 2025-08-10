import React, { useContext } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateTips = () => {
  const tipData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
console.log(tipData);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTip = Object.fromEntries(formData.entries());

    // Convert isTrending from string to boolean
    updatedTip.isTrending = updatedTip.isTrending === 'true';
console.log(id);

    fetch(`https://gardening-server-azure.vercel.app/tips/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTip),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Your gardening tip was updated successfully!',
            icon: 'success',
          });
          navigate(`/tips/${id}`);
        } else {
          Swal.fire({
            title: 'No changes were made!',
            icon: 'info',
          });
        }
      });
  };

  return (
    <div className='my-20'>
      <h2 className="text-5xl font-bold text-green-900 text-center mb-10">Update Garden Tip</h2>
      <div className="max-w-5xl mx-auto p-10 bg-green-50 shadow-md rounded">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <fieldset className="p-4">
              <label className="label">Post Title</label>
              <input 
                name="title" 
                type="text" 
                defaultValue={tipData.title}
                required 
                className="input w-full" 
                placeholder="Title" 
              />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Plant Type</label>
              <input 
                name="plantType" 
                type="text" 
                defaultValue={tipData.plantType}
                required 
                className="input w-full" 
                placeholder="Plant Type / Topic" 
              />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Tips Difficulty</label>
              <select 
                name="difficulty" 
                defaultValue={tipData.difficulty}
                className="select w-full"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Photo URL</label>
              <input 
                name="imageUrl" 
                type="url" 
                defaultValue={tipData.imageUrl}
                className="input w-full" 
                placeholder="Image URL" 
              />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Tips Category</label>
              <select 
                name="category" 
                defaultValue={tipData.category}
                className="select w-full"
              >
                <option>Plant Care</option>
                <option>Composting</option>
                <option>Vertical Gardening</option>
                <option>Pest Control</option>
                <option>Soil Preparation</option>
                <option>Watering Techniques</option>
                <option>Indoor Plants</option>
              </select>
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Tips Availability</label>
              <select 
                name="availability" 
                defaultValue={tipData.availability}
                className="select w-full"
              >
                <option>Public</option>
                <option>Hidden</option>
              </select>
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Is Trending</label>
              <select 
                name="isTrending" 
                defaultValue={tipData.isTrending ? 'true' : 'false'}
                className="select w-full"
              >
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </fieldset>

            <fieldset className="p-4">
              <label className="label">User Name</label>
              <input 
                name="userName" 
                defaultValue={tipData.userName || user?.displayName || ''}
                readOnly 
                className="input w-full bg-gray-100" 
              />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">User Email</label>
              <input 
                name="userEmail" 
                defaultValue={tipData.userEmail || user?.email || ''}
                readOnly 
                className="input w-full bg-gray-100" 
              />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">User Photo URL</label>
              <input 
                name="userPhotoUrl" 
                defaultValue={tipData.userPhotoUrl || user?.photoURL || ''}
                readOnly 
                className="input w-full bg-gray-100" 
              />
            </fieldset>
          </div>

          <fieldset className="p-4">
            <label className="label">Tips Description</label>
            <textarea 
              name="description" 
              defaultValue={tipData.description}
              required 
              className="textarea w-full" 
              placeholder="Description" 
            />
          </fieldset>

          <div className="flex justify-end space-x-4 p-4">
            <button 
              type="button" 
              onClick={() => navigate(-1)}
              className="btn px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 btn hover:bg-green-700"
            >
              Update Tip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTips;
