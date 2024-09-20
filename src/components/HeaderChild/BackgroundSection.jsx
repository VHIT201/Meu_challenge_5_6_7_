import React, { useState } from "react";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const BackgroundSection = ({ backgroundImage, catwikiSVG, placeholderText, searchListData }) => {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const navigate = useNavigate();

  const handleBreedChange = (selectedOption) => {
    setSelectedBreed(selectedOption);
    if (selectedOption) {
      navigate(`/cat/${selectedOption.id}`, { state: { breedData: selectedOption } });
    }
  };

  return (
    <div
      className="h-[24vh] w-[100%] p-4 sm:p-6 md:p-8 lg:p-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-full w-[30%] flex-col items-start justify-center gap-4 relative">
        <img
          className="object-contain sm:h-12 sm:w-40 md:h-12 md:w-40 lg:h-20 lg:w-[45%] mt-10"
          src={catwikiSVG}
          alt="CatWiki Logo"
        />
        <span className="text-sm text-white sm:text-lg md:text-xl">
          Get to know more about your cat breed
        </span>
        <div className="h-[15vh] w-full">
          <Select
            options={searchListData}
            getOptionLabel={(breed) => breed.name}
            getOptionValue={(breed) => breed.id}
            isClearable
            onChange={handleBreedChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
