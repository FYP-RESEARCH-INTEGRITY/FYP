import React from "react";


function SignIn() {
  return (
    <div className="max-h-[350px] bg-[#32324D] px-8 py-12 text-white">
      <div className="logo">CITESCOUT</div>
      <div className="flex">
        <div className="mt-8">
          <h1 className="text-[32px] font-semibold"> Welcome back</h1>
          <h5 className="text-2xl">To CiteScout</h5>
          <br />
          <p className="max-w-[45ch]">
          Sign in to access your account and continue upholding the highest standards of academic integrity. 
          Our citation verification, plagiarism detection, and collaboration 
          tools are always free and at your fingertips. No subscription fees or 
          hidden costs - just reliable support for your research projects. 
          Sign in now and let's work together to maintain the integrity of academic research!
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
                <span className="max-w-[40ch] text-[13px] text-[#32324D]">
                  {" "}
                  Don't have an account? <br />
                  Sign Up
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-[40px] font-semibold " >Sign In</h2>
          <form>
            <div className="mt-5">
              <label>Enter your username or email address</label>
              <input
                type="text"
                className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:ring-blue-400  focus-within:ring-blue-400 focus-within:outline-blue-400"
                placeholder="Username or email address"
              />
            </div>
            <div className="mt-5">
              <label>Enter your Password</label>
              <input
                type="password"
                className="border border-gray-300 px-4 py-3 rounded-xl w-full focus:ring-blue-400  focus-within:ring-blue-400 focus-within:outline-blue-400"
                placeholder="Password"
              />
            </div>
            <p className="forgot text-blue-500 hover:text-blue-700 text-right">Forgot Password</p>
            <button class="bg-[#615793] hover:bg-[#32324D] text-white font-bold py-4 px-3 rounded-xl w-full mt-8">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
