import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1';

export const fetchBreeds = async () => {
    try {
        const respone = await axios.get(`${API_URL}/breeds`);
        return respone.data;
    } catch (error) {
        console.error('Error fetching breeds:', error);
        throw error;
    }
};

export const fetchTopBreeds = async () => {
    try {
        const respone = await axios.get(`${API_URL}/breeds?limit=10`);
        return respone.data;
    } catch (error) {
        console.error('Error fetching top breeds:', error);
        throw error;
    }
};

export const fetchBreedDetails = async (breedId) => {
    try {
        const breedResponse = await axios.get(`${API_URL}/breeds/${breedId}`);
        const imagesResponse = await axios.get(`${API_URL}/images/search?breed_id=${breedId}&limit=8`);
        
        const breedData = breedResponse.data;
        const otherPhotos = imagesResponse.data.map((image) => image.url);
        
        return {
            ...breedData,
            other_photos: otherPhotos,
        };
    } catch (error) {
        console.error('Error fetching breed details:', error);
        throw error;
    }
};
