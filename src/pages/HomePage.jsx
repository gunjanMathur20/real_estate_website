import React from "react";
import AboutPage from "./AboutPage"; // Import About section
import ProjectsPage from "./ProjectsPage"; // Import Projects section
import TestimonialPage from "./TestimonialPage"; // Import Testimonials section
import ContactPage from "./ContactPage"; // Import Contact section
import { Link } from "react-router-dom"; // For navigation links

// HomePage component renders the landing page with header and sections
export default function HomePage() {
  return (
    <>
      {/* Hero / Header Section */}
      <div
        className="min-h-screen mb-2 bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ backgroundImage: "url('/header_img.png')" }} // Background image
      >
        {/* Container for header text and buttons */}
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
            Find the Place Your Heart Calls Home
          </h2>

          {/* Subheading / Tagline */}
          <p className="text-xl mt-2 sm:text-4xl md:text-[32px] inline-block max-w-3xl font-semibold">
            Because Every Dream Deserves the Right Home
          </p>

          {/* Call-to-action buttons */}
          <div className="space-x-6 mt-16">
            <Link
              to="/projects" // Navigate to Projects page
              className="border border-white px-8 py-3 rounded"
            >
              Project
            </Link>
            <Link
              to="/contact" // Navigate to Contact page
              className="bg-blue-400 px-8 py-3 rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* Sections rendered below the hero */}
      <AboutPage /> {/* About Us section */}
      <ProjectsPage /> {/* Projects showcase */}
      <TestimonialPage /> {/* Testimonials from clients */}
      <ContactPage /> {/* Contact form */}
    </>
  );
}
