import React from "react";
import { FaUserPlus, FaRobot, FaCoins, FaTrophy, FaChartLine, FaComments, FaCheckCircle, FaBrain } from "react-icons/fa";

const howItWorksData = [
  {
    icon: <FaUserPlus className="text-indigo-600 text-4xl" />,
    title: "Create Your Profile",
    desc: "Sign up in seconds and build a smart profile to personalize your interview experience.",
  },
  {
    icon: <FaBrain className="text-indigo-600 text-4xl" />,
    title: "Select Job Role",
    desc: "Choose from various roles like SDE, Analyst, or DevOps to get tailored interview questions.",
  },
  {
    icon: <FaRobot className="text-indigo-600 text-4xl" />,
    title: "Start AI Mock Interview",
    desc: "Get real-time interview experience with our AI bot — voice or chat mode!",
  },
  {
    icon: <FaCoins className="text-yellow-500 text-4xl" />,
    title: "Earn Coins",
    desc: "Earn coins by completing interviews, daily check-ins, and uploading resumes.",
  },
  {
    icon: <FaTrophy className="text-pink-500 text-4xl" />,
    title: "Unlock Badges",
    desc: "Achieve milestones like 'First Interview', 'Streak Master', or 'Top Performer'.",
  },
  {
    icon: <FaChartLine className="text-green-500 text-4xl" />,
    title: "Track Performance",
    desc: "Analyze feedback, strengths, and areas of improvement after each session.",
  },
  {
    icon: <FaCheckCircle className="text-blue-500 text-4xl" />,
    title: "Level Up",
    desc: "Level up your profile as you progress through advanced difficulty levels.",
  },
  {
    icon: <FaComments className="text-purple-600 text-4xl" />,
    title: "Discuss & Compete",
    desc: "Join discussions, share doubts, and compete on weekly leaderboards.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-16 px-6 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold uppercase text-gray-900 mb-3">How InterviewAI Works</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Transform your prep journey with gamification, AI mock interviews, and career-boosting tools.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {howItWorksData.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border hover:scale-105 transition-transform duration-300 px-6 py-8 flex flex-col items-center text-center"
          >
            <div className="bg-indigo-100 p-4 rounded-full mb-4">{step.icon}</div>
            <h3 className="font-semibold text-lg text-gray-900">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
