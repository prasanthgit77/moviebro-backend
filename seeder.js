import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Movie from './models/Movie.js';
import teluguMovies from './data/teluguMovies.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Movie.deleteMany(); // Clear old movies
    await Movie.insertMany(teluguMovies); // Insert new data
    console.log('✅ Telugu movies data imported successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }
};

importData();
