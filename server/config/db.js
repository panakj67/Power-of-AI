import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from '../data/products.js';
import Product from '../models/productModel.js';

// This is for .env
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/projecteco',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(` MongoDB Connected successfully`);

  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
