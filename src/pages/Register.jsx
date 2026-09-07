
// Framer Motion is used for smooth modal and error animations
import { motion } from "framer-motion";

// Close (X) icon used for closing the registration modal
import { HiX } from "react-icons/hi";

// Icons used inside the registration form
import {
  FiUser,        // User/name icon
  FiMail,        // Email icon
  FiLock,        // Password icon
  FiArrowRight,  // Arrow icon for register button
} from "react-icons/fi";

// React hook used to manage form state
import { useState } from "react";

// Toast notifications for success and error messages
import { toast } from "react-toastify";


// ================= REGISTER COMPONENT =================

export default function Register({ onClose, onLoginOpen }) {

  // Stores the user's full name
  const [name, setName] = useState("");

  // Stores the user's email address
  const [email, setEmail] = useState("");

  // Stores the user's password
  const [password, setPassword] = useState("");

  // Stores validation/error messages
  const [error, setError] = useState("");


  // ================= REGISTER HANDLER =================
  // Runs when the user clicks the "Create Account" button

  const handleRegister = () => {

    // Clear any previously displayed error
    setError("");


    // Check whether any required field is empty
    if (!name || !email || !password) {

      // Display error message inside the form
      setError("Please fill in all fields.");

      // Show error notification
      toast.error("Please fill in all fields.");

      // Stop the registration process
      return;
    }


    // Create an object containing the user's registration data
    const userData = {
      name,
      email,
      password,
    };


    // Save the user data in browser localStorage
    // JSON.stringify converts the object into a string
    localStorage.setItem("user", JSON.stringify(userData));


    // Show successful registration notification
    toast.success("Account created successfully!");


    // Close the registration modal
    onClose();

    // Open the login modal after registration
    onLoginOpen();
  };


  // ================= UI =================

  return (

    // Full-screen container for the registration modal
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-4">

      {/* ================= OVERLAY ================= */}
      {/* Dark transparent background behind the registration card */}

      <motion.div
        // Initial state before animation starts
        initial={{ opacity: 0 }}

        // Final visible state
        animate={{ opacity: 1 }}

        // Exit animation when modal closes
        exit={{ opacity: 0 }}

        // Full-screen semi-transparent overlay
        className="absolute inset-0 bg-gray-950/40"

        // Clicking outside the card closes the modal
        onClick={onClose}
      />


      {/* ================= REGISTER CARD ================= */}
      {/* Main registration modal */}

      <motion.div
        // Initial animation state
        initial={{
          opacity: 0,
          y: 15,
          scale: 0.98,
        }}

        // Animation state after modal appears
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        // Animation state when modal closes
        exit={{
          opacity: 0,
          y: 15,
          scale: 0.98,
        }}

        // Controls the speed and easing of the animation
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
        {/* Small blue line at the top of the registration card */}

        <div className="h-1 w-full bg-blue-600" />


        {/* ================= CLOSE BUTTON ================= */}
        {/* Button used to close the registration modal */}

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
          {/* Close X icon */}
          <HiX size={17} />
        </button>


        {/* ================= CONTENT ================= */}

        <div className="px-6 py-6 sm:px-7 sm:py-7">


          {/* ================= BRAND ================= */}
          {/* UrbanNest logo/brand text */}

          <div className="mb-5">

            {/* Brand name */}
            <div className="text-xl font-semibold tracking-tight">

              {/* "Urban" part of the logo */}
              <span className="text-gray-950">
                Urban
              </span>

              {/* "Nest" part highlighted in blue */}
              <span className="text-blue-600">
                Nest
              </span>

            </div>

            {/* Small blue decorative line below the logo */}
            <div className="mt-2 h-0.5 w-7 bg-blue-600" />

          </div>


          {/* ================= HEADING ================= */}

          <div className="mb-5 pr-8">

            {/* Small section label */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              Create Account
            </p>

            {/* Main registration heading */}
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-gray-950">
              Join UrbanNest
            </h2>

            {/* Short description */}
            <p className="mt-1.5 text-sm text-gray-500">
              Create your account to explore properties.
            </p>

          </div>


          {/* ================= ERROR MESSAGE ================= */}
          {/* This section only appears when an error exists */}

          {error && (
            <motion.div

              // Error message starts slightly above and transparent
              initial={{ opacity: 0, y: -4 }}

              // Error message becomes visible in its final position
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
              {/* Display the current error message */}
              {error}
            </motion.div>
          )}


          {/* ================= FORM ================= */}

          <div className="space-y-4">


            {/* ================= NAME FIELD ================= */}

            <div>

              {/* Label for name input */}
              <label
                htmlFor="register-name"
                className="mb-1.5 block text-xs font-semibold text-gray-700"
              >
                Full Name
              </label>


              {/* Input wrapper */}
              <div className="relative">

                {/* User icon */}
                <FiUser
                  size={16}
                  className="
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />


                {/* Name input */}
                <input
                  id="register-name"
                  type="text"

                  // Controlled input value
                  value={name}

                  // Update name state whenever user types
                  onChange={(e) => setName(e.target.value)}

                  // Placeholder text
                  placeholder="Enter your full name"

                  // Helps browsers autofill the user's name
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


            {/* ================= EMAIL FIELD ================= */}

            <div>

              {/* Label for email input */}
              <label
                htmlFor="register-email"
                className="mb-1.5 block text-xs font-semibold text-gray-700"
              >
                Email Address
              </label>


              {/* Input wrapper */}
              <div className="relative">

                {/* Email icon */}
                <FiMail
                  size={16}
                  className="
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />


                {/* Email input */}
                <input
                  id="register-email"
                  type="email"

                  // Controlled input value
                  value={email}

                  // Update email state when user types
                  onChange={(e) => setEmail(e.target.value)}

                  // Placeholder text
                  placeholder="you@example.com"

                  // Helps browsers autofill email
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


            {/* ================= PASSWORD FIELD ================= */}

            <div>

              {/* Label for password input */}
              <label
                htmlFor="register-password"
                className="mb-1.5 block text-xs font-semibold text-gray-700"
              >
                Password
              </label>


              {/* Input wrapper */}
              <div className="relative">

                {/* Lock icon */}
                <FiLock
                  size={16}
                  className="
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />


                {/* Password input */}
                <input
                  id="register-password"
                  type="password"

                  // Controlled password value
                  value={password}

                  // Update password state when user types
                  onChange={(e) => setPassword(e.target.value)}

                  // Placeholder text
                  placeholder="Create a password"

                  // Tells the browser this is a new password
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


            {/* ================= REGISTER BUTTON ================= */}

            <button
              type="button"

              // Call registration handler when clicked
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

              {/* Button text */}
              Create Account

              {/* Arrow moves slightly on hover */}
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


          {/* ================= LOGIN SECTION ================= */}
          {/* Allows existing users to switch to the login modal */}

          <div className="mt-5 border-t border-gray-100 pt-4 text-center">

            <p className="text-xs text-gray-500 sm:text-sm">

              {/* Login prompt */}
              Already have an account?{" "}

              {/* Opens the login modal */}
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