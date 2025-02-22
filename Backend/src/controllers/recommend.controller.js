import axios from 'axios';

// Controller function to get recommendations from Flask API
const getRecommendations = async (bookId) => {
    try {
        const response = await axios.get(`http://127.0.0.1:5000/recommend/${bookId}`);
        return response.data; // Return the data from Flask
    } catch (error) {
        console.error("Error fetching data from Flask API:", error);
        throw new Error('Error fetching recommendations from Flask API');
    }
};

export { getRecommendations };