import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';

const ShareTips = () => {
  const { user } = useContext(AuthContext);
  const {id}=useParams();

  const [formData, setFormData] = useState({
    title: '',
    plantType: '',
    difficulty: 'Easy',
    description: '',
    imageUrl: '',
    category: 'Plant Care',
    availability: 'Public',
    isTrending: false,
    userName: user?.displayName || '',
    userEmail: user?.email || '',
    userPhotoUrl: user?.photoURL || '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'isTrending' ? value === 'true' : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://gardening-server-azure.vercel.app/tips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, likes: 0, comments: 0, createdAt: new Date() }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Your gardening tip was added successfully!',
            icon: 'success',
          });
        }
      });
  };

useEffect(() => {
  if (id) {
    fetch(`https://gardening-server-azure.vercel.app/tips/${id}/like`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }
}, [id]);

  return (
    <div className='my-20'>
      <h2 className="text-5xl font-bold text-green-900 text-center mb-10">Share a Garden Tip</h2>
      <div className="max-w-5xl mx-auto p-10 bg-green-50 shadow-md rounded">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <fieldset className="p-4">
              <label className="label">Post Title</label>
              <input name="title" type="text" onChange={handleChange} required className="input w-full" placeholder="Title" />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Plant Type</label>
              <input name="plantType" type="text" onChange={handleChange} required className="input w-full" placeholder="Plant Type / Topic" />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Tips Difficulty</label>
              <select name="difficulty" onChange={handleChange} className="select w-full" defaultValue="Easy">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Photo URL</label>
              <input name="imageUrl" type="url" onChange={handleChange} className="input w-full" placeholder="Image URL" />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Tips Category</label>
              <select name="category" onChange={handleChange} className="select w-full" defaultValue="Plant Care">
                <option>Plant Care</option>
                <option>Composting</option>
                <option>Vertical Gardening</option>
              </select>
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Tips Availability</label>
              <select name="availability" onChange={handleChange} className="select w-full" defaultValue="Public">
                <option>Public</option>
                <option>Hidden</option>
              </select>
            </fieldset>

            <fieldset className="p-4">
              <label className="label">Is Trending</label>
              <select name="isTrending" onChange={handleChange} className="select w-full">
                <option value={false}>false</option>
                <option value={true}>true</option>
              </select>
            </fieldset>

            <fieldset className="p-4">
              <label className="label">User Name</label>
              <input name="userName" value={formData.userName} readOnly className="input w-full bg-gray-100" />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">User Email</label>
              <input name="userEmail" value={formData.userEmail} readOnly className="input w-full bg-gray-100" />
            </fieldset>

            <fieldset className="p-4">
              <label className="label">User Photo URL</label>
              <input name="userPhotoUrl" value={formData.userPhotoUrl} readOnly className="input w-full bg-gray-100" />
            </fieldset>
          </div>

          <fieldset className="p-4">
            <label className="label">Tips Description</label>
            <textarea name="description" onChange={handleChange} required className="textarea w-full" placeholder="Description" />
          </fieldset>

          <button type="submit" className="btn w-full bg-green-900 text-white">Share Your Tips</button>
        </form>
      </div>
    </div>
  );
};

export default ShareTips;
