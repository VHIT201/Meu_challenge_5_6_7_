import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash'; // Import debounce từ lodash
import { fetchData, handleSearch, handlePageChange } from '../services/JobService/jobService'; // Import functions

export const JobSearch = () => {
  const [jobList, setJobList] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Tính toán phân trang
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  // Tính toán số trang
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Lấy dữ liệu khi component được mount
  useEffect(() => {
    fetchData('job', setJobList, setFilteredJobs, setError);
  }, []);

  const handleJobClick = (job) => {
    navigate(`/job/${job.id}`, { state: { job } });
  };

  // Hàm debounce để xử lý tìm kiếm theo location
  const debouncedSearchLocation = useCallback(
    debounce((location) => {
      const filtered = jobList.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredJobs(filtered);
    }, 300), // Giới hạn tần suất gọi hàm tìm kiếm mỗi 300ms
    [jobList]
  );

  // Xử lý khi thay đổi ô tìm kiếm location
  useEffect(() => {
    debouncedSearchLocation(locationSearch);
  }, [locationSearch, debouncedSearchLocation]);

  return (
    <div className="h-full w-full flex flex-col bg-slate-100">
      {/* Header */}
      <div className="h-14 w-[80%] flex justify-start items-end self-center mt-6">
        <span className="font-bold text-3xl">
          Github <span className="font-thin">Jobs</span>
        </span>
      </div>

      {/* Search Bar */}
      <div
        className="h-[15%] w-[80%] self-center mt-5 rounded-lg relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Search Input Section */}
        <div className="absolute inset-0 w-[70%] h-[35%] rounded-md bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-row p-1 shadow-lg">
          <span className="material-icons text-gray-400 text-md w-[5%] text-center">work_outline</span>
          <input
            placeholder="Title, companies, expertise or benefits"
            className="w-[83%] h-[90%] bg-white focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span
            className="text-white text-xl w-[12%] h-[100%] flex rounded-md justify-center items-center bg-[#1E86FF] cursor-pointer"
            onClick={() => handleSearch(jobList, searchQuery, setFilteredJobs)}
          >
            Search
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow w-[80%] flex flex-col lg:flex-row items-start justify-center self-center pt-10 gap-10">
        {/* Sidebar */}
        <div className="h-full w-full lg:w-[30%]">
          {/* Full-time Checkbox */}
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="full-time"
              className="h-5 w-5 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="full-time" className="text-[#334680] text-md font-semibold">
              Full time
            </label>
          </div>

          {/* Location Section */}
          <div className="mt-8">
            <h3 className="font-bold text-gray-500 mb-2">LOCATION</h3>
            <div className="relative flex items-center mb-4 mt-5 w-full lg:w-[90%] shadow-sm bg-white p-2 rounded-md">
              <span className="material-icons text-gray-400 absolute left-3 text-[16px] mr-10">public</span>
              <input
                type="text"
                placeholder="City, state, zip code or country"
                className="pl-10 pr-4 py-2 w-full focus:outline-none"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
              />
            </div>

            {/* Radio Buttons for Locations */}
            <div className="space-y-4">
              {['London', 'Amsterdam', 'New York', 'Berlin'].map((city) => (
                <div key={city} className="flex items-center">
                  <input
                    type="radio"
                    id={city.toLowerCase()}
                    name="location"
                    className="h-5 w-5 bg-transparent"
                    onChange={() => setLocationSearch(city)}
                  />
                  <label htmlFor={city.toLowerCase()} className="ml-2 text-blue-800 font-semibold text-base">
                    {city}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="h-full w-full lg:w-[70%] space-y-4">
          {filteredJobs.slice(indexOfFirstJob, indexOfLastJob).map((job, index) => (
            <div onClick={() => handleJobClick(job)} key={index} className="p-4 flex flex-row bg-white w-full rounded-lg gap-4 shadow-md">
              <div className="w-[80px] h-[80px] bg-gray-200 flex justify-center items-center">
                <img className="w-[80px] h-[80px] object-cover" src={job.avatar} alt="Job Avatar" />
              </div>
              <div className="flex flex-grow flex-col gap-2 h-full justify-between">
                <span className="font-bold text-blue-800 text-sm">{job.company}</span>
                <span className="text-blue-800 font-semibold text-lg">{job.title}</span>
                <div className="flex items-center justify-center w-20 p-1 border border-blue-800 rounded-lg">
                  <span className="text-blue-800 font-semibold">Full time</span>
                </div>
              </div>
              <div className="flex flex-row gap-10 justify-between items-end">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className="text-gray-600 text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="text-gray-600 text-sm">{job.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="h-[12%] w-[80%] flex items-center justify-center lg:justify-end self-center mt-4">
        <div className="flex items-center space-x-2">
          <button
            className="text-gray-600 px-3 py-1 border rounded"
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1, setCurrentPage)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number, setCurrentPage)}
              className={`px-3 py-1 border rounded ${number === currentPage ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              {number}
            </button>
          ))}
          <button
            className="text-gray-600 px-3 py-1 border rounded"
            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages, setCurrentPage)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="h-[4%] w-[80%] flex items-center justify-center self-center">
        <p className="text-sm">
          created by <span className="font-semibold">VanHoang</span> - devChallenges.io
        </p>
      </div>
    </div>
  );
};
