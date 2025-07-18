import React from "react";
import { FiShare2, FiBookmark, FiHeart } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Strategic Services",

    image: "/images/Insights/CaseStudies/Case2.png",
    sidebarimage: "/images/Insights/Blogs/Sidebar5.png",
  },
  {
    id: 2,
    title: "Strategic Services",

    image: "/images/Insights/CaseStudies/Case1.png",
    sidebarimage: "/images/Insights/Blogs/Sidebar6.png",
  },
  {
    id: 3,
    title: "Strategic Services",

    image: "/images/Insights/CaseStudies/Case3.png",
    sidebarimage: "/images/Insights/Blogs/Sidebar4.png",
  },
  {
    id: 4,
    title: "Strategic Services",

    image: "/images/Insights/CaseStudies/Case5.png",
    sidebarimage: "/images/Insights/Blogs/Sidebar7.png",
  },
  {
    id: 5,
    title: "Strategic Services",

    image: "/images/Insights/CaseStudies/Case4.png",
    sidebarimage: "/images/Insights/Blogs/Sidebar3.png",
  },
  {
    id: 6,
    title: "Strategic Services",

    image: "/images/Insights/CaseStudies/Case6.png",

    sidebarimage: "/images/Insights/Blogs/Sidebar8.png",
  },
  {
    id: 7,
    title: "Sustainable Tech: A Green Revolution",

    image: "/images/Insights/CaseStudies/Case7.png",
    sidebarimage: "/images/Insights/Blogs/Sidebar1.png",
  },
  {
    id: 8,
    title: "Cybersecurity Trends in 2025",

    image: "/images/Insights/CaseStudies/Case1.png",
    sidebarimage: "/images/Insights/Blogs/Sidebar2.png",
  },
  {
    id: 9,
    title: "Edge Computing: The Next Big Thing",

    image: "/images/Insights/CaseStudies/Case1.png",
    sidebarimage: "/images/Insights/Blogs/Sidebar8.png",
  },
];

const SidebarGroup = ({ title, items }) => (
  <div>
    <h3 className="font-semibold text-lg mb-4">{title}</h3>
    {items.map((item) => (
      <div key={item.id} className="gap-4 mb-2">
        <img
          src={item.sidebarimage}
          alt="Sidebar"
          className="w-full h-64  lg:h-24 object-cover rounded"
        />
        <div>
          <div className="font-semibold text-sm mt-4 lg:mt-2">
            Omnia Partners LTD
          </div>
          <p className="text-xs text-gray-500">
            In the ever-evolving landscape of technology, innovation knows no
            bounds.
          </p>
        </div>
      </div>
    ))}
  </div>
);
const IndustriesCase = () => {
  const navigate = useNavigate();

  const openBlog = (blog) => {
    navigate(`/insights/case-studies/${blog.id}`, { state: blog });
  };
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 ">
      {/* Blog Section */}
      <div className="flex-1 ">
        {blogData.slice(0, 6).map((blog) => (
          <div
            key={blog.id}
            onClick={() => openBlog(blog)}
            className="bg-white rounded-lg p-4 border-b border-gray-200 cursor-pointer"
          >
            {/* Author Info */}
            <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
              <img
                src="/images/logoicon.png"
                alt="Author"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">Omnia Partners LTD</div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="text-lg md:text-xl font-bold mb-2">
                    {blog.title}
                  </h2>
                  <div className="text-xs text-gray-400 mt-2">
                    29 February 2024 · 4 Mins Read
                  </div>
                </div>

                <p className="text-gray-600 text-sm">
                  "In the ever-evolving landscape of technology, innovation
                  knows no bounds. From artificial intelligence to
                  biotechnology, the possibilities seem endless Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Pariatur ut
                  possimus odit harum, doloremque mollitia soluta placeat magni
                  recusandae. Suscipit dolorum nobis assumenda consequuntur
                  placeat distinctio possimus eos aspernatur odio?"
                </p>
              </div>
              <img
                src={blog.image}
                alt="Blog"
                className="w-full md:w-48 h-64 md:h-40 object-cover rounded"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
              <div className="flex gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
                  <FiShare2 className="text-3xl p-1 border rounded-full border-gray-400" />
                  <span>Share</span>
                </div>
                <div className="flex items-center gap-1 hover:text-yellow-500 cursor-pointer">
                  <FiBookmark className="text-3xl p-1 border rounded-full border-gray-400" />
                  <span>Save</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Section */}
      <div className="w-full lg:w-1/4 border-0 lg:border-l">
        <aside className="space-y-8 px-4">
          <SidebarGroup
            title="Recommended Capabilities"
            items={blogData.slice(0, 3)}
          />
          <a
            href="#"
            className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
            See More Suggestions{" "}
          </a>
          <SidebarGroup
            title="Explore Our Industries"
            items={blogData.slice(3, 6)}
          />
          <a
            href="#"
            className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
            {"   "}See More Suggestions
          </a>
          <SidebarGroup
            title="Exclusive Whitepapers"
            items={blogData.slice(6, 9)}
          />
          <a
            href="#"
            className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
            {"  "}See More Suggestions
          </a>
        </aside>
      </div>
    </div>
  );
};

export default IndustriesCase;
