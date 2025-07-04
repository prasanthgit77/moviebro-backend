import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: [{
    type: String,
    required: true,
  }],
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  posterUrl: {
    type: String,
    required: true,
  },
  platforms: [{
    type: String,
    required: true,
  }]
}, {
  timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
