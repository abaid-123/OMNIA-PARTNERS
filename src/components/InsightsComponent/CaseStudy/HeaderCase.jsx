import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const HeaderCase = ({ onBlogChange }) => {
  const [value, setValue] = useState("omnia");

  const handleChange = (e) => {
    const selected = e.target.value;
    setValue(selected);
    onBlogChange(selected);
  };
  return (
    <div className="px-4 md:px-10 lg:px-20 ">
      <div className="flex items-center justify-between ">
        <select
          value={value}
          onChange={handleChange}
          className="text-sm md:text-base border-b-2 border-gray-500 border-0  mb-2 outline-none bg-transparent font-medium"
        >
          <option value="omnia">Omnia Case Studies </option>
          <option value="capabilities">Capabilities Case Studies</option>
          <option value="industries">Industries Case Studies</option>
        </select>

        <button className="text-gray-600 hover:text-black transition">
          <FiSearch size={20} />
        </button>
      </div>
      <hr className="w-full  border-t-2 border-gray-200 " />
    </div>
  );
};

export default HeaderCase;
