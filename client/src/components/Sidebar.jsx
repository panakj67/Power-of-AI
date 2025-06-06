import React from 'react';

const Sidebar = () => {
  return (
    <div className="col-span-3 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg">
      {/* Profile Section */}
      <div className="text-center">
        {/* Profile Image */}
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg" // Replace with actual profile pic URL
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Name */}
        <h2 className="text-2xl font-bold mb-1">Alex Developer</h2>

        {/* Branch */}
        <p className="text-indigo-300 mb-2">Computer Science Engineering</p>

        {/* Target IT Company */}
        <div className="inline-flex items-center bg-indigo-700 rounded-full px-4 py-1 text-sm font-semibold text-indigo-100 mb-4 shadow-md">
          Target: Cisco
        </div>

        {/* Description */}
        <p className="text-indigo-200 text-sm leading-relaxed max-w-xs mx-auto">
          Passionate about full-stack development and competitive programming.
          Currently pursuing B.Tech from LNCT Main Bhopal with courses in DSA, DBMS, and Computer Networks.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
