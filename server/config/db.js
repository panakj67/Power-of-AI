import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from '../data/products.js';
import Product from '../models/productModel.js';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB Atlas Connected Successfully');
    
  } catch (error) {
    console.error(`❌ MongoDB Atlas Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
