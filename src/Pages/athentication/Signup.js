import { useState, useEffect } from "react";
import { toast } from "sonner";
import { createUserWithEmailAndPassword, auth, provider, signInWithPopup } from "../../Services/firebase";
import { FcGoogle } from "react-icons/fc";
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

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Registration successful");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <div
      style={{ backgroundImage: "url('/phone-bg.png')" }}
      className="h-fit max-h-[300px] bg-[#32324D] bg-no-repeat bg-center text-white"
    >
      <div className="logo px-8 pt-8">CITESCOUT</div>
      <div className="flex flex-col justify-center md:flex-row md:justify-between">
        <div className="px-8 pb-12 pt-2">
          <h1 className="text-[32px] font-semibold">Join us today</h1>
          <br />
          <p className="hidden md:block max-w-[45ch]">
            Become a part of CiteScout, the community dedicated to maintaining academic integrity with free citation verification, plagiarism detection, and collaboration tools.
          </p>
        </div>

        {/* Sign Up Card */}
        <div className="mx-auto absolute inset-[30%_0_10%_0] lg:inset-[10%_0_0%_0] h-fit w-full rounded-[40px] bg-white px-6 py-8 text-black shadow-xl sm:max-w-[430px] md:mr-8 md:px-8 md:py-10">
          <div className="row">
            <div className="col-md-10">
              <div className="flex justify-between">
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
          <form onSubmit={handleSignupWithEmailAndPassword}>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center border border-gray-300 px-4 py-3 rounded-xl w-[100%] mt-5 text-black hover:bg-gray-100 focus:ring-blue-400 focus:outline-none"
            >
              <FcGoogle className="mr-2 text-xl" />
              Sign up with Google
            </button>
            <div className="mt-5">
              <label>Enter your email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-within:outline-blue-400 focus-within:ring-blue-400 focus:ring-blue-400"
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
                placeholder="Password"
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
                placeholder="Confirm password"
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
