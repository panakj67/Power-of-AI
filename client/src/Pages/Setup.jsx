import React, { useState } from "react";
import { setInterviewSetup } from "../store/actions/userSlice";
import { useDispatch } from "react-redux";

const Setup = ({ onStart }) => {
  const [roundType, setRoundType] = useState("Technical");
  const [domain, setDomain] = useState("DSA");
  const [difficulty, setDifficulty] = useState("Medium");
  const [duration, setDuration] = useState("30");
  const [questionCount, setQuestionCount] = useState(5);
  const dispatch = useDispatch();

  const handleStart = () => {
    onStart({
      roundType,
      domain,
      difficulty,
      duration: parseInt(duration),
      questionCount: parseInt(questionCount),
    });
  };

  return (
    <div onClick={() => dispatch(setInterviewSetup(false))}
     className="h-screen inset-0 fixed z-100 backdrop-blur-xs flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-8 rounded-2xl h-120 overflow-auto shadow-2xl max-w-150 w-full space-y-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800">🧠 Interview Setup</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Round Type</label>
            <select
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              value={roundType}
              onChange={(e) => setRoundType(e.target.value)}
            >
              <option>Technical</option>
              <option>Behavioral</option>
              <option>HR</option>
              <option>Managerial</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Domain</label>
            <select
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            >
              <option>DSA</option>
              <option>System Design</option>
              <option>Web Development</option>
              <option>DBMS</option>
              <option>Operating System</option>
              <option>Behavioral</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Difficulty</label>
            <select
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Duration (minutes)</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              min={10}
              max={90}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Number of Questions</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              value={questionCount}
              onChange={(e) => setQuestionCount(e.target.value)}
              min={1}
              max={20}
            />
          </div>
        </div>

        <button
          onClick={handleStart}
          className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold mt-4 transition"
        >
          🚀 Start Interview
        </button>
      </div>
    </div>
  );
};

export default Setup;
