// Leaderboard.js
import React from 'react';
import { Trophy } from 'lucide-react';

const leaderboardData = [
  { id: 1, name: 'Alice', score: 950 },
  { id: 2, name: 'Bob', score: 900 },
  { id: 3, name: 'Charlie', score: 870 },
  { id: 4, name: 'Diana', score: 850 },
  { id: 5, name: 'Eve', score: 800 },
];

const Leaderboard = () => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-6">
      <div className="flex items-center mb-4">
        <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
        <h2 className="text-xl font-bold">Leaderboard</h2>
      </div>
      <div className="space-y-3">
        {leaderboardData.map((user, index) => (
          <div
            key={user.id}
            className={`flex items-center justify-between bg-gray-50 rounded-xl p-3 hover:shadow-lg transition duration-300 ${
              index === 0 ? 'border-l-4 border-yellow-500' : ''
            }`}
          >
            <div className="flex items-center space-x-4">
              <span className="text-lg font-bold">{index + 1}</span>
              <span className="font-semibold">{user.name}</span>
            </div>
            <span className="text-green-600 font-bold">{user.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
