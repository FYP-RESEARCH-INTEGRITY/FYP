import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import SideMenu from "../components/SideMenu";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [userDetails, setUserDetails] = useState();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      try {
        const docRef = doc(db, "Users", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        }
      } catch (error) {
        navigate("/");
        console.log(error);
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <SideMenu />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        <div className="flex w-full max-w-md flex-col items-center">
          <img src={process.env.PUBLIC_URL + "/upload-img.png"} alt="image" />
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
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </>
  );
};

export default UploadPage;
