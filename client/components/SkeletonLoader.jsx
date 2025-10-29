"use client";
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
