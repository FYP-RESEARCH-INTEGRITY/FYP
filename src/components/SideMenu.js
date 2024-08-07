import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideMenu ({toggle}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed left-0 top-0 h-screen transition-all duration-300 ${
        toggle ? "w-64" : "w-0"
      } overflow-hidden bg-gray-100`}
    //   onMouseEnter={() => setIsOpen(true)}
    //   onMouseLeave={() => setIsOpen(false)}
    >
      <div className="p-5">
        <div className="mb-10">
          <div className="mb-4 flex items-center">
            {/* <div className="mr-3 h-8 w-8 rounded-full bg-purple-500"></div> */}
            <span className="whitespace-nowrap text-lg font-semibold">
              CiteScout
            </span>
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
          </button>
          </div>
        </div>

        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/documents"
                className="whitespace-nowrap text-purple-600 hover:text-purple-800"
              >
                My Documents
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="whitespace-nowrap text-purple-600 hover:text-purple-800"
              >
                History
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto pt-5">
          <Link
            to="/logout"
            className="whitespace-nowrap text-purple-600 hover:text-purple-800"
          >
            LogOut
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
