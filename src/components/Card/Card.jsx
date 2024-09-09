import React from 'react';

export default function Card({ imageLink, title, fileLink }) {
    return (
        <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:border-blue-500">
            <a href="/">
                <img
                    className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:opacity-90"
                    src={imageLink}
                    alt={title}
                />
            </a>
            <div className="px-4 py-3">
                <a href="/">
                    <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>
                <div className="flex items-center mt-1 mb-3">
                    {/* SVG Ratings */}
                    {/* Add your SVG star ratings here */}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400"></span>
                    <a
                        href={fileLink} // Link to the file you want to download
                        download={title} // File name for download
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 transform hover:scale-105"
                    >
                        Download 👇
                    </a>
                </div>
            </div>
        </div>
    );
}
