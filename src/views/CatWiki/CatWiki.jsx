  import React, { useState, useEffect } from "react";
  import HeaderImg from "../../assets/images/headerlogo.png"; // Đảm bảo đường dẫn đúng
  import backgroundImage from "../../assets/images/heroImagelg.png";
  import catwikiSVG from "../../assets/images/CatwikiLogo.svg";
  import Images from "../../assets/images";
  import Footer from "../../components/FooterCatWiki/FooterCatWiki";
  import HeaderComponent from "../../components/HeaderCatWiki/HeaderCatWiki";
  import WhyCatComponent from "../../components/WhyCatCatWiki/WhyCatWiki";
  import useCatWikiContainer from "./CatWikiContainer";
  const CatWiki = () => {
    // const { searchList } = useCatWikiContainer();
    const {searchList} = useCatWikiContainer();
    console.log('Search list : ', searchList);
    const [placeholderText, setPlaceholderText] = useState("Enter your breed");
    // useEffect để kiểm tra kích thước màn hình
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          // Nếu kích thước màn hình nhỏ hơn 640px (tương ứng với điện thoại)
          setPlaceholderText("Search");
        } else {
          // Kích thước màn hình lớn hơn hoặc bằng 640px (tablet, máy tính)
          setPlaceholderText("Enter your breed");
        }
      };
      // Kiểm tra kích thước màn hình ban đầu
      handleResize();
      // Lắng nghe sự kiện thay đổi kích thước màn hình
      window.addEventListener("resize", handleResize);
      // Cleanup để xóa lắng nghe sự kiện khi component bị hủy
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div className="flex h-full w-full flex-col items-start justify-start p-2">
        {/* <div className="flex w-[90%] flex-col self-center sm:w-[90%] sm:bg-red-500 md:w-[70%] md:bg-blue-500 lg:w-[60%] lg:bg-pink-500 xl:bg-yellow-700 2xl:bg-purple-500"> */}
        <div className="flex w-[90%] flex-col self-center sm:w-[90%] md:w-[70%] lg:w-[60%]">
          <img
            className="h-16 w-16 object-contain md:h-20 md:w-20"
            src={HeaderImg}
            alt="Header Logo"
          />
          <HeaderComponent 
            catwikiSVG={catwikiSVG}
            searchListData={searchList}
            backgroundImage={backgroundImage} 
            HeaderImg={HeaderImg} 
            norwegianImage={Images.norwegian} 
            placeholderText={placeholderText}
            />
          <WhyCatComponent Images={Images}/>
        </div>
        <Footer/>
      </div>
    );
  };

  export default CatWiki;
