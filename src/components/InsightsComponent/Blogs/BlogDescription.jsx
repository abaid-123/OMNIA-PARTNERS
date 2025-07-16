import React from "react";

const BlogDescription = () => {
  return (
    <div className="w-full px-4 md:px-12 lg:px-32 py-10 flex flex-col items-center text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Our Latest Blogs
      </h2>
      <hr className="w-full  border-t-2 border-gray-200 my-4" />

      {/* Description */}
      <p className="text-gray-600 max-w-4xl mb-8 text-sm md:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500.
      </p>

      {/* Subscription Input */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-200">
          Subscribe
        </button>
      </div>
      <hr className="w-full  border-t-2 border-gray-200 my-8" />

    </div>
  );
};

export default BlogDescription;
