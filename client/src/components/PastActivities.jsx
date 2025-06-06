// PastActivities.js
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const PastActivities = ({ pastActivities }) => (
  <div className="bg-white shadow-md rounded-3xl p-6 col-span-2">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold text-gray-800">Past Activities</h2>
    </div>
    <div className="space-y-4">
      {pastActivities.map((activity, index) => {
        const percent = (activity.correct / activity.total) * 100;
        return (
          <div key={index} className="border rounded-xl p-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-800">{activity.title}</span>
              <span className="text-sm text-indigo-600 font-semibold">{activity.score}%</span>
            </div>
            <div className="flex items-center gap-4 text-sm mb-2">
              <span className="flex items-center gap-1 text-green-600"><CheckCircle size={14} /> {activity.correct} correct</span>
              <span className="flex items-center gap-1 text-red-500"><XCircle size={14} /> {activity.incorrect} incorrect</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default PastActivities;
