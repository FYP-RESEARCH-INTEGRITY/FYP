import SideMenu from "../components/SideMenu";
import React, { useEffect } from 'react';
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
  }, [user,navigate])

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
        const result = response.json()
        console.log(result)
        return result;
      });


    toast.promise(uploadPromise, {
      loading: "Submitting...",
      success: (data) => `${data.filename} submitted`,
      error: (error) => `Error: ${error.message || error}`
    });
  };


  return (
    <>
      <SideMenu />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        <div className="flex w-full max-w-md flex-col items-center">
          <img src={process.env.PUBLIC_URL + "/upload-img.png"} alt="story set" />
          <p className="mb-6 text-center text-sm text-gray-700">
            Join 1000+ users on citeScout. Validate your citations with a single
            upload
          </p>

          <button
            onClick={() => document.getElementById("fileInput").click()}
            className="w-full max-w-xs rounded-md bg-[#615793] px-4 py-2 text-white hover:bg-[#32324D] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
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
    </>
  );
};

export default UploadPage;
