import { motion } from "framer-motion"; // For smooth animations
import { HiX } from "react-icons/hi"; // Close icon
import { useState } from "react"; // React state management
import { toast } from "react-toastify"; // For toast notifications

// Login component receives two props:
// onClose -> function to close the login modal
// onRegisterOpen -> function to open the registration modal
export default function Login({ onClose, onRegisterOpen }) {
  const [email, setEmail] = useState(""); // State to store email input
  const [password, setPassword] = useState(""); // State to store password input
  const [error, setError] = useState(""); // State to store error messages

  // Function to handle login
  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user")); // Retrieve saved user from localStorage

    // Check if user exists
    if (!savedUser) {
      setError("No account found! Please register first.");
      toast.error("No account found!");
      return;
    }

    // Check if email and password match saved credentials
    if (email !== savedUser.email || password !== savedUser.password) {
      setError("Incorrect email or password!");
      toast.error("Incorrect email or password!");
      return;
    }

    // Successful login
    localStorage.setItem("loggedIn", "true"); // Set login status in localStorage
    toast.success("Logged in successfully!");
    onClose(); // Close the modal
  };

  return (
    
    <div className="fixed inset-0 z-[999] flex items-center justify-center min-h-screen">
      {/* Click outside to close modal */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal content with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Starting animation state
        animate={{ opacity: 1, scale: 1 }} // Animate to this state
        exit={{ opacity: 0, scale: 0.8 }} // Exit animation
        transition={{ duration: 0.3 }} // Animation duration
        className="relative bg-white w-full max-w-md p-6 rounded-xl shadow-xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl cursor-pointer"
        >
          <HiX />
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold text-blue-500">Urban</span>
          <h1 className="text-4xl font-bold text-black">Nest </h1>
        </div>

        {/* Welcome message */}
        <h2 className="text-center text-black text-xl font-semibold mt-4">
          Great to have you back!
        </h2>

        {/* Display error messages */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Email input */}
        <div className="mt-6">
          <label className="text-black font-medium">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black bg-white focus:border-black"
          />
        </div>

        {/* Password input */}
        <div className="mt-4">
          <label className="text-black font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black bg-white focus:border-black"
          />
        </div>

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-black text-white rounded-lg mt-6"
        >
          LOG IN
        </button>

        {/* Link to open registration modal */}
        <p className="text-center mt-4 text-black">
          Don’t have an account?{" "}
          <span
            className="text-red-500 cursor-pointer"
            onClick={onRegisterOpen}
          >
            Register now
          </span>
        </p>
      </motion.div>
    </div>
  );
}
