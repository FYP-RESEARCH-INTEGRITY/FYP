import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth, db } from "./firebase"; // Ensure you import db
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/Upload");
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "bottom-center",
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          photo: ""
        });
        navigate("/SignIn");
      }
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="max-h-[350px] bg-[#32324d] px-8 py-12 text-white">
      <div className="logo">CITESCOUT</div>
      <div className="flex">
        <div className="mt-8">
          <h1 className="text-[32px] font-semibold">Sign Up</h1>
          <br />
          <p className="max-w-[45ch]">
            CiteScout is a community dedicated to maintaining academic integrity.
            It offers a free platform for easy citation verification, plagiarism detection,
            and academic misconduct prevention. It simplifies research processes with automated
            checks and promotes transparency among peers.
          </p>
        </div>
        <div className="">
          <img
            className="img"
            src="https://res.cloudinary.com/dsoqjlpxd/image/upload/v1712764240/Saly-1_xyu5bh.png"
            alt=""
          />
        </div>
        <div className="rounded-[40px] bg-white p-10 text-black shadow-xl ml-8">
          <div className="row">
            <div className="col-md-10">
              <div className="flex justify-between">
                <h6>
                  Welcome to <span className="font-bold">CITESCOUT</span>
                </h6>{" "}
                <span className="max-w-[40ch] text-xs text-[#32324D]">
                  Already have an account?{" "}
                  <a className="underline" href="/signin">
                    Sign In
                  </a>
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-[40px] font-semibold">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mt-5">
              <GoogleLogin
                onSuccess={handleGoogleSignIn}
                onError={() => {
                  toast.error("Google Sign-In Failed!", {
                    position: "bottom-center",
                  });
                }}
              />
            </div>
            <div className="mt-5">
              <label>Enter your username or email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:ring-blue-400 focus-within:ring-blue-400 focus-within:outline-blue-400"
                placeholder="Username or email address"
              />
            </div>
            <div className="mt-5">
              <label>Create your Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:ring-blue-400 focus-within:ring-blue-400 focus-within:outline-blue-400"
                placeholder="password"
              />
            </div>
            <div className="mt-5">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:ring-blue-400 focus-within:ring-blue-400 focus-within:outline-blue-400"
                placeholder="confirm password"
              />
            </div>
            <button
              type="submit"
              className="bg-[#615793] hover:bg-[#32324D] text-white font-bold py-4 px-3 rounded-xl w-full mt-8"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
