import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '../Hooks/authContext';




const UploadPage = () => {

  const user = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
  }, [user])


  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const requestBody = new FormData();
    requestBody.append("file", selectedFile);
    requestBody.append("style", "APA 7th edition");

    const backendUrl = process.env.REACT_APP_AI_MICROSERVICE;

    const uploadPromise = fetch(backendUrl, {
      method: "POST",
      body: requestBody,
    })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        console.log(response.json())
        return response.json();
      });

    toast.promise(uploadPromise, {
      loading: "Submitting...",
      success: (data) => `${data.filename} submitted`,
      error: (error) => `Error: ${error.message || error}`
    });
  };





  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <img
          src={process.env.PUBLIC_URL + '/upload-img.png'}
          alt="Upload Illustration"
          className="mb-6"
        />
        <p className="text-center text-sm mb-6 text-gray-700">
          Join 1000+ users on citeScout. Validate your citations with a single upload.
        </p>
        <button
          onClick={() => document.getElementById('fileInput').click()}
          className="w-full max-w-xs py-2 px-4 bg-[#615793] text-white rounded-md hover:bg-[#32324D] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Upload file
        </button>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileUpload}
          className="hidden"
          accept='.pdf'
        />
      </div>
    </div>
  )
};

export default UploadPage;
