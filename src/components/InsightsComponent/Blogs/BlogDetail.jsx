import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import StartConsultation from "./StartConsultation";
import Talkus from "../../Talkus";
import Footer from "../../Footer";
import { FiHeart, FiBookmark, FiShare2 } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import BlogComments from "./BlogComments";
import RecommendedBlogs from "./RecommendedBlogs";

const BlogDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const blog = location.state;

  // Dynamic content for blog sections
  const blogSections = [
    {
      title: "1. Artificial Intelligence (AI):",
      description:
        "Artificial Intelligence continues to be at the forefront of technological innovation. With machine learning algorithms becoming increasingly sophisticated, AI is transforming industries ranging from healthcare to finance. From predictive analytics to natural language processing, AI-powered solutions are enabling businesses to make data-driven decisions and enhance efficiency like never before.",
      image: "/images/Insights/Blogs/Ai.png",
    },
    {
      title: "2. Internet of Things (IoT):",
      description:
        "The Internet of Things is another revolutionary technology that is redefining connectivity. IoT devices, ranging from smart home appliances to industrial sensors, are creating interconnected ecosystems that enable seamless communication and automation. This connectivity not only enhances convenience but also opens up new possibilities for optimizing processes and improving resource management.",
    },
    {
      title: "3. Blockchain:",
      description:
        "Blockchain technology, originally known for its association with cryptocurrencies like Bitcoin, has now transcended its initial applications. With its decentralized and immutable ledger system, blockchain is being explored across various sectors, including finance, supply chain management, and healthcare. Its potential to enhance security, transparency, and efficiency is driving widespread adoption and innovation.",
    },
    {
      title: "4. 5G Technology:",
      description:
        "The Internet of Things is another revolutionary technology that is redefining connectivity. IoT devices, ranging from smart home appliances to industrial sensors, are creating interconnected ecosystems that enable seamless communication and automation. This connectivity not only enhances convenience but also opens up new possibilities for optimizing processes and improving resource management",
    },
    {
      title: "5. Quantum Computing:",
      description:
        "Quantum computing represents a paradigm shift in computational power. Unlike classical computers, which process data in binary bits, quantum computers leverage quantum bits or qubits to perform calculations at an exponential scale. While still in its infancy, quantum computing has the potential to revolutionize fields such as cryptography, drug discovery, and optimization problems, solving complex problems that are currently beyond the reach of classical computers.",
    },
    {
      title: "6. Renewable Energy Technologies:",
      description:
        "The Internet of Things is another revolutionary technology that is redefining connectivity. IoT devices, ranging from smart home appliances to industrial sensors, are creating interconnected ecosystems that enable seamless communication and automation. This connectivity not only enhances convenience but also opens up new possibilities for optimizing processes and improving resource management.",
    },
  ];

  if (!blog) {
    return (
      <div className="p-8 text-center text-red-500 font-semibold">
        Blog data not found. Please go back and try again.
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Author Info */}
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-6">
          <img
            src="/images/logoicon.png"
            alt="Author"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">Omnia Partners LTD</div>
            <div className="text-xs text-gray-400">
              29 February 2024 · 4 Mins Read
            </div>
          </div>
        </div>

        {/* Title & Intro */}
        <div className="border-l-4 border-blue-600 pl-3" >
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{blog.title}</h1>
          <p className="text-gray-600 text-sm mb-4">
            Introduction: In today’s fast-paced world, technology is evolving at
            an unprecedented rate, driving innovation across various sectors.
            From artificial intelligence to blockchain, advancements in
            technology are reshaping industries, revolutionizing the way we
            live, work, and interact. In this article, we’ll delve into some of
            the latest trends and innovations that are shaping the future of
            technology.
          </p>
        </div>

        {/* Reactions */}
        <div className="flex gap-6 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
            <FiHeart className="text-xl" />
            <span>10k</span>
          </div>
          <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
            <FaRegCommentDots className="text-xl" />
            <span>12k</span>
          </div>
          <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer ml-auto">
            <FiShare2 className="text-xl" />
          </div>
          <div className="flex items-center gap-1 hover:text-yellow-500 cursor-pointer">
            <FiBookmark className="text-xl" />
          </div>
        </div>

        {/* Blog Image */}
        <div className="relative mb-8">
          <img
            src={blog.image}
            alt="Blog"
            className="w-full h-[421px]  shadow object-cover"
          />
          <div className="absolute inset-0 flex items-center cursor-pointer justify-center">
            <img
              src="/images/Insights/Blogs/video.png"
              alt="Play"
              className="w-16 h-16 opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-8 text-[16px] leading-7 border-b-2 pb-4">
          {blogSections.map((section, index) => (
            <div key={index}>
              <h2 className="font-bold text-xl mb-2">{section.title}</h2>
              <p>{section.description}</p>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full  mt-4 shadow"
                />
              )}
            </div>
          ))}
        </div>
        <BlogComments/>
        <RecommendedBlogs/>
      </div>

      <StartConsultation />
      <Talkus />
      <Footer />
    </div>
  );
};

export default BlogDetail;
