import React from 'react';

export const AdminOptions = () => {
  return (
    <div className="block rounded-lg bg-white text-center text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white">
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
        Featured
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          Special title treatment
        </h5>
        <p className="mb-4 text-base">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <button
          type="button"
          className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg dark:shadow-black/30 dark:hover:shadow-xl dark:focus:shadow-xl dark:active:shadow-xl">
          Button
        </button>
      </div>
      <div className="border-t-2 border-neutral-100 px-6 py-3 text-gray-600 dark:border-white/10 dark:text-neutral-300">
        2 days ago
      </div>
    </div>
  );
};

    
