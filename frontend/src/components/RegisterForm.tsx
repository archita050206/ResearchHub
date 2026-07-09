import { useState } from "react";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUser,
} from "react-icons/fa";


interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  institution: string;
  interest: string;
  agree: boolean;
}

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] =
    useState<RegisterFormData>({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      institution: "",
      interest: "",
      agree: false,
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    console.log(formData);

    // Backend API call here

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className=" w-full px-7  mb-8 mt-12">

      {/* Heading */}

      <div className="mb-4">

        <h2 className="text-3xl font-bold mb-2">
          Create your account
        </h2>

        <p className="mt-1 text-gray-500">
          Start your research journey with professional-grade
          tools.
        </p>

      </div>

      {/* Google */}

      

       

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {/* Full Name */}

        <div>

          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold"
          >
            Full Name
          </label>

          <div className="relative">

            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Dr. Jane Smith"
              className="w-full rounded-xl border border-gray-300 py-2 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold"
          >
            Academic Email
          </label>

          <div className="relative">

            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="jane.smith@university.edu"
              className="w-full rounded-xl border border-gray-300 py-2 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* Password Row */}

        <div className="grid gap-6 md:grid-cols-2">

          {/* Password */}

          <div>

            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold"
            >
              Password
            </label>

            <div className="relative">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-300 py-2 pl-12 pr-12 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
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

          {/* Confirm Password */}

          <div>

            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-semibold"
            >
              Confirm Password
            </label>

            <div className="relative">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-300 py-2 pl-12 pr-12 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

        </div>
                {/* Institution */}

        <div>

          <label
            htmlFor="institution"
            className="mb-2 block text-sm font-semibold"
          >
            Institution
          </label>

          <input
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            list="institutions"
            type="text"
            placeholder="Search for your university"
            className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <datalist id="institutions">
            <option value="MIT" />
            <option value="Stanford University" />
            <option value="Oxford University" />
            <option value="Harvard University" />
            <option value="CERN" />
            <option value="Lovely Professional University" />
          </datalist>

        </div>

        {/* Research Interest */}

        <div>

          <label
            htmlFor="interest"
            className="mb-2 block text-sm font-semibold"
          >
            Primary Research Interest
          </label>

          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >

            <option value="">
              Select a field
            </option>

            <option value="ai">
              Computer Science & AI
            </option>

            <option value="biotech">
              Biotechnology & Genetics
            </option>

            <option value="physics">
              Theoretical Physics
            </option>

            <option value="medicine">
              Clinical Medicine
            </option>

            <option value="social">
              Social Sciences
            </option>

          </select>

        </div>
      

        {/* Terms */}

        <label className="flex items-start gap-4 mt-3 mb-6">

          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1 h-4 w-4 accent-blue-600"
          />

          <span className="text-sm leading-6 text-gray-600">

            I agree to the

            <button
              type="button"
              className="mx-1 font-semibold text-blue-600 hover:underline"
            >
              Terms & Conditions
            </button>

            and

            <button
              type="button"
              className="ml-1 font-semibold text-blue-600 hover:underline"
            >
              Privacy Policy
            </button>

          </span>

        </label>

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >

          {loading ? (

            <>

              <svg
                className="mr-3 h-5 w-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >

                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                  opacity="0.25"
                />

                <path
                  fill="white"
                  d="M22 12a10 10 0 0 1-10 10V18a6 6 0 0 0 6-6h4Z"
                />

              </svg>

              Creating Account...

            </>

          ) : (

            "Create Account"

          )}

        </button>

      </form>

      {/* Bottom */}

      <div className="mt-6 text-center">

        <p className="text-gray-500">

          Already have an account?

          <button
            type="button"
            className="ml-2 font-semibold text-blue-600 hover:underline"
          >
            Login
          </button>

        </p>

      </div>

    </div>
  );
};

export default RegisterForm;