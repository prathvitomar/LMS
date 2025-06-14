require('dotenv').config();
import {Redis} from 'ioredis';

const redisClient = () => {
  if(process.env.REDIS_URL) {
    console.log('Connecting to Redis...');
    return process.env.REDIS_URL;
  }
  throw new Error('Redis not Connected');
}

export const redis = new Redis(redisClient());