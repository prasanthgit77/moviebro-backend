import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import movieRoutes from './routes/movieRoutes.js';

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// 👉 Serve static poster images
app.use('/posters', express.static('public/posters'));

// Default API check route
app.get('/', (req, res) => {
  res.send("API is running...");
});

// Movie routes
app.use('/api/movies', movieRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
