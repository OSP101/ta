import React, { useState } from 'react';

export default function Contentsub() {
  const [currentPage, setCurrentPage] = useState('Checkname');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navigation */}
      <div className="bg-gray-200 w-full">
        <div className="container px-6 py-6 sm:py-0 mx-auto">
          <div className="sm:hidden bg-white w-full relative">
            <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-selector"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#A0AEC0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 9 12 5 16 9" />
                <polyline points="16 15 12 19 8 15" />
              </svg>
            </div>
            <select
              aria-label="Selected tab"
              className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
              value={currentPage}
              onChange={(e) => handlePageChange(e.target.value)}
            >
              <option value="Checkname">Checkname</option>
              <option value="Score">Score</option>
              <option value="Person">Person</option>
              <option value="Setting">Setting</option>
            </select>
          </div>
          <ul className="hidden sm:flex flex-row pt-8">
          <li
              className={`rounded-t w-32 h-12 flex items-center justify-center ${
                currentPage === 'Checkname' ? 'bg-white' : 'bg-gray-300'
              } mr-1 text-sm text-gray-800`}
              onClick={() => handlePageChange('Checkname')}
            >
              Checkname
            </li>
            <li
              className={`rounded-t w-32 h-12 flex items-center justify-center ${
                currentPage === 'Score' ? 'bg-white' : 'bg-gray-300'
              } text-sm text-gray-800`}
              onClick={() => handlePageChange('Score')}
            >
              Score
            </li>
            <li
              className={`rounded-t w-32 h-12 flex items-center justify-center ${
                currentPage === 'Person' ? 'bg-white' : 'bg-gray-300'
              } mx-1 text-sm text-gray-800`}
              onClick={() => handlePageChange('Person')}
            >
              Person
            </li>
            <li
              className={`rounded-t w-32 h-12 flex items-center justify-center ${
                currentPage === 'Setting' ? 'bg-white' : 'bg-gray-300'
              } mr-1 text-sm text-gray-800`}
              onClick={() => handlePageChange('Setting')}
            >
              Setting
            </li>
          </ul>
        </div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-6 mt-7 h-[45rem]">
        {currentPage === 'Checkname' && (
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {/* Checkname Content */}

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-gray-50 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
           
        </tbody>
    </table>
</div>

          </div>
        )}

      {currentPage === 'Score' && (
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {/* Score Content */}
            <h1>Score Page</h1>
          </div>
        )}

        {currentPage === 'Person' && (
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {/* Person Content */}
            <h1>Person Page</h1>
          </div>
        )}

        {currentPage === 'Setting' && (
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {/* Setting Content */}
            <h1>Setting Page</h1>
          </div>
        )}
      </div>
    </div>
  );
}
