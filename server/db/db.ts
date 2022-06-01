import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const callback = (error: { message:string; } | null) => {
  if (error) {
    throw new Error(`error connecting to database: ${error.message}`);
  } else {
    // eslint-disable-next-line no-console
    console.log('connected to database');
  }
};

const connectDB = () => mongoose.connect(`${process.env.MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions, callback);

export default connectDB;