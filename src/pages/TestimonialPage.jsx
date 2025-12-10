import React from "react";
import { assets, testimonialsData } from "../assets/assets"; // Import assets (like star icon) and testimonials data

// TestimonialsPage component displays a list of customer testimonials
export default function TestimonialsPage() {
  return (
    <>
      {/* Container for the testimonials section */}
      <div
        className="container mx-auto py-4 pt-8 px-6 md:px-20 lg:px-32 my-8 w-full overflow-hidden"
        id="Testimonials" // Section id for navigation
      >
        {/* Section heading */}
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ">
          What Our{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Customers Say
          </span>
        </h1>

        {/* Section subheading / description */}
        <p className="text-center text-gray-500 mb-8 mx-auto text-base sm:text-lg md:text-xl lg:text-xl max-w-md sm:max-w-xl md:max-w-2xl">
          Real experiences from clients who trusted us with one of their biggest
          decisions.
        </p>

        {/* Flex container to display testimonials cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.map((testimonial, idx) => (
            // Single testimonial card
            <div
              className="max-w-[350px] border border-gray-100 shadow-lg rounded px-8 py-12 text-center"
              key={idx}
            >
              {/* Customer image */}
              <img
                className="w-20 h-20 rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt={testimonial.alt}
              />

              {/* Customer name */}
              <h2 className="text-xl text-gray-700 font-medium">
                {testimonial.name}
              </h2>

              {/* Customer title / designation */}
              <p className="text-gray-500 text-sm">{testimonial.title}</p>

              {/* Customer rating as stars */}
              <div className="mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <img
                    key={idx}
                    src={assets.star_icon} // Star icon from assets
                    alt="rating icon"
                    className="inline-block w-5 h-5"
                  />
                ))}
              </div>

              {/* Customer testimonial text */}
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
