const BreedCard = ({ norwegianImage }) => (
    <div className="flex w-full flex-col overflow-hidden">
      <img
        src={norwegianImage}
        className="h-[14vh] w-[80%] rounded-2xl bg-blue-400 object-cover lg:h-[14vh] xl:h-[14vh] 2xl:h-[16vh]"
      />
      <span className="mt-1 text-lg font-semibold">Bengal</span>
    </div>
  );
  
  export default BreedCard;
  