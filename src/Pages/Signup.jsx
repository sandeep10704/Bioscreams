import React, { useState } from "react";
//import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Images from "../Assets/Img/images";

const Signup = ({ signupImage, buttonColor }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const handleSignup = () => {
    setSnack({ open: true, message: "Signup clicked!", severity: "success" });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-2">
     <div className="w-full max-w-4xl bg-white rounded-lg border border-gray-200 shadow-2xl flex flex-col md:flex-row overflow-hidden">




        <div className="hidden md:flex w-1/2 items-center justify-center p-4">
          <img
            src={signupImage}
            alt="Image"
            className="w-full h-full object-contain "
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <p className="text-center text-black text-3xl font-bold mb-4">
            SIGN UP
          </p>
          <p className="text-center text-gray-500 mb-4">
            Create a new account to start ordering food
          </p>

          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-1 "
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-1 "
          />

          <div className="relative w-full mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border rounded focus:outline-none focus:ring-1"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </button>
          </div>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-1"
          />

          <button
            onClick={handleSignup}
            className={`w-full ${buttonColor} text-white font-bold py-2 rounded transition duration-200`}
          >
            SIGN UP
          </button>

          <p className="text-center mt-3 text-sm">
            <Link to="/Login" className="text-green-700 hover:underline">
              Already have an account? Log in
            </Link>
          </p>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              {/* <FcGoogle size={28} /> */}
            </a>
            <a
              href="https://www.facebook.com/login"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FaFacebookF size={24} color="#1877F2" /> */}
            </a>
            <a href="https://github.com/login" target="_blank" rel="noreferrer">
              {/* <FaGithub size={24} color="#333" /> */}
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Signup;
