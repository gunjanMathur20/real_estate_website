import React, { useState, useEffect } from "react";
import { assets, projectsData } from "../assets/assets";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  const [offset, setOffset] = useState(0); // Slider offset
  const [cardsToShow, setCardsToShow] = useState(1); // Number of visible cards

  // Adjust number of cards based on screen width
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(4); // Desktop
      else if (window.innerWidth >= 640) setCardsToShow(2); // Tablet
      else setCardsToShow(1); // Mobile
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Calculate slide percentage based on visible cards
  const slidePercentage = 100 / cardsToShow;
  const maxOffset = (projectsData.length - cardsToShow) * slidePercentage; // Max slider offset

  // Slide to next project
  const showNextProject = () => {
    setOffset((prev) => (prev >= maxOffset ? prev : prev + slidePercentage));
  };

  // Slide to previous project
  const showPrevProject = () => {
    setOffset((prev) => (prev <= 0 ? prev : prev - slidePercentage));
  };

  return (
    <>
      <div className="container mx-auto py-4 pt-2 px-6 md:px-20 lg:px-32 my-6 w-full overflow-hidden">
        {/* Section Title */}
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
          Projects{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Completed
          </span>
        </h1>
        <p className="text-center text-gray-500 max-w-80 mx-auto text-xl">
          Crafting Space, Building Legacies — Explore our Portfolio
        </p>

        {/* Slider Navigation Buttons */}
        <div className="flex justify-end items-center mb-3">
          <button
            onClick={showPrevProject}
            className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
            aria-level="Previous Projects"
          >
            <img src={assets.left_arrow} alt="Previous Button" />
          </button>
          <button
            onClick={showNextProject}
            className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
            aria-level="Next Projects"
          >
            <img src={assets.right_arrow} alt="Next Button" />
          </button>
        </div>

        {/* Project Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${offset}%)`, // Slide effect
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[85%] sm:w-[48%] md:w-[33%] lg:w-[25%]"
              >
                <Link to={`/project/${index}`}>
                  <div className="relative">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[350px] mb-10 object-cover rounded-lg"
                    />
                    {/* Project Info Overlay */}
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                      <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-md">
                        <h2 className="text-xl font-semibold text-gray-800">
                          {project.title}
                        </h2>
                        <p className="text-gray-500 text-sm">
                          {project.price} <span className="px-1"> | </span>
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
