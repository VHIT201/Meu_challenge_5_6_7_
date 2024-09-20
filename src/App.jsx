// import { QuoteAppGenerator } from "./views/QuoteAppGenerator/QuoteAppGenerator";
// import { JobSearch } from "./views/JobSearch/JobSearch";
// export default function App() {
//   return (
//     <div className="h-screen w-full bg-white flex justify-center items-center">
//       {/* <QuoteAppGenerator/> */}
//       <JobSearch/>
//     </div>
//   )
// }


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {QuoteAppGenerator} from "./views/QuoteAppGenerator/QuoteAppGenerator"
import { JobSearch } from "./views/JobSearch/JobSearch";
import HomePage from "./views/HomePage/HomePage";
import JobDetail from "./views/JobSearch/JobDetails";
import CatWiki from './views/CatWiki/CatWiki';
import BreedDetail from './views/CatWiki/BreedDetail/BreedDetail';
export default function App() {
  return (
    <Router>
      <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/quote" element={<QuoteAppGenerator />} />
          <Route path="/job" element={<JobSearch />} />
          <Route path="/cat" element={<CatWiki />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/cat/:id" element={<BreedDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}
