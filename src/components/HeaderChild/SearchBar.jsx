const SearchBar = ({ placeholderText }) => (
    <div className="flex h-[40px] w-[100%] flex-row items-center overflow-hidden rounded-full bg-white px-4">
      <input
        className="h-full w-[90%] pr-1 focus:outline-none"
        placeholder={placeholderText}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
  
  export default SearchBar;
  