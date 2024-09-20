import BreedsGrid from "./BreedsGrid";
import SeeMoreIcon from "./SeeMoreIcon";
const MostSearchedSection = ({ norwegianImage }) => (
    <div className="flex min-h-[34vh] w-full flex-col bg-[#E3E1DC] p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col">
        <span className="mb-1 text-lg text-[#291507]">Most Searched Breeds</span>
        <div className="h-1 w-20 bg-[#4D270C]"></div>
      </div>
      <div className="mt-7 flex flex-row justify-between sm:mt-5">
        <span className="lg:5xl mb-1 w-[40%] text-2xl font-bold text-[#291507] sm:text-3xl md:text-3xl">
          66+ Breeds For you to discover
        </span>
        <div className="flex flex-row items-end justify-center gap-3 text-xl font-semibold">
          <span className="sm:text-lg">SEE MORE</span>
          <SeeMoreIcon />
        </div>
      </div>
      <BreedsGrid norwegianImage={norwegianImage} />
    </div>
  );
  
  export default MostSearchedSection;
  