import React from 'react';

const COLORS = {
  correct: '#4ade80',    // green-400
  incorrect: '#f87171',  // red-400
  unanswered: '#a1a1aa', // gray-400
};

const PerformancePieChart = ({ performance }) => {
  /*
  performance = {
    DSA: { correct: 30, incorrect: 10, unanswered: 10 },
    OOPs: { correct: 25, incorrect: 5, unanswered: 10 },
    Aptitude: { correct: 20, incorrect: 8, unanswered: 7 },
    // ...more sections
  }
  */

  // Calculate totals for all sections combined
  const totalCorrect = Object.values(performance).reduce((sum, sec) => sum + sec.correct, 0);
  const totalIncorrect = Object.values(performance).reduce((sum, sec) => sum + sec.incorrect, 0);
  const totalUnanswered = Object.values(performance).reduce((sum, sec) => sum + sec.unanswered, 0);

  const total = totalCorrect + totalIncorrect + totalUnanswered;
  const accuracy = total === 0 ? 0 : ((totalCorrect / total) * 100).toFixed(1);

  // Pie slice sizes in degrees for SVG arcs (360 deg total)
  const slices = [
    { label: 'Correct', value: totalCorrect, color: COLORS.correct },
    { label: 'Incorrect', value: totalIncorrect, color: COLORS.incorrect },
    { label: 'Unanswered', value: totalUnanswered, color: COLORS.unanswered },
  ];

  // Function to create SVG arc path for each slice
  const createArc = (startAngle, endAngle) => {
    const radius = 70;
    const rad = Math.PI / 180;
    const x1 = 100 + radius * Math.cos(rad * startAngle);
    const y1 = 100 + radius * Math.sin(rad * startAngle);
    const x2 = 100 + radius * Math.cos(rad * endAngle);
    const y2 = 100 + radius * Math.sin(rad * endAngle);
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `
      M 100 100
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      Z
    `;
  };

  // Build pie slices paths
  let cumulativeAngle = 0;
  const paths = slices.map(({ value, color }, idx) => {
    const sliceAngle = (value / total) * 360;
    const path = createArc(cumulativeAngle, cumulativeAngle + sliceAngle);
    cumulativeAngle += sliceAngle;
    return <path key={idx} d={path} fill={color} />;
  });

  return (
    <div className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Overall Performance</h2>

      <svg width="200" height="200" viewBox="0 0 200 200" className="mb-6">
        {paths}
        {/* Center circle for donut look */}
        <circle cx="100" cy="100" r="40" fill="white" />
        {/* Text in center */}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          className="text-xl font-bold fill-gray-900"
          style={{ userSelect: 'none' }}
        >
          {accuracy}%
        </text>
        <text
          x="100"
          y="130"
          textAnchor="middle"
          className="text-xs fill-gray-500"
          style={{ userSelect: 'none' }}
        >
          Accuracy
        </text>
      </svg>

      {/* Legend */}
      <div className="flex justify-between w-full text-sm font-medium text-gray-700">
        {slices.map(({ label, color, value }) => (
          <div key={label} className="flex items-center gap-2">
            <div style={{ backgroundColor: color }} className="w-4 h-4 rounded-full"></div>
            <span>{label}: {value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformancePieChart;
