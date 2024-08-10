import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  createUserWithEmailAndPassword,
  auth,
  provider,
  signInWithPopup,
  db,
} from "../../Services/firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

// import { setDoc, doc } from "firebase/firestore";
// import { GoogleLogin } from "@react-oauth/google";

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
    return () => unsubscribe();
  }, [navigate]);

  const handleSignupWithEmailAndPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "bottom-center",
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      toast.success("Registration successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     toast.error("Passwords do not match", {
  //       position: "bottom-center",
  //     });
  //     return;
  //   }
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);

  //     toast.success("Registration successful");
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Registration successful");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  // const handleGoogleSignIn = async () => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     await signInWithRedirect(auth, provider);
  //   } catch (error) {
  //     toast.error(error.message, {
  //       position: "bottom-center",
  //     });
  //   }
  // };

  return (
    <div className="max-h-[350px] bg-[#32324d] px-8 py-12 text-white">
      <div className="logo">CITESCOUT</div>
      <div className="flex">
        <div className="mt-8">
          <h1 className="text-[32px] font-semibold">Sign Up</h1>
          <p className="mt-4 max-w-[45ch]">
            CiteScout is a community dedicated to maintaining academic
            integrity. It offers a free platform for easy citation verification,
            plagiarism detection, and academic misconduct prevention. It
            simplifies research processes with automated checks and promotes
            transparency among peers.
          </p>
          <br />
          <p className="max-w-[45ch]">
            CiteScout is a community dedicated to maintaining academic
            integrity. It offers a free platform for easy citation verification,
            plagiarism detection, and academic misconduct prevention. It
            simplifies research processes with automated checks and promotes
            transparency among peers.
          </p>
          <p className="mt-4 max-w-[45ch]">
            CiteScout is a community dedicated to maintaining academic
            integrity. It offers a free platform for easy citation verification,
            plagiarism detection, and academic misconduct prevention. It
            simplifies research processes with automated checks and promotes
            transparency among peers.
          </p>
        </div>
        <div>
          <img
            className="img"
            src="https://res.cloudinary.com/dsoqjlpxd/image/upload/v1712764240/Saly-1_xyu5bh.png"
            alt="Sign Up Illustration"
          />
        </div>
        <div className="ml-8 rounded-[40px] bg-white p-10 text-black shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h6>
              Welcome to <span className="font-bold">CITESCOUT</span>
            </h6>
            <span className="text-xs text-[#32324D]">
              Already have an account?{" "}
              <a className="underline" href="/signin">
                Sign In
              </a>
            </span>
          </div>

          <h2 className="mb-8 text-[40px] font-semibold">Sign Up</h2>
          <form onSubmit={handleSignupWithEmailAndPassword}>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="mt-5 flex w-[50%] items-center rounded-xl border border-gray-300 px-4 py-3 text-black hover:bg-gray-100 focus:outline-none focus:ring-blue-400"
            >
              <FcGoogle className="mr-2 text-xl" />
              Sign in with Google
            </button>
            <div className="mt-5">
              <label>Enter your email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-blue-400"
                placeholder="Email address"
                required
              />
            </div>
            <div className="mt-5">
              <label>Create your Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-within:outline-blue-400 focus-within:ring-blue-400 focus:ring-blue-400"
                placeholder="password"
                required
              />
            </div>
            <div className="mt-5">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-within:outline-blue-400 focus-within:ring-blue-400 focus:ring-blue-400"
                placeholder="confirm password"
              />
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-[#615793] px-3 py-4 font-bold text-white hover:bg-[#32324D]"
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
