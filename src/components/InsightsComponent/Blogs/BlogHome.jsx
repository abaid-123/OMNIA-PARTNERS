import React, { useState } from 'react';
import Navbar from '../../Navbar';
import BlogsHerosection from './BlogsHerosection';
import BlogDescription from './BlogDescription';
import BlogHeaderBar from './BlogHeaderBar';

import OmniaBlogs from './OmniaBlogs/OmniaBlogs';
import CapabilitiesBlogs from './CapabilitiesBlogs/CapabilitiesBlogs';
import IndustriesBlogs from './IndustriesBlogs/IndustriesBlogs';

const BlogHome = () => {
  const [selectedBlog, setSelectedBlog] = useState('');

  // Function to render selected component
  const renderSelectedBlog = () => {
    switch (selectedBlog) {
      case 'capabilities':
        return <CapabilitiesBlogs />;
      case 'industries':
        return <IndustriesBlogs />;
      default:
        return <OmniaBlogs />;
    }
  };

  return (
    <div>
      <Navbar />
      <BlogsHerosection />
      <BlogDescription />
      <BlogHeaderBar onBlogChange={setSelectedBlog} />

      {/* This is the part that changes below the dropdown */}
      <div className="px-4 md:px-10 lg:px-20 py-6">
        {renderSelectedBlog()}
      </div>
    </div>
  );
};

export default BlogHome;
