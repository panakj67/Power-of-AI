// Rewards.js
import React from 'react';
import {
  Trophy,
  Gift,
  Diamond,
  Eye,
  Crown,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Rewards icons
const rewardIcons = [
  { icon: Trophy, color: 'text-green-500' },
  { icon: Gift, color: 'text-yellow-500' },
  { icon: Diamond, color: 'text-blue-400' },
  { icon: Eye, color: 'text-purple-500' },
  { icon: Crown, color: 'text-pink-500' },
];

// Sample rewards data
const rewards = [
  { id: 1, title: 'Top Scorer', description: 'Achieved the highest score in last week’s challenge.' },
  { id: 2, title: 'Consistency King', description: 'Completed all daily practice sessions for a week.' },
  { id: 3, title: 'Diamond League', description: 'Ranked in the top 10% overall.' },
  { id: 4, title: 'Sharpshooter', description: 'Answered 50+ questions correctly in a row.' },
  { id: 5, title: 'Ace Performer', description: 'Maintained a high performance streak for a month.' },
];

// Sample performance data
const performanceData = [
  { day: 'Mon', score: 78 },
  { day: 'Tue', score: 82 },
  { day: 'Wed', score: 75 },
  { day: 'Thu', score: 90 },
  { day: 'Fri', score: 85 },
  { day: 'Sat', score: 88 },
  { day: 'Sun', score: 92 },
];

// Component to display the performance trend
const PerformanceTrend = () => {
  // Determine if the performance is increasing or decreasing
  const trendDirection =
    performanceData[performanceData.length - 1].score >= performanceData[0].score
      ? 'up'
      : 'down';
  const TrendIcon = trendDirection === 'up' ? TrendingUp : TrendingDown;
  const trendColor = trendDirection === 'up' ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white shadow-md rounded-3xl p-6 mt-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold flex-1">Performance Trend</h2>
        <div className={`flex items-center ${trendColor}`}>
          <TrendIcon className="w-6 h-6 mr-1" />
          <span className="font-semibold capitalize">{trendDirection}</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={performanceData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke={trendDirection === 'up' ? '#10B981' : '#EF4444'} // Tailwind green-500 or red-500
            strokeWidth={3}
            dot={{ r: 5, stroke: 'white', strokeWidth: 2 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Main Rewards Component
const Rewards = () => {
  return (
    <div>
       {/* Performance Trend Graph */}
      <PerformanceTrend />
      {/* Rewards Card */}
      <div className="bg-white shadow-md mt-8 rounded-3xl p-6">
        <h2 className="text-xl font-bold mb-4">Your Rewards</h2>
        <div className="grid grid-cols-1  gap-4">
          {rewards.map((reward, index) => {
            const IconComponent = rewardIcons[index % rewardIcons.length].icon;
            const colorClass = rewardIcons[index % rewardIcons.length].color;
            return (
              <div
                key={reward.id}
                className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4 hover:shadow-lg transition duration-300"
              >
                <div className={`p-2 rounded-full bg-opacity-20 ${colorClass}`}>
                  <IconComponent className={`w-8 h-8 ${colorClass}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{reward.title}</h3>
                  <p className="text-sm text-gray-600">{reward.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Rewards;
