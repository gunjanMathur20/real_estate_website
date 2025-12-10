import React from "react";
import { toast } from "react-toastify"; // Import toast notifications

// ContactPage component allows users to submit a contact form
export default function ContactPage() {
  const [result, setResult] = React.useState(""); // State to show form submission status

  // Function to handle form submission
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setResult("Sending...."); // Show sending status

    const formData = new FormData(event.target); // Collect form data
    formData.append("access_key", "0d799668-7d52-42c7-871f-565aff1bbe8c"); // Add API access key

    // Send form data to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json(); // Parse response

    // Handle success or error
    if (data.success) {
      setResult(""); // Reset button text
      toast.success("Form Submitted Successfully"); // Show success toast
      event.target.reset(); // Clear form
    } else {
      console.log("Error", data); // Log error fff
      toast.error(data.message); // Show error toast
      setResult(""); // Reset button text
    }
  };

  return (
    <>
      {/* Main container */}
      <div
        className="text-center p-6 py-8 lg:px-32 w-full overflow-hidden"
        id="Contact" // Section id for navigation
      >
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ">
          Contact{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            With Us
          </span>
        </h1>

        {/* Subheading / description */}
        <p className="text-center text-gray-500 mb-8 mx-auto text-base sm:text-lg md:text-xl lg:text-xl max-w-md sm:max-w-xl md:max-w-2xl">
          Let’s turn your plans into reality. Connect with us today and take the
          first step toward a brighter future.
        </p>

        {/* Contact form */}
        <form
          className="max-w-4xl mx-auto text-gray-600 pt-8"
          action="submit"
          onSubmit={onSubmit} // Handle form submission
        >
          {/* Name and Email fields */}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left mb-4">
              Your Name
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="w-full md:w-1/2 text-left md:pl-4">
              Your Email
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          {/* Message field */}
          <div className="py-6 text-left">
            Message
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-45 resize-none focus:outline-none"
              name="Message"
              id="#"
              placeholder="Message"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer">
            {result ? result : "Send Message"}{" "}
            {/* Show sending status or default text */}
          </button>
        </form>
      </div>
    </>
  );
}
