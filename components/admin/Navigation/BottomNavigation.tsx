import React from "react";
import Link from "next/link";

const BottomNavigation = () => {
  return (
    <div className="fixed z-50 w-full max-w-lg transform -translate-x-1/2 bottom-4 left-1/2">
      <div className="grid h-16 grid-cols-5 bg-white border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600">
        <Link
          href="/dashboard"
          className="inline-flex flex-col items-center justify-center px-5 rounded-s-full group hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <button>
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Home</span>
          </button>
        </Link>
        <Link
          href="/dashboard"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <button>
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Wallet</span>
          </button>
        </Link>
        <div className="flex items-center justify-center">
          <button className="inline-flex items-center justify-center w-10 h-10 font-medium bg-gray-600 rounded-full hover:bg-gray-700 group focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-800">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 1v16M1 9h16"></path>
            </svg>
            <span className="sr-only">New item</span>
          </button>
        </div>
        <Link
          href="/profile"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <button>
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            <span className="sr-only">Settings</span>
          </button>
        </Link>
        <Link
          href="/profile"
          className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <button>
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Profile</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
