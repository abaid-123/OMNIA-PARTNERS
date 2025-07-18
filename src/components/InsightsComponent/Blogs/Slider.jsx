import React, { useState } from 'react';

const Slider = () => {
  const totalPages = 10; // You can change total pages here
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageButtons = () => {
    const pages = [];

    // Always show the first page
    pages.push(
      <button
        key={1}
        onClick={() => goToPage(1)}
        className={`w-8 h-8 flex items-center justify-center rounded ${
          currentPage === 1 ? 'bg-blue-600 text-white font-bold' : 'border border-gray-300 hover:bg-gray-100'
        }`}
      >
        1
      </button>
    );

    // Show dots if needed
    if (currentPage > 3) {
      pages.push(<span key="dots1" className="px-1">…</span>);
    }

    // Show pages around current
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`w-8 h-8 flex items-center justify-center rounded ${
              currentPage === i ? 'bg-blue-600 text-white font-bold' : 'border border-gray-300 hover:bg-gray-100'
            }`}
          >
            {i}
          </button>
        );
      }
    }

    // Dots after current pages
    if (currentPage < totalPages - 2) {
      pages.push(<span key="dots2" className="px-1">…</span>);
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          className={`w-8 h-8 flex items-center justify-center rounded ${
            currentPage === totalPages ? 'bg-blue-600 text-white font-bold' : 'border border-gray-300 hover:bg-gray-100'
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex  mt-2 border-t pt-3">
      <nav className="inline-flex gap-1 items-center text-sm font-medium">
        {/* Previous button */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            currentPage === 1 ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-black hover:bg-gray-100'
          }`}
        >
          &lt;
        </button>

        {/* Page buttons */}
        {renderPageButtons()}

        {/* Next button */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            currentPage === totalPages ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-black hover:bg-gray-100'
          }`}
        >
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default Slider;
