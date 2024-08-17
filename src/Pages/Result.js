import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../Services/firebase';
import { toast } from 'sonner';

const ResultScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { result } = location.state || {};



  const filename = result?.filename || 'No document uploaded';
  const issuesDetected = result?.invlaidCount || "";
  const citationsFound = result?.Total || "";
  const validCitations = result?.validCount || "";
  const invalidCitations = result?.invlaidCount || "";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate("/");
      }
      if (!result) {
        toast.info("No document uploaded")
        navigate("/upload")
      }
    });
    return () => unsubscribe();
  }, [navigate]);



  const handleGoBack = () => {
    navigate('/upload');
  };

  const handleScanNewDocument = () => {
    navigate('/upload');
  };

  const handleViewIssues = () => {
    navigate('/view', { state: { result } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">{filename.split(".")[0]}</h2>
          <button onClick={handleGoBack} className="text-blue-500 hover:underline">
            Go back
          </button>
        </div>
        <div className={`px-5 py-5 rounded relative mb-8 ${issuesDetected > 0 ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'}`}>
          <div className="flex justify-between items-center">
            <strong className="font-bold">Issues detected</strong>
            <span>{issuesDetected}</span>
          </div>
          {issuesDetected > 1 ? (
            <p className="text-sm mt-3">Some citations do not follow the appropriate guidelines for APA 7th edition citation format</p>
          ) : (
            <p className="text-sm mt-3">Nice! All citations follow the appropriate guidelines for APA 7th edition citation format</p>
          )}
        </div>
        <div className="mb-8">
          <p className="text-gray-500 flex justify-between mb-2"><strong>Citations found:</strong> <span>{citationsFound}</span></p>
          <p className="text-gray-500 flex justify-between mb-2"><strong>Valid citations:</strong> <span>{validCitations}</span></p>
          <p className="text-gray-500 flex justify-between mb-2"><strong>Invalid citations:</strong> <span>{invalidCitations}</span></p>
        </div>
        <div className="mb-8 text-gray-500 text-sm">
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
        {issuesDetected < 1 ? (
          <button
            onClick={handleScanNewDocument}
            className="w-full py-3 px-5 bg-[#615793] text-white rounded-md hover:bg-[#32324D] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 mb-4"
          >
            Scan a New Document
          </button>
        ) : (
          <button
            onClick={handleViewIssues}
            className="w-full py-3 px-5 bg-[#615793] text-white rounded-md hover:bg-[#32324D] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 mb-4"
          >
            View Issues
          </button>
        )}
      </div>
    </div>
  );
};

export default ResultScreen;
