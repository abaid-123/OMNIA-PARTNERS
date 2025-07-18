import React from "react";
import { FiHeart, FiBookmark, FiShare2, FiThumbsUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const RecommendedCase = () => {
  const blogs = [
    {
      id: 1,
      title: "Strategic Services",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/Insights/Blogs/OmniaBlog6.png",
    },
    {
      id: 2,
      title: "Strategic Services",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/Insights/Blogs/OmniaBlog4.png",
    },
    {
      id: 3,
      title: "Strategic Services",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/Insights/Blogs/OmniaBlog5.png",
    },
    {
      id: 1,
      title: "Strategic Services",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/Insights/Blogs/OmniaBlog6.png",
    },
  ];
  return (
    <div className="mt-8 ">
      <p className="text-sm text-gray-400 mb-1">Others Blogs</p>

      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold whitespace-nowrap">
          Recommended From Omnia Partners Ltd
        </h2>
        <hr className="md:block hidden flex-grow border-t border-gray-300" />
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap -mx-2">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[15px] mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{blog.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="">
                    <div className="flex items-center gap-2 ">
                      <div className="flex gap-1 cursor-pointer">
                        <FiHeart className="text-lg" />
                        <span>10k</span>
                      </div>
                      <div className="flex gap-1 cursor-pointer">
                        <FiThumbsUp className="text-lg" />
                        <span>12k</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4">
                      <FiShare2 className="text-3xl border border-gray-300 p-1 rounded-full cursor-pointer hover:bg-gray-100 " />
                      <FiBookmark className="text-3xl border border-gray-300 p-1 rounded-full cursor-pointer hover:bg-gray-100 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCase;
