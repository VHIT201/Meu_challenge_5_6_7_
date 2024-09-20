
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({}) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Choose an App</h1>
      <Link to="/quote" className="text-white bg-blue-500 flex justify-center items-center py-4 w-80 rounded hover:bg-blue-600">
        Go to Quote Generator
      </Link>
      <Link to="/job" className="text-white bg-green-500 flex justify-center items-center py-4 w-80 rounded hover:bg-green-600">
        Go to Job Search
      </Link>
      <Link to="/cat" className="text-white bg-orange-500 flex justify-center items-center py-4 w-80 rounded hover:bg-green-600">
        Go to CatWiki
      </Link>
    </div>
  );
};

export default HomePage;
