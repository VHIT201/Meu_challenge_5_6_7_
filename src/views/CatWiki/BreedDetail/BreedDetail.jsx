import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import catWikiSVG from '../../../assets/images/CatwikiLogo.svg';
import HeaderImage from '../../../assets/images/headerlogo.png';
import Images from '../../../assets/images';
import { useLocation } from 'react-router-dom';
import { fetchBreedDetails } from '../../services/CatWikiService/CatWikiServices';
import Footer from '../../../components/FooterCatWiki/FooterCatWiki';
const BreedDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const location = useLocation(); // Lấy location để truy cập state
  const [breed, setBreed] = useState(); // Nhận dữ liệu giống mèo từ state


  useEffect(() => {
    const loadBreedDetails = async () => {
        try {
            const breedData = await fetchBreedDetails(id);
            setBreed(breedData);
            console.log('data nè kkk : ',breedData);
        } catch (error) {
            console.error("Error loading breed details:", error);
        }
    };
    loadBreedDetails();
}, [id]);


  const renderAdaptabilityBars = (title, value) => {
    return (
      <div className='flex flex-row items-center justify-between w-[80%]'>
        <span className='font-bold'>{`${title}`}:</span>
        <div className='flex flex-row gap-2'>
          <div className="flex items-center">
            {/* Tạo các thẻ chotitle */}
            {Array.from({ length: value }, (_, index) => (
              <div key={index} className="h-1 w-6 sm:w-10 md:w-10 lg:w-20 xl:w-20 bg-[#544439] rounded-full mr-1"></div>
            ))}
            {/* Tạo các thẻ cho phần còn lại */}
            {Array.from({ length: 5 - value }, (_, index) => (
              <div key={index + value} className="h-1 w-6 sm:w-10 md:w-10 lg:w-20 xl:w-20 bg-[#E0E0E0] rounded-full mr-1"></div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // useEffect cho việc lấy thông tin giống mèo từ API
  // useEffect(() => {
  //   const getBreedDetail = async () => {
  //     try {
  //       const breedDetail = await fetchBreedById(id); // Lấy thông tin giống mèo
  //       setBreed(breedDetail);
  //     } catch (error) {
  //       console.error('Error fetching breed details:', error);
  //     }
  //   };
  //
  //   getBreedDetail();
  // }, [id]);

  // if (!breed) return <div>Loading...</div>;

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-2 bg-white">
      <div className="flex w-[90%] flex-col self-center sm:w-[90%] md:w-[70%] lg:w-[60%] p-4">
        <img
          className="h-16 w-16 object-contain md:h-20 md:w-20 mb-4"
          src={HeaderImage}
          alt="Header Logo"
        />
        {/* Detail */}
        <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"  style={{ gridTemplateColumns: '30% 70%' }}>
          <div className="h-[20vh] w-[100%] flex items-start justify-center overflow-hidden">
            <img src={Images.bengal} className="object-cover w-[170px] h-[170px] rounded-lg" alt="Breed" />
          </div>
          <div className=" w-full flex items-start justify-start flex-col pl-[8%] pr-[10%] gap-5 ">
            <span className='font-semibold text-3xl mb-2'>{breed.name}</span>
            <span className='font-semibold'>{breed.description}</span>
            <span><span className='font-bold'>Temperament:</span> {breed.temperament}</span>
            <span><span className='font-bold'>Origin:</span> {breed.origin}</span>
            <span><span className='font-bold'>Life Span:</span> {breed.life_span} years</span>

            {renderAdaptabilityBars('Adaptability',breed.adaptability)}
            {renderAdaptabilityBars('Affection level',breed.affection_level)}
            {renderAdaptabilityBars('Child friendly',breed.child_friendly)}
            {renderAdaptabilityBars('Grooming',breed.grooming)}
            {renderAdaptabilityBars('Intelligence',breed.intelligence)}
            {renderAdaptabilityBars('Health issues',breed.health_issues)}
            {renderAdaptabilityBars('Social needs',breed.social_needs)}
            {renderAdaptabilityBars('Stranger friendly',breed.stranger_friendly)}


          </div>

        </div>
      {/* Detail */}
        
        <span className='text-2xl font-bold mt-10'>Other Photos</span>

        <div className='w-[100%] h-[50vh]  mt-5'>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {breed.other_photos.map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt={`Breed image ${index}`} 
              className="w-[70%] h-[20vh] object-cover rounded-3xl"
            />
          ))}
        </div>
      </div>


  
      </div>
      <Footer/>
    </div>
  );
};

export default BreedDetail;
