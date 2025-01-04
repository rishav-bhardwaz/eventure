import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              <span className="text-yellow-400 text-2xl font-bold">Eventure</span>
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="/create-event" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/events" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Events</a>
                <a href="/about" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/contact" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
              <a href='/create-event'>Create Event</a></button>
            <button className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Login</button>
            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-medium">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
