require('dotenv').config();
import mongoose from 'mongoose';

const uri = process.env.DB_URI || "";

export const connectToMongo = async () => {
  try {
    await mongoose.connect(uri).then(() => console.log('Connected to MongoDB using Mongoose'));
  } catch (err) {
    console.error('Mongoose connection error:', err);
    throw err;
  }
};

export const closeMongoConnection = async () => {
  try {
    await mongoose.connection.close();
    console.log('Mongoose connection closed');
  } catch (err) {
    console.error('Error closing Mongoose connection:', err);
  }
};