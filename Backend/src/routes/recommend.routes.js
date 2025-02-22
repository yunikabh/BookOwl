import { Router } from 'express';
import { getRecommendations } from "../controllers/recommend.controller.js";


const router = Router();

// Route to fetch recommendations by book ID
router.route('/:book_id').get(async (req, res) => {
    const { book_id } = req.params;
    
    try {
        // Fetch recommendations using the controller function
        const recommendations = await getRecommendations(book_id);
        res.json(recommendations);  // Send the recommendations as response
    } catch (error) {
        res.status(500).json({ error: 'Error fetching recommendations from Flask API' });
    }
});

export default router;
