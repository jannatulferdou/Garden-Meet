import React from "react";
import { FaLeaf, FaUsers, FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-6 md:px-12 text-green-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-green-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-green-600">GardenShare</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          GardenShare is more than just a platform — it's a sanctuary for
          passionate gardeners, nature lovers, and green thumbs from all around
          the world. We exist to inspire, connect, and grow — together.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-3 mt-10">
          {/* Mission */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaSeedling className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To cultivate a global garden of shared knowledge, eco-friendly
              practices, and joyful living through community-driven plant tips.
            </p>
          </motion.div>

          {/* Community */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FaUsers className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Community</h3>
            <p className="text-gray-600">
              Thousands of users from balconies to farms sharing, learning, and
              celebrating the art of growing — all in one green space.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaLeaf className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              A world where every home, school, and community has its own green
              corner — sparking sustainability and serenity.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
            🌱 Ready to Grow with Us?
          </h4>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Join our vibrant community today and start sharing your green
            wisdom. Because together, we bloom better.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg transition">
            Join GardenShare
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

