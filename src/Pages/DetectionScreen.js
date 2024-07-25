import React from 'react';

const DetectionScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Document name</h2>
          <a href="#" className="text-blue-500 hover:underline">Go back</a>
        </div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Issues detected</strong>
          <span className="block sm:inline"> 35</span>
          <p className="text-sm">The highlighted citations do not follow the appropriate guidelines for APA 7th edition citation format</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600"><strong>Citations found:</strong> 65</p>
          <p className="text-gray-600"><strong>Valid citations:</strong> 30</p>
          <p className="text-gray-600"><strong>Invalid citations:</strong> 35</p>
        </div>
        <div className="mb-4 text-gray-500 text-sm">
          <p>All mentions of one or more sources</p>
          <p>Parenthetic format examples:</p>
          <ul className="list-disc list-inside">
            <li>(Evans & McLeod, 2017; Gallant, 2014)</li>
            <li>(Smith et al., 2020)</li>
            <li>(Obens & Anthony, 2013)</li>
            <li>(Appah et al., 2016)</li>
            <li>(Smith, n.d.)</li>
          </ul>
        </div>
        <button className="w-full max-w-xs py-2 px-4 bg-[#615793] text-white rounded-md hover:bg-[#32324D] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
          Start solving issues
        </button>
      </div>
    </div>
  );
};

export default DetectionScreen;
