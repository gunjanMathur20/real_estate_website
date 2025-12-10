import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../assets/assets";


export default function ProjectDetailsPage() {
  const { id } = useParams(); // Get project ID from URL
  const project = projectsData[id]; // Fetch project data

  // Show error if project not found
  if (!project) {
    return (
      <h1 className="text-center py-20 text-2xl text-red-500">
        Project Not Found
      </h1>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 my-10">
      {/* Back Button */}
      <div className="flex justify-end">
        <Link
          to="/projects"
          className="text-blue-600 underline text-lg shadow-md p-2 rounded"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Main content: Image + Details */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Project Image */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[350px] mb-10 object-cover rounded-lg"
          />
        </div>

        {/* Right: Project Details */}
        <div>
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-gray-600 text-xl mt-1">
            {project.price} • {project.location}
          </p>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              {project.description ||
                "Modern home with premium design and luxury interiors."}
            </p>
          </div>

          {/* Features: Area, Bedrooms, Bathrooms */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="p-5 bg-gray-100 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Area</h3>
              <p className="text-gray-600 mt-1">
                {project.area || "2500 sq ft"}
              </p>
            </div>
            <div className="p-5 bg-gray-100 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Bedrooms</h3>
              <p className="text-gray-600 mt-1">
                {project.bedrooms || "4 Bedrooms"}
              </p>
            </div>
            <div className="p-5 bg-gray-100 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Bathrooms</h3>
              <p className="text-gray-600 mt-1">
                {project.bathrooms || "3 Bathrooms"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Want more details?</h2>
        <p className="text-gray-600">
          Contact our sales team for pricing, availability, and site visits.
        </p>
        <Link to="/contact">
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  );
}
