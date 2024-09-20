import BackgroundSection from "../HeaderChild/BackgroundSection";
import SearchBar from "../HeaderChild/SearchBar";
import MostSearchedSection from "../HeaderChild/MostSearchedSection";
import BreedsGrid from "../HeaderChild/BreedsGrid";
import BreedCard from "../HeaderChild/BreedCard";
import SeeMoreIcon from "../HeaderChild/SeeMoreIcon";

const HeaderComponent = ({ backgroundImage, placeholderText, catwikiSVG, norwegianImage,searchListData }) => (
  <div className="min-h-[58vh] w-[100%] overflow-hidden rounded-3xl bg-slate-300">
    <BackgroundSection
      searchListData={searchListData}
      backgroundImage={backgroundImage}
      catwikiSVG={catwikiSVG}
      placeholderText={placeholderText}
    />
    <MostSearchedSection norwegianImage={norwegianImage} />
  </div>
);

export default HeaderComponent;
