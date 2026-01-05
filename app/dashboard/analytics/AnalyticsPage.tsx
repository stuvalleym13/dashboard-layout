"use client";
import { useSearchParams, usePathname,useRouter,  } from "next/navigation";
import { useState } from "react";

export default function AnalyticsPage() {

  const [name, setName]= useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  
  // Get current page from URL params, default to 1
  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = 10; // You can make this dynamic based on your data

  // Function to update URL with new page number
  const updatePage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log(params)


    params.set('page', pageNumber.toString());
    params.set('fullName','akhilesh Kumar');


      // ✅ Convert URLSearchParams to object
  const paramsObject = Object.fromEntries(params.entries());
  console.log(paramsObject);

  const {page, fullName}=paramsObject;
  console.log(page, fullName);



// READ

    const newURL = `${pathname}?${params.toString()}`;
    console.log(newURL);
    router.push(newURL);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;
    
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      updatePage(currentPage + 1);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <p className="text-gray-600 mb-4">Analytics dashboard will appear here.</p>
        <p className="text-gray-500">Current Page: {currentPage}</p>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === 1
              ? 'text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed'
              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>

        {/* Show first page if not in current range */}
        {getPageNumbers()[0] > 1 && (
          <>
            <button
              onClick={() => updatePage(1)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              1
            </button>
            {getPageNumbers()[0] > 2 && <span className="px-2 text-gray-400">...</span>}
          </>
        )}

        {/* Page number buttons */}
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => updatePage(pageNumber)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              pageNumber === currentPage
                ? 'text-white bg-blue-600 border border-blue-600'
                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {pageNumber}
          </button>
        ))}

        {/* Show last page if not in current range */}
        {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
          <>
            {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
              <span className="px-2 text-gray-400">...</span>
            )}
            <button
              onClick={() => updatePage(totalPages)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === totalPages
              ? 'text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed'
              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}