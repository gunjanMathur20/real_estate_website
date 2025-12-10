import { motion } from "framer-motion"; // For smooth animations
import { HiX } from "react-icons/hi"; // Close icon
import { useState } from "react"; // React state management
import { toast } from "react-toastify"; // For toast notifications

// Register component receives two props:
// onClose -> function to close the registration modal
// onLoginOpen -> function to open the login modal
export default function Register({ onClose, onLoginOpen }) {
  const [name, setName] = useState(""); // State for user name input
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState(""); // State for error messages

  // Function to handle registration
  const handleRegister = () => {
    // Validate that all fields are filled
    if (!name || !email || !password) {
      setError("Please fill all fields!");
      toast.error("Please fill all fields!");
      return;
    }

    // Save user data to localStorage
    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    toast.success("Account created successfully!");

    // Close registration modal and open login modal
    onClose();
    onLoginOpen();
  };

  return (
 
    <div className="fixed inset-0 z-[999] flex items-center justify-center min-h-screen">
      {/* Click outside the modal to close it */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal content with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Start state for animation
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

        {/* Heading */}
        <h2 className="text-center text-black text-xl font-semibold mt-4">
          Create your account
        </h2>

        {/* Display error message if exists */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Name input */}
        <div className="mt-6">
          <label className="text-black font-medium">User Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black bg-white focus:border-black"
          />
        </div>

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

        {/* Register button */}
        <button
          onClick={handleRegister}
          className="w-full py-3 bg-black text-white rounded-lg mt-6"
        >
          REGISTER
        </button>

        {/* Link to open login modal */}
        <p className="text-center mt-4 text-black">
          Already have an account?{" "}
          <span className="text-red-500 cursor-pointer" onClick={onLoginOpen}>
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}
