// App.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Performance from '../components/Performance';
import Interests from '../components/Interests';
import StudyTime from '../components/StudyTime';
import PastActivities from '../components/PastActivities';
import Rewards from '../components/Reward';
import Leaderboard from '../components/Leaderboard'; // Add this line

// Sample data (unchanged)
const skillsData = [
  { name: 'Communication', value: 4 },
  { name: 'Teamwork', value: 5 },
  { name: 'Problem Solving', value: 3 },
];

const performanceData = {
  DSA: { correct: 30, incorrect: 10, unanswered: 10 },
  OOPs: { correct: 25, incorrect: 5, unanswered: 10 },
  Aptitude: { correct: 20, incorrect: 8, unanswered: 7 },
};

const interestData = [
  { name: 'DSA', width: '75%', color: 'bg-green-500' },
  { name: 'DBMS', width: '60%', color: 'bg-blue-500' },
  { name: 'OS', width: '50%', color: 'bg-yellow-500' },
];

const pastActivities = [
  { title: 'Mock Interview 1', correct: 8, incorrect: 2, total: 10, score: 80 },
  { title: 'Mock Interview 2', correct: 7, incorrect: 3, total: 10, score: 70 },
];

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="col-span-9 space-y-6">
          {/* Two-Column Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left Panel */}
            <div className="col-span-6 space-y-6">
              <Performance performance={performanceData} />
              <Interests interestData={interestData} />
              <StudyTime />
          <Leaderboard />

            </div>

            {/* Right Panel */}
            <div className="col-span-6 space-y-6">
              <PastActivities pastActivities={pastActivities} />
              <Rewards />
            </div>
          </div>

          {/* Leaderboard Full Width */}
        </div>
      </div>
    </div>
  );
};

export default App;
