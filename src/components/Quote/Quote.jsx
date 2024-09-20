import React from 'react';

const Quote = ({ quote, author, category }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full p-4 m-4 ">
            <div className="flex flex-row items-center justify-start w-full p-1 gap-10">
                <div className="h-full w-2 bg-amber-500"></div>
                <p className="text-2xl">{quote || 'Loading...'}</p>
            </div>
            <div className="flex flex-row justify-between w-full hover:bg-gray-800 hover:text-white p-4 m-4">
                <div className="flex flex-col justify-center items-start h-full p-4">
                    <span className="text-2xl font-bold">{author}</span>
                    <span>{category}</span>
                </div>
                <div className="flex items-center justify-center h-full p-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div>
            
        </div>
    );
};

export default Quote;
