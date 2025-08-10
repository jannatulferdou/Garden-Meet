import React, { useEffect, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaCommentDots, FaFire, FaSeedling } from 'react-icons/fa';
import { BsFileEarmarkPost } from "react-icons/bs";
import { Link } from 'react-router';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';

const TipsDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://gardening-server-azure.vercel.app/tips/${id}`)
      .then(res => res.json())
      .then(data => setTip(data));
  }, [id]);

  const handleLike = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://gardening-server-azure.vercel.app/tips/${id}/like`, {
        method: 'PATCH',
      });
      if (res.ok) {
        setTip(prev => ({ ...prev, likes: prev.likes + 1 }));
      }
    } catch (err) {
      console.error('Failed to like the tip:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!tip) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 md:p-10 bg-green-50 shadow-lg rounded-2xl transition duration-300">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:text-blue-800 text-sm font-medium transition"
      >
        ← Go Back
      </button>

      <div className="rounded-xl overflow-hidden shadow">
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      <h1 className="text-3xl font-extrabold mt-6 mb-4 text-gray-900">{tip.title}</h1>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={tip.userPhotoUrl}
          alt=''
          className="w-12 h-12 rounded-full border-2 border-green-900"
        />
        <div>
          <Link>
          <p className="text-lg font-semibold text-gray-800">{tip.userName}</p>
          </Link>
          <p className="text-sm text-gray-500">{tip.userEmail}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <span className="flex gap-1 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
          <FaSeedling className='relative top-0.5'></FaSeedling> Plant: {tip.plantType}
        </span>
        <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
           Difficulty: {tip.difficulty}
        </span>
        <span className="flex gap-1 bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
          <BsFileEarmarkPost className='relative top-0.5'></BsFileEarmarkPost> Posted on: {new Date(tip.createdAt).toLocaleDateString()}
        </span>
        {tip.isTrending && (
          <span className="flex gap-1 bg-pink-100 text-pink-700 text-sm px-3 py-1 rounded-full font-medium">
            <FaFire className='top-1 relative'></FaFire> Trending
          </span>
        )}
      </div>

      <p className="text-gray-700 leading-relaxed text-lg">{tip.description}</p>

      <div className="mt-8 flex flex-wrap items-center gap-6 text-gray-600 text-sm">
        <button
          onClick={handleLike}
          disabled={loading}
          className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition disabled:opacity-50"
        >
         <AiFillLike></AiFillLike> Like ({tip.likes})
        </button>
        <span className='flex'><FaCommentDots className='relative top-1 mr-1'></FaCommentDots> {tip.comments} Comments</span>
        <span> Availability: {tip.availability}</span>

        
      </div>
      <Link to={`/update-tips/${tip._id}`}><button className='btn bg-green-900 text-white mt-8 lg:ml-170' >Update Tips</button></Link>
    </div>
  );
};

export default TipsDetails;
