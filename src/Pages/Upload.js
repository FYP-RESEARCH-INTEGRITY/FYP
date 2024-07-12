import React, { useState } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <img 
          src={process.env.PUBLIC_URL + '/upload-img.png'}
          alt="image" 
        />        
        <p className="text-center text-sm mb-6 text-gray-700">
          Join 1000+ users on citeScout. Validate your citations with a single upload
        </p>
        
        <button
          onClick={() => document.getElementById('fileInput').click()}
          className="w-full max-w-xs py-2 px-4 bg-[#615793] text-white rounded-md hover:bg-[#32324D] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Upload file
        </button>
        {/* <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        /> */}
      </div>
    </div>
  );
};

export default UploadPage;