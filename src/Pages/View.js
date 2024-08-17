import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../Services/firebase';
import { toast } from 'sonner';

const ResultScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { result } = location.state || {};
    const [currentIssueIndex, setCurrentIssueIndex] = useState(0);


    const filename = result?.filename || 'No document uploaded';
    const issues = result?.invalid || [];
    const corrected = result?.corrected || [];
    const issuesDetected = issues.length || 0;
    const currentIssue = issues[currentIssueIndex] || "";
    const currentCorrect = corrected[currentIssueIndex] || "";


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

    const handleViewPreviousIssue = () => {
        setCurrentIssueIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleViewNextIssue = () => {
        setCurrentIssueIndex(prevIndex => Math.min(prevIndex + 1, issuesDetected - 1));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="bg-white p-12 rounded shadow-md w-full max-w-md">
                <div className="flex flex-col mb-8">
                    <div className="flex justify-between items-center mb-1">
                        <h2 className="text-lg font-semibold">{filename.split(".")[0]}</h2>
                        <button onClick={handleGoBack} className="text-blue-500 hover:underline">
                            New upload
                        </button>
                    </div>
                    <p className="text-gray-500 text-sm font-bold">Issue {currentIssueIndex + 1} out of {issuesDetected}</p>
                </div>
                <div className={`px-5 py-5 rounded relative mb-8 ${issuesDetected > 0 ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'}`}>
                    <div className="flex justify-between items-center">
                        <strong className="font-bold">Issues detected</strong>
                        <span className='font-bold'>{issuesDetected}</span>
                    </div>
                    {issuesDetected > 0 ? (
                        <p className="text-sm mt-3">Some citations do not follow the appropriate guidelines for APA 7th edition citation format</p>
                    ) : (
                        <p className="text-sm mt-3">Nice! All citations follow the appropriate guidelines for APA 7th edition citation format</p>
                    )}
                </div>
                <div className="mb-12">
                    <p className="text-lg font-semibold mb-2 text-gray-500">Problems</p>
                    <div className="p-6 border rounded bg-white shadow-sm">
                        <div className="text-red-600 line-through text-base mb-1 font-bold">{currentIssue}</div>
                        <div className="text-green-600 text-xl font-bold">{currentCorrect}</div>
                    </div>
                </div>
                <div className="flex justify-between mb-12">
                    <button
                        onClick={handleViewPreviousIssue}
                        disabled={currentIssueIndex === 0}
                        className="py-2 px-5 bg-[#615793] text-white rounded-md hover:bg-[#4a4a7f] focus:outline-none focus:ring-2 focus:ring-[#32324D] focus:ring-opacity-50 active:bg-[#3e3e6c] transition-colors duration-200"
                    >
                        View Previous Issue
                    </button>
                    <button
                        onClick={handleViewNextIssue}
                        disabled={currentIssueIndex === issuesDetected - 1}
                        className="py-2 px-5 bg-[#615793] text-white rounded-md hover:bg-[#4a4a7f] focus:outline-none focus:ring-2 focus:ring-[#32324D] focus:ring-opacity-50 active:bg-[#3e3e6c] transition-colors duration-200"
                    >
                        View Next Issue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultScreen;
