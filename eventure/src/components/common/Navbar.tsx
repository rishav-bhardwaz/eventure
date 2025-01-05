import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              <span className="text-yellow-400 text-2xl font-bold">Eventure</span>
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="/" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a
                  href="/events"
                  className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Events
                </a>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/create-event"
              className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Create Event
            </a>
            {isLoading ? (
              <div className="text-gray-300">Loading...</div>
            ) : isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="h-6 w-6 rounded-full mr-2"
                  />
                  {user.name}
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown shown only on hover */}
                <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <button
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
