import React, { useState } from 'react';
import { FaSearch, FaEllipsisV, FaTrash, FaDownload } from 'react-icons/fa';

const History = () => {
  const [documents, setDocuments] = useState([
    { id: "DOC11223344", date: "02-Mar-2024", status: "Pending" },
    { id: "DOC22334455", date: "02-Mar-2024", status: "Pending" },
    { id: "DOC33445566", date: "01-Mar-2024", status: "Pending" },
    { id: "DOC44556677", date: "01-Mar-2024", status: "Checked" },
    { id: "DOC55667788", date: "29-Feb-2024", status: "Checked" },
    { id: "DOC66778899", date: "28-Feb-2024", status: "Checked" },
    { id: "DOC77889911", date: "27-Feb-2024", status: "Checked" },
    { id: "DOC88991122", date: "26-Feb-2024", status: "Checked" },
  ]);

  const [activeMenu, setActiveMenu] = useState(null);

  const handleDelete = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
    setActiveMenu(null);
  };

  const handleDownload = (id) => {
    // Implement download logic here
    console.log(`Downloading document ${id}`);
    setActiveMenu(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Documents</h1>
        <div className="flex items-center">
          <div className="relative mr-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-full"
            />
          </div>
          <select className="border rounded-full px-4 py-2">
            <option>Sort by: Newest</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Document ID</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id} className="border-b">
              <td className="py-2">{doc.id}</td>
              <td className="py-2">{doc.date}</td>
              <td className="py-2">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  doc.status === 'Pending' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                  {doc.status}
                </span>
              </td>
              <td className="py-2 relative">
                <button onClick={() => setActiveMenu(activeMenu === doc.id ? null : doc.id)}>
                  <FaEllipsisV />
                </button>
                {activeMenu === doc.id && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <button
                        onClick={() => handleDelete(doc.id)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        <FaTrash className="mr-3" /> Delete
                      </button>
                      <button
                        onClick={() => handleDownload(doc.id)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        <FaDownload className="mr-3" /> Download
                      </button>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <p>Showing data 1 to 4 of 10 entries</p>
        <div className="flex">
          {[1, 2, 3, 4, '...', 10].map((page, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-full ${
                page === 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;