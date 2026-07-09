import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import GoogleButton from "./GoogleButton";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="rounded-3xl  bg-white mx-14 px-10 py-7">

      {/* Header */}

      <div className="mb-8 text-center">

        <h2 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h2>

        <p className="mt-2 text-gray-500">
          Sign in to continue to ResearchHub
        </p>

      </div>

      {/* Form */}

      <form className="space-y-6">

        {/* Email */}

        <div>

          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email Address
          </label>

          <div className="relative">

            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              id="email"
              type="email"
              placeholder="researcher@university.edu"
              className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* Password */}

        <div>

          <div className="mb-2 flex items-center justify-between">

            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <button
              type="button"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <div className="relative">

            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              className="h-4 w-4 rounded accent-blue-600"
            />

            <span className="text-sm text-gray-600">
              Remember Me
            </span>

          </label>

        </div>

        {/* Login Button */}

        <button
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </button>

        {/* Divider */}

        <div className="flex items-center gap-4">

          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="text-sm text-gray-400">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-300"></div>

        </div>

        {/* Google */}

        <GoogleButton />

      </form>

      {/* Bottom */}

      <div className="mt-5 text-center">

        <p className="text-gray-500">

          Don't have an account?

          <button
            className="ml-2 font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </button>

        </p>

      </div>

    </div>
  );
};

export default LoginForm;