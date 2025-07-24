import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = ({ loginImage, buttonColor }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: "", severity: "info" });

  const handleLogin = () => {
    setSnack({ open: true, message: "Login Successful", severity: "success" });
    setTimeout(() => setSnack({ ...snack, open: false }), 3000); 
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
       
        <div className="hidden md:flex w-1/2 items-center justify-center p-4">
          <img src={loginImage} alt="NestMart Grocery" className="w-full h-full object-contain" />
        </div>

        
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <p className="text-center text-3xl font-bold mb-4 text-gray-900">LOG IN</p>
          <p className="text-center text-gray-500 mb-4">Log in to continue shopping</p>

         
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 rounded-xl border border-gray-300 bg-gray-100 focus:bg-white focus:border-black focus:outline-none transition"
          />

         
          <div className="relative w-full mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-xl border border-gray-300 bg-gray-100 focus:bg-white focus:border-black focus:outline-none transition"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </button>
          </div>

         
          <label className="flex items-center gap-2 mb-3">
  <input
    type="checkbox"
    className="w-4 h-4 accent-[#3BB77E] border-gray-300 rounded text-white"
  />
  <span className="text-gray-600 text-sm">Remember me</span>
</label>
          
          <button
            onClick={handleLogin}
            className={`w-full ${buttonColor} text-white font-bold py-2 rounded-xl transition duration-200`}
          >
            LOG IN
          </button>

        
          <p className="text-center mt-3 text-sm">
            <Link to="/Signup" className="text-green-700 hover:underline">
              New here? Create an account
            </Link>
          </p>

         
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          
          <div className="flex justify-center gap-4">
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              <FcGoogle size={28} />
            </a>
            <a href="https://www.facebook.com/login" target="_blank" rel="noreferrer">
              <FaFacebookF size={24} color="#1877F2" />
            </a>
            <a href="https://github.com/login" target="_blank" rel="noreferrer">
              <FaGithub size={24} color="#333" />
            </a>
          </div>
        </div>
      </div>

      
      {snack.open && (
  <div
    className="fixed bottom-5 px-4 py-2 rounded text-white transition"
    style={{ backgroundColor: "#3BB77E" }} // Directly set the color
  >
    {snack.message}
  </div>
)}
    </div>
  );
};

export default Login;
