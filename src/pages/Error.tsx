import React from 'react'

const Error: React.FC = () => {
  return (
    <div className="flex h-150 w-full flex-col items-center justify-center bg-gray-100 text-center">
      <div className="text-7xl text-gray-400">🐻</div>
      <h1 className="mt-6 text-2xl font-semibold text-gray-700">
        Oops, this page is not found.
      </h1>
      <button className="mt-8">
        <a href="/" className="inline-block bg-Joybrown text-white px-6 py-3 rounded-xl shadow hover:bg-Joybrown-med transition">
          Back to Home
        </a>
      </button>
    </div>
  );
};

export default Error