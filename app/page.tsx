'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [clubCount, setClubCount] = useState(12);
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold text-[#0A2342]">
              Fill the Golf Bag
            </span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#84BD00] text-white px-4 py-2 rounded-full"
            >
              <span className="font-semibold">Bag #42: {clubCount}/20</span>
            </motion.div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold text-[#0A2342]">
            Join the Club
          </h1>
          <p className="text-xl text-gray-600">
            Fill a bag together. Save together. Golf together.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleClubs.map((club, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Club Image</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#0A2342]">
                    {club.name}
                  </h3>
                  <p className="text-gray-600">
                    {club.specs}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#0A2342]">
                      ${club.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#84BD00] text-white px-6 py-2 rounded-full"
                      onClick={() => setClubCount(prev => Math.min(prev + 1, 20))}
                    >
                      Add to Bag
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

const sampleClubs = [
  {
    name: "TaylorMade Stealth Driver",
    specs: "Right-Handed • Stiff Flex",
    price: 499
  },
  {
    name: "Callaway Rogue ST Max 3-Wood",
    specs: "Right-Handed • Regular Flex",
    price: 299
  },
  {
    name: "Titleist T200 Iron Set",
    specs: "Right-Handed • Steel Shaft",
    price: 1199
  }
];
