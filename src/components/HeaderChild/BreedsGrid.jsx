import BreedCard from "./BreedCard";
const BreedsGrid = ({ norwegianImage }) => (
    <div className="mt-5 flex flex-row gap-2 sm:gap-4 md:gap-4 lg:gap-10">
      <div className="grid w-full grid-cols-2 gap-2 sm:gap-4 md:gap-4 lg:grid-cols-4 lg:gap-10">
        {[1, 2, 3, 4].map((item, index) => (
          <BreedCard key={index} norwegianImage={norwegianImage} />
        ))}
      </div>
    </div>
  );
  
  export default BreedsGrid;
  