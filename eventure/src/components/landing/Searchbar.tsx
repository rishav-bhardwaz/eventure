import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [location, setLocation] = useState('Mumbai');

  return (
    <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-lg">
      <div className="flex-1 flex items-center px-4">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search Events, Categories, Location,..."
          className="w-full px-3 py-4 focus:outline-none text-gray-600"
        />
      </div>
      <div className="border-l border-gray-200 flex items-center px-2">
        <div className="relative">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="appearance-none bg-transparent pr-8 pl-3 py-2 text-gray-700 focus:outline-none"
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

