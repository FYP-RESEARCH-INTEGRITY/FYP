import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function SignUp() {
  return (
    <div className="max-h-[350px] bg-[#32324d] px-8 py-12 text-white">
      <div className="logo">CITESCOUT</div>
      <div className="flex">
        <div className="mt-8">
          <h1 className="text-[32px] font-semibold">Sign Up</h1>
          {/* <h5 className="text-2xl">For CiteScout</h5> */}
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
          <h2 className="text-[40px] font-semibold" href>Sign Up</h2>
          <form>
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
                className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:ring-blue-400  focus-within:ring-blue-400 focus-within:outline-blue-400"
                placeholder="Username or email address"
              />
            </div>
            <div className="mt-5">
              <label>Create your Password</label>
              <input
                type="password"
                className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:ring-blue-400  focus-within:ring-blue-400 focus-within:outline-blue-400"
                placeholder="password"
              />
            </div>
            <div className="mt-5">
              <label>Confirm Password</label>
              <input
                type="password"
                className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:ring-blue-400  focus-within:ring-blue-400 focus-within:outline-blue-400"
                placeholder="password"
              />
            </div>
            {/* <p className="forgot">Forgot Password</p> */}
            <button class="bg-[#615793] hover:bg-[#32324D] text-white font-bold py-4 px-3 rounded-xl w-full mt-8">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
