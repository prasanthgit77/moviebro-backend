import express from 'express';
import {
  getAllMovies,
  getLatestMovies,
  searchMovies,
  getMovieById
} from '../controllers/movieController.js';

const router = express.Router();

router.get('/', getAllMovies);              // 👈 This is for /api/movies
router.get('/latest', getLatestMovies);
router.get('/search', searchMovies);
router.get('/:id', getMovieById);

export default router;
