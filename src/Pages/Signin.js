import { GoogleLogin } from "@react-oauth/google";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    
      if (userCredentials.user) {
        return navigate("/Upload")
      }
    } catch (error) {
      console.log("You don't have an account, please Signup");
      toast.error("You don't have an account, please Signup", {
          position: "top-center",
      });
    }
  }


  return (
    <div style={{backgroundImage: "url('/phone-bg.png')", backgroundSize: ""}} className="h-fit max-h-[300px] bg-[#32324D] bg-no-repeat bg-center text-white">
      <div className="logo px-8 pt-8">CITESCOUT</div>
      <div className="flex flex-col justify-center md:flex-row md:justify-between">
        <div className="px-8 pb-12 pt-2">
          <h1 className="text-[32px] font-semibold"> Welcome back</h1>
          {/* <h5 className="text-2xl">To CiteScout</h5> */}
          <br />
          <p className="hidden md:block max-w-[45ch]">
          Sign in to maintain academic integrity with free citation 
          verification, plagiarism detection, and collaboration tools.
          No subscription fees or hidden costs.
          </p>
        </div>

        {/* backgroud image */}
        {/* <div className="hidden h-auto w-[385px] md:block">
          <img
            className="h-auto w-full object-cover"
            src="/phone-bg.png"
            alt=""
          />
        </div> */}

        {/* signin card */}
        <div className="mx-auto absolute inset-[30%_0_10%_0] lg:inset-[10%_0_0%_0] h-fit w-full rounded-[40px] bg-white px-6 py-8 text-black shadow-xl sm:max-w-[430px] md:mr-8 md:px-8 md:py-10">
          <div className="row">
            <div className="col-md-10">
              <div className="flex justify-between">
                {/* <h6>
                  Welcome to <span className="font-bold">CITESCOUT</span>
                </h6>{" "} */}
                <span className="max-w-[40ch] text-xs text-[#32324D]">
                  Don't have an account?{" "}
                  <a className="underline" href="/">
                    Sign Up
                  </a>
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-[40px] font-semibold">Sign In</h2>
          <form onSubmit={handleLogin}>
            <GoogleLogin
              style={{ width: "100%" }}
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <div className="mt-5">
              <label>Enter your username or email address</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-within:outline-blue-400 focus-within:ring-blue-400 focus:ring-blue-400"
                placeholder="Username or email address"
              />
            </div>
            <div className="mt-5">
              <label>Enter your Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-within:outline-blue-400 focus-within:ring-blue-400 focus:ring-blue-400"
                placeholder="Password"
              />
            </div>
            <p className="forgot text-right text-blue-500 hover:text-blue-700">
              Forgot Password
            </p>
            <button
            type="submit"
            class="mt-8 w-full rounded-xl bg-[#615793] px-3 py-4 font-bold text-white hover:bg-[#32324D]">
            Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
