import React from 'react';
import { HouseIcon, UserIcon } from '../assets/icons/fontawesome/Icons';

const IconDemo = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Font Awesome Pro Integration Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Simple Usage */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Basic Usage</h2>
          <div className="flex gap-4 items-center">
            <HouseIcon className="w-8 h-8 text-blue-500" />
            <span className="text-gray-600">House Icon (w-8 h-8 text-blue-500)</span>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <UserIcon className="w-12 h-12 text-green-500" />
            <span className="text-gray-600">User Icon (w-12 h-12 text-green-500)</span>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Hover Effects</h2>
          <div className="flex gap-6">
            <div className="group flex flex-col items-center cursor-pointer">
              <HouseIcon className="w-10 h-10 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
              <span className="text-sm mt-2 text-gray-500 group-hover:text-purple-600">Hover me!</span>
            </div>
            <div className="group flex flex-col items-center cursor-pointer">
              <UserIcon className="w-10 h-10 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm mt-2 text-gray-500">Zoom me!</span>
            </div>
          </div>
        </div>

        {/* Dynamic Sizing */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Dynamic Sizing</h2>
          <div className="flex items-end gap-2 text-indigo-600">
            <HouseIcon className="w-4 h-4" />
            <HouseIcon className="w-6 h-6" />
            <HouseIcon className="w-8 h-8" />
            <HouseIcon className="w-12 h-12" />
            <HouseIcon className="w-16 h-16" />
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-4 rounded-lg text-blue-800">
        <h3 className="font-bold mb-2">How to add more icons:</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Place your <code>.svg</code> file in <code>src/assets/icons/fontawesome/</code></li>
          <li>Add an export in <code>src/assets/icons/fontawesome/Icons.jsx</code> like:<br/>
          <code>export &#123; default as IconName &#125; from './icon-name.svg?react';</code>
          </li>
          <li>Import wherever you need it!</li>
        </ol>
      </div>
    </div>
  );
};

export default IconDemo;
