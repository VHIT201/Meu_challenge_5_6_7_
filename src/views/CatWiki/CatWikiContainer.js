import { useState, useEffect } from "react";
import { fetchBreeds } from "../services/CatWikiService/CatWikiServices";
const useCatWikiContainer = () => {
  // Sử dụng state để quản lý placeholder
  const [searchList, setSearchList] = useState([])  
  // useEffect để kiểm tra kích thước màn hình

  useEffect(() => {
    const getBreeds = async () => {
      try {
        const breeds = await fetchBreeds();
        setSearchList(breeds); // Lưu kết quả vào state
        console.log("Breeds fetched:", breeds); // In kết quả ra console
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    };

    getBreeds(); // Gọi hàm getBreeds
  }, []);

  return { searchList };
};

export default useCatWikiContainer;
