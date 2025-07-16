import React from "react";
import { FiSearch } from "react-icons/fi"; // Optional: install react-icons

const BlogHeaderBar = ({ onBlogChange }) => {
  const [value, setValue] = React.useState("omnia");

  const handleChange = (e) => {
    const selected = e.target.value;
    setValue(selected);
    onBlogChange(selected);
  };
  return (
    <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-4 border-b">
      <select
        value={value}
        onChange={handleChange}
        className="text-sm md:text-base border-none outline-none bg-transparent font-medium"
      >
        <option value="omnia">Omnia Blogs</option>
        <option value="capabilities">Capabilities Blogs</option>
        <option value="industries">Industries Blogs</option>
      </select>

      <button className="text-gray-600 hover:text-black transition">
        <FiSearch size={20} />
      </button>
    </div>
  );
};

export default BlogHeaderBar;
