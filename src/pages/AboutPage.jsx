import React from "react";
import { assets } from "../assets/assets"; // Import brand image and other assets

// AboutPage component displays information about the brand and key stats
export default function AboutPage() {
  return (
    <>
      {/* Main container for About section */}
      <div className="container flex flex-col items-center justify-center mx-auto p-10 md:px-20 lg:px-32 w-full overflow-hidden">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 ">
          About{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Our Brand
          </span>
        </h1>

        {/* Subheading / tagline */}
        <p className="text-gray-500 max-w-80 text-center text-2xl">
          Your Dream, Our Dedication — Every Step of the Way
        </p>

        {/* Flex container for image and stats/content */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          {/* Brand image */}
          <img
            src={assets.brand_img}
            alt="about-brand-img"
            className="w-full sm:w-1/2 max-w-lg h-[430px]"
          />

          {/* Stats and description */}
          <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p className="">Years of Experience</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">12+</p>
                <p className="">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">20+</p>
                <p className="">Mn. sq. Ft. Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">27+</p>
                <p className="">Ongoing Projects</p>
              </div>
            </div>

            {/* Description about the brand */}
            <p className="my-10 max:w-lg text-xl text-gray-800">
              With a legacy of delivering innovative and customer-centric
              developments, we craft spaces that elevate everyday living. Our
              focus is on quality, transparency, and creating sustainable
              communities where comfort meets modern elegance.
            </p>

            {/* Call to action button */}
            <button className="bg-blue-600 text-white px-8 py-2 rounded cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
