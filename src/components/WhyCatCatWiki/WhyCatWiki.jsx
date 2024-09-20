const WhyCatComponent = ({ Images }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
    <div className="w-[100%] flex justify-end pr-[30%]">
      <div className=" flex flex-col w-[70%]">
        <div className="h-1 w-20 bg-slate-600 mb-5"></div>
        <span className="lg:6xl mb-1 text-6xl font-bold text-[#291507] sm:text-3xl md:text-5xl">Why should you have a cat?</span>
        <span className="text-[#291507] mt-10 font-semibold">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</span>
        <div className="flex flex-row mt-5 items-center p-0">
          <span className="lg:text-xl text-sm font-bold text-[#291507] sm:text-md md:text-lg">READ MORE</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 w-6 h-6 text-[#29150799]" 
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>

      
      </div>
  </div>
  <div className="p-4 flex flex-row">
    <div className="flex flex-col w-[50%] gap-5">
      <img src={Images.image2} className="w-full " alt="image2" />
      <img className="h-[50%] w-[70%] object-cover rounded-2xl self-end" src={Images.image1} alt="image1" /> 
    </div>
    <div className="flex flex-col">
      <img className="h-[80%] w-[80%] object-cover rounded-2xl ml-5" src={Images.image3} alt="image1" />
    </div>
  </div>

  </div>
  );
  export default WhyCatComponent;