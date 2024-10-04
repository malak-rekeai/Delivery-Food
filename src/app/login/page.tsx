"use client"; // Add this at the top of your component

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-yellow-400">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">Login</h2>
        
        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-yellow-600">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 p-2 block w-full border border-yellow-400 rounded-md focus:border-yellow-600 focus:ring-yellow-600"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-yellow-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="mt-1 p-2 block w-full border border-yellow-400 rounded-md focus:border-yellow-600 focus:ring-yellow-600"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-yellow-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-yellow-500">Or sign in with</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-4">
          {/* Google Sign In */}
          <button
            className="w-full flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium text-yellow-600 bg-white border-yellow-600 hover:bg-yellow-50 transition"
            onClick={() => alert("Sign in with Google")}
          >
            <FcGoogle className="text-2xl mr-2" /> Sign in with Google
          </button>

          {/* Facebook Sign In */}
          <button
            className="w-full flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium text-yellow-600 bg-white border-yellow-600 hover:bg-yellow-50 transition"
            onClick={() => alert("Sign in with Facebook")}
          >
            <FaFacebook className="text-2xl text-yellow-600 mr-2" /> Sign in with Facebook
          </button>
        </div>

        {/* Additional Links */}
        <div className="text-center mt-6">
          <a href="#" className="text-sm text-yellow-600 hover:underline">
            Forgot password?
          </a>
          <p className="text-sm text-yellow-600 mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-yellow-700 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
