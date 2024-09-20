import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobs from '../data/JobData'; // Import dữ liệu công việc
import { useLocation } from 'react-router-dom';
const JobDetail = () => {
    const { id } = useParams(); // Lấy ID của công việc từ URL
    const navigate = useNavigate();

    const location = useLocation();
    const { job } = location.state || {};
    if (!job) {
        return (
            <div className="h-full w-full flex flex-col p-10">
                <button onClick={() => navigate('/job')} className="text-blue-600 font-semibold hover:underline mb-4">
                    {"<"} Back to search
                </button>
                <p className="text-red-600 font-semibold">Công việc không tồn tại!</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col justify-between"> {/* Đảm bảo chiếm toàn bộ chiều cao màn hình và sử dụng flex */}
            {/* Nội dung chính */}
            <div className="flex flex-col items-center w-full flex-grow">
                <div className="h-14 w-[80%] flex justify-start items-end self-center mt-6">
                    <span className="font-bold text-3xl">
                        Github <span className="font-thin">Jobs</span>
                    </span>
                </div>
                <div className="w-[80%] flex flex-row self-center flex-grow">
                    {/* Nút quay lại */}
                    <div className="w-[25%] h-full flex flex-col justify-start items-start mb-6 mt-10 pr-10">
                        <button onClick={() => navigate('/job')} className="text-blue-600 font-semibold hover:underline">
                            {"<"} Back to search
                        </button>
                        <h3 className="font-bold text-gray-400 mb-2 mt-10">HOW TO APPLY</h3>
                        <p className="text-gray-700 text-sm mb-2">
                            Please email a copy of your resume and online portfolio to  
                            <a href={`mailto:${job.email}`} className="text-blue-800 font-semibold hover:underline"> {job.email}</a>
                            <span className="text-gray-700 text-sm"> & CC </span>
                            <a href={`mailto:${job.ccemail}`} className="text-blue-800 font-semibold hover:underline">{job.ccemail}</a>
                        </p>

                    </div>
                    {/* Nội dung chi tiết công việc */}
                    <div className="w-[75%] p-8 rounded mt-10">
                        <h1 className="font-bold text-xl text-blue-800 mb-1">
                            {job.title} <span className="text-sm font-semibold text-blue-800 ml-2 border border-blue-800 rounded-lg px-4 py-1">Full time</span>
                        </h1>
                        <div className="flex items-center gap-1 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="text-gray-400 text-xs">{job.date}</span>
                        </div>
                        <div className="flex mb-4 items-start">
                            <div className="w-[60px] h-[60px] flex justify-center items-center mr-4">
                            <img className="w-[60px] h-[60px] object-cover" src={job.avatar} alt="Job Avatar"/>
                            </div>
                            <div className="relative"> 
                                <h2 className="font-bold text-lg text-blue-800">{job.company}</h2>
                                <div className="flex flex-row h-8 justify-start items-center">
                                    <span className="material-icons text-gray-400 mr-2 text-[12px]">public</span>
                                    <p className="text-gray-600 text-sm">{job.location}</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-[#334680] whitespace-pre-wrap">{job.description}</p>
                        <p className="text-[#334680] whitespace-pre-wrap">{job.description}</p>
                        <p className="text-[#334680] whitespace-pre-wrap">{job.description}</p>
                        <p className="text-[#334680] whitespace-pre-wrap">{job.description}</p>
                        <p className="text-[#334680] whitespace-pre-wrap">{job.description}</p>
                        <p className="text-[#334680] whitespace-pre-wrap">{job.description}</p>

                    </div>
                </div>
            </div>
            {/* Div dưới cùng */}
            <div className="w-full flex items-center justify-center py-2">
                <p className="text-sm">
                    created by <span className="font-semibold">VanHoang</span> - devChallenges.io
                </p>
            </div>
        </div>
    );
};

export default JobDetail;
