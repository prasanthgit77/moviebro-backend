import Movie from '../models/Movie.js';

// @desc Get all movies (used for homepage fallback)
// @route GET /api/movies
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies' });
  }
};

// @desc Get latest movies (last 2 years)
// @route GET /api/movies/latest
export const getLatestMovies = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const recentMovies = await Movie.find({ year: { $gte: currentYear - 2 } }).sort({ year: -1 });
    res.json(recentMovies);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching latest movies.' });
  }
};

// @desc Search movies by title or genre
// @route GET /api/movies/search?q=keyword
export const searchMovies = async (req, res) => {
  const query = req.query.q;
  try {
    const result = await Movie.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { genre: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Search failed.' });
  }
};

// @desc Get movie by ID
// @route GET /api/movies/:id
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movie' });
  }
};
