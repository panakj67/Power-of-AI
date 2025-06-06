// Interests.js
import React from 'react';

const Interests = ({ interestData }) => (
  <div className="bg-white shadow-md rounded-3xl p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold text-gray-800">Interest Areas</h2>
    </div>
    {interestData.map((item, i) => (
      <div key={i} className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-sm text-gray-500">{item.width}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className={`${item.color} h-2 rounded-full`} style={{ width: item.width }}></div>
        </div>
      </div>
    ))}
  </div>
);

export default Interests;
