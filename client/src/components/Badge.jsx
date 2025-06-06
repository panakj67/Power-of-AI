import React from "react";

const Badge = ({ image, label }) => {
  return (
    <div className="flex flex-col items-center justify-center m-2">
      <img
        src={image}
        alt={label}
        className="w-12 h-12 object-contain rounded-md shadow-md"
      />
      <span className="text-xs text-gray-300 mt-1 text-center">{label}</span>
    </div>
  );
};

export { Badge };
