import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Register({ onClose, onLoginOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    toast.success("Account created successfully!");

    onClose();
    onLoginOpen();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-4">
      {/* ================= OVERLAY ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-gray-950/40"
        onClick={onClose}
      />

      {/* ================= REGISTER CARD ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 15,
          scale: 0.98,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="
          relative z-10
          w-full max-w-[400px]
          overflow-hidden
          rounded-2xl
          border border-gray-200
          bg-white
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        "
      >
        {/* ================= TOP ACCENT ================= */}

        <div className="h-1 w-full bg-blue-600" />

        {/* ================= CLOSE ================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close registration"
          className="
            absolute right-4 top-4
            z-20
            flex h-8 w-8
            items-center justify-center
            rounded-full
            border border-gray-200
            bg-white
            text-gray-500
            transition
            hover:border-gray-300
            hover:bg-gray-50
            hover:text-gray-900
          "
        >
          <HiX size={17} />
        </button>

        {/* ================= CONTENT ================= */}

        <div className="px-6 py-6 sm:px-7 sm:py-7">
          {/* BRAND */}

          <div className="mb-5">
            <div className="text-xl font-semibold tracking-tight">
              <span className="text-gray-950">Urban</span>
              <span className="text-blue-600">Nest</span>
            </div>

            <div className="mt-2 h-0.5 w-7 bg-blue-600" />
          </div>

          {/* HEADING */}

          <div className="mb-5 pr-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              Create Account
            </p>

            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-gray-950">
              Join UrbanNest
            </h2>

            <p className="mt-1.5 text-sm text-gray-500">
              Create your account to explore properties.
            </p>
          </div>

          {/* ERROR */}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                mb-4
                rounded-lg
                border border-red-100
                bg-red-50
                px-3 py-2.5
                text-xs
                text-red-600
              "
            >
              {error}
            </motion.div>
          )}

          {/* ================= FORM ================= */}

          <div className="space-y-4">
            {/* NAME */}

            <div>
              <label
                htmlFor="register-name"
                className="mb-1.5 block text-xs font-semibold text-gray-700"
              >
                Full Name
              </label>

              <div className="relative">
                <FiUser
                  size={16}
                  className="
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  id="register-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className="
                    w-full
                    rounded-lg
                    border border-gray-200
                    bg-gray-50
                    py-3
                    pl-10 pr-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-blue-500/10
                  "
                />
              </div>
            </div>

            {/* EMAIL */}

            <div>
              <label
                htmlFor="register-email"
                className="mb-1.5 block text-xs font-semibold text-gray-700"
              >
                Email Address
              </label>

              <div className="relative">
                <FiMail
                  size={16}
                  className="
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="
                    w-full
                    rounded-lg
                    border border-gray-200
                    bg-gray-50
                    py-3
                    pl-10 pr-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-blue-500/10
                  "
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div>
              <label
                htmlFor="register-password"
                className="mb-1.5 block text-xs font-semibold text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <FiLock
                  size={16}
                  className="
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  id="register-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className="
                    w-full
                    rounded-lg
                    border border-gray-200
                    bg-gray-50
                    py-3
                    pl-10 pr-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-blue-500/10
                  "
                />
              </div>
            </div>

            {/* REGISTER BUTTON */}

            <button
              type="button"
              onClick={handleRegister}
              className="
                group
                flex w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-blue-600
                px-5 py-3
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition
                duration-300
                hover:bg-blue-700
                hover:shadow-md
                active:scale-[0.99]
              "
            >
              Create Account
              <FiArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* LOGIN */}

          <div className="mt-5 border-t border-gray-100 pt-4 text-center">
            <p className="text-xs text-gray-500 sm:text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onLoginOpen}
                className="
                  font-semibold
                  text-blue-600
                  transition-colors
                  hover:text-blue-700
                "
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
