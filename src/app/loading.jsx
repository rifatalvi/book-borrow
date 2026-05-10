'use client';

import React from 'react';
import { PulseLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
       
        <PulseLoader 
          color="#2563eb" 
          size={15}
          margin={4}
          speedMultiplier={0.8}
        />
        <p className="text-gray-500 font-medium animate-pulse">
          Loading resources...
        </p>
      </div>
    </div>
  );
}