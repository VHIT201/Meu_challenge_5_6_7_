import axios from 'axios';

// Fetch job data from the API
export const fetchData = async (endpoint, setJobList, setFilteredJobs, setError) => {
  const baseUrl = 'https://66e6a2b817055714e58a1a10.mockapi.io/api/job/';
  const fullUrl = `${baseUrl}${endpoint}`;

  try {
    const response = await axios.get(fullUrl);
    setJobList(response.data); // Update state with fetched data
    setFilteredJobs(response.data); // Initialize filtered jobs with all jobs
  } catch (err) {
    setError(err.message); // Update state with error message
  }
};

// Handle search functionality
export const handleSearch = (jobList, searchQuery, setFilteredJobs) => {
  const results = jobList.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  setFilteredJobs(results); // Update state with filtered results
};

// Handle page change
export const handlePageChange = (pageNumber, setCurrentPage) => {
  setCurrentPage(pageNumber);
};
