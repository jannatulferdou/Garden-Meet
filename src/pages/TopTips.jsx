import React, { useEffect, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router';
import Loading from './Loading';

const TopTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://gardening-server-azure.vercel.app/trending-tips')
      .then(res => res.json())
      .then(data => {
        setTips(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch trending tips:", err);
        setLoading(false);
      });
  }, []);

  const handleLike = async (id) => {
    try {
      const res = await fetch(`https://gardening-server-azure.vercel.app/tips/${id}/like`, {
        method: 'PATCH'
      });

      if (res.ok) {
        setTips(prevTips =>
          prevTips.map(tip =>
            tip._id === id ? { ...tip, likes: tip.likes + 1 } : tip
          )
        );
      }
    } catch (err) {
      console.error("Error liking the tip:", err);
    }
  };

  if (loading) return <Loading></Loading>;

  return (
    <section className="mb-20 px-4">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-900"> Top Trending Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div key={tip._id} className="bg-green-50 p-8 rounded-lg shadow hover:shadow-md transition">
            <img src={tip.imageUrl} alt='' className="w-full h-48 object-cover rounded" />
            

            
            <div className='flex mt-5'>
                <img src={tip.userPhotoUrl} alt="" className='w-10 h-10 rounded-full'/>
                <p className="text-lg font-bold text-gray-500 relative top-1 left-2">{tip.userName}</p>
            </div>
            
            
            <h3 className="text-xl font-bold mt-3">{tip.title}</h3>
            
            <p className="text-sm mt-2 mb-6">{tip.description.slice(0, 100)}....<Link to={`/tips-details/${tip._id}`} className='text-green-700 hover:underline'>Read More</Link></p>
            <div className=" border-t-1 border-dashed border-gray-300 pt-4 mt-2 text-sm text-gray-600 flex justify-between items-center">
              <button
                onClick={() => handleLike(tip._id)}
                className="text-blue-500 hover:scale-110 flex transition"
              >
            <AiFillLike className='w-5 h-5 mr-1 relative -top-0.5'></AiFillLike> {tip.likes}
              </button>
              <span className='flex'><FaCommentDots className='w-5 h-5 mr-1'></FaCommentDots> {tip.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTips;

