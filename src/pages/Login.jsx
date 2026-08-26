import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import {
  FiMail,
  FiLock,
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiShield,
} from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login({ onClose, onRegisterOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ================= LOGIN =================

  const handleLogin = () => {
    setError("");

    const savedUser = JSON.parse(localStorage.getItem("user"));

    // No registered account
    if (!savedUser) {
      setError("No account found. Please create an account first.");
      toast.error("No account found!");
      return;
    }

    // Invalid credentials
    if (
      email.trim().toLowerCase() !== savedUser.email.toLowerCase() ||
      password !== savedUser.password
    ) {
      setError("The email or password you entered is incorrect.");
      toast.error("Incorrect email or password!");
      return;
    }

    // Successful login
    localStorage.setItem("loggedIn", "true");

    toast.success("Welcome back to UrbanNest!");

    onClose();
  };

  // ================= UI =================

  return (
    <div className="fixed inset-0 z-[999] flex min-h-screen items-center justify-center overflow-y-auto px-4 py-5 sm:px-6">
      {/* ================= OVERLAY ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-gray-950/50"
        onClick={onClose}
      />

      {/* ================= LOGIN CARD ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 18,
          scale: 0.98,
        }}
        transition={{
          duration: 0.28,
          ease: "easeOut",
        }}
        className="relative z-10 my-auto w-full max-w-[430px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
      >
        {/* ================= TOP ACCENT ================= */}

        <div className="h-1 w-full bg-blue-600" />

        {/* ================= CLOSE BUTTON ================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close login"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 sm:right-5 sm:top-5"
        >
          <HiX size={18} />
        </button>

        {/* ================= CONTENT ================= */}

        <div className="px-5 py-7 sm:px-8 sm:py-8">
          {/* ================= BRAND ================= */}

          <div className="mb-7">
            <div className="flex items-center">
              <span className="text-2xl font-semibold tracking-tight text-gray-950">
                Urban
              </span>

              <span className="text-2xl font-semibold tracking-tight text-blue-600">
                Nest
              </span>
            </div>

            <div className="mt-3 h-px w-9 bg-blue-600" />
          </div>

          {/* ================= HEADING ================= */}

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              Welcome Back
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-[28px]">
              Sign in to UrbanNest
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Access your account and continue exploring properties that match
              your goals.
            </p>
          </div>

          {/* ================= ERROR ================= */}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-lg border border-red-100 bg-red-50 px-3.5 py-3 text-xs leading-5 text-red-600"
            >
              {error}
            </motion.div>
          )}

          {/* ================= FORM ================= */}

          <div className="mt-6 space-y-4.5">
            {/* EMAIL */}

            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <div className="relative">
                <FiMail
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-10.5 pr-4 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <FiLock
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleLogin();
                    }
                  }}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-10.5 pr-11 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-700"
                >
                  {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                </button>
              </div>
            </div>

            {/* ================= LOGIN BUTTON ================= */}

            <motion.button
              type="button"
              onClick={handleLogin}
              whileTap={{ scale: 0.98 }}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            >
              Sign In
              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>

          {/* ================= SECURITY NOTE ================= */}

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3.5 py-3">
            <FiShield size={16} className="mt-0.5 shrink-0 text-blue-600" />

            <p className="text-[11px] leading-5 text-gray-500">
              Your login details stay on this device and are used only to
              provide your UrbanNest account experience.
            </p>
          </div>

          {/* ================= REGISTER ================= */}

          <div className="mt-6 border-t border-gray-100 pt-5 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onRegisterOpen}
                className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Create one
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
