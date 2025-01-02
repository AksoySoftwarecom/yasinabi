import React from 'react';

export const LegoAvatar = () => {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <div className="absolute inset-0 bg-yellow-400 rounded-full">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-full flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-yellow-400 rounded-full border-4 border-white"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-red-500 rounded-t-lg"></div>
    </div>
  );
};