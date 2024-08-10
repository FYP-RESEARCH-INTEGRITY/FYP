import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const MyDocuments= () => {
  // Sample data
  const documents = [
    { id: "DOC11223344", date: "02-Mar-2024", status: "Pending" },
    { id: "DOC22334455", date: "02-Mar-2024", status: "Pending" },
    { id: "DOC33445566", date: "01-Mar-2024", status: "Pending" },
    { id: "DOC44556677", date: "01-Mar-2024", status: "Checked" },
    { id: "DOC55667788", date: "29-Feb-2024", status: "Checked" },
    { id: "DOC66778899", date: "28-Feb-2024", status: "Checked" },
    { id: "DOC77889911", date: "27-Feb-2024", status: "Checked" },
    { id: "DOC88991122", date: "26-Feb-2024", status: "Checked" },
  ];

  // Pagination (example)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDocuments = documents.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex-1 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">All Documents</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none"
            />
          </div>
          <div>
            <select className="rounded-lg border border-gray-300 p-2 focus:outline-none">
              <option>Sort by: Newest</option>
              <option>Sort by: Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Documents Table */}
      <table className="mt-8 w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 text-gray-600">Document ID</th>
            <th className="px-4 py-2 text-gray-600">Date</th>
            <th className="px-4 py-2 text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentDocuments.map((doc, index) => (
            <tr key={index} className="bg-white hover:bg-gray-100">
              <td className="px-4 py-2">{doc.id}</td>
              <td className="px-4 py-2">{doc.date}</td>
              <td className="px-4 py-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    doc.status === "Pending"
                      ? "bg-red-200 text-red-700"
                      : "bg-green-200 text-green-700"
                  }`}
                >
                  {doc.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div>
          <p>
            Showing data {indexOfFirstItem + 1} to {indexOfLastItem} of{" "}
            {documents.length} entries
          </p>
        </div>
        <div className="flex space-x-2">
          {[...Array(Math.ceil(documents.length / itemsPerPage)).keys()].map(
            (number) => (
              <button
                key={number + 1}
                onClick={() => handlePageChange(number + 1)}
                className={`px-3 py-1 rounded-full ${
                  currentPage === number + 1
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {number + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;