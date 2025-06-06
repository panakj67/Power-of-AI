// StudyTime.js
import React from 'react';

const StudyTime = () => (
  <div className="bg-white shadow-md rounded-3xl p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold text-gray-800">Study Time</h2>
    </div>
    <div className="flex items-center justify-center mb-4 relative w-full">
      <svg viewBox="0 0 120 120" className="w-28 h-28 -rotate-90">
        <circle cx="60" cy="60" r="50" stroke="#e5e7eb" strokeWidth="12" fill="none" />
        <circle cx="60" cy="60" r="50" stroke="#3b82f6" strokeWidth="12" fill="none" strokeDasharray="200 100" strokeLinecap="round" />
      </svg>
      <div className="absolute text-center">
        <div className="text-xl font-bold text-gray-700">150h</div>
        <div className="text-sm text-gray-500">Total</div>
      </div>
    </div>
    <div className="flex justify-center gap-4 text-xs text-gray-500">
      <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-blue-500"></div>Online</span>
      <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-gray-300"></div>Offline</span>
    </div>
  </div>
);

export default StudyTime;
