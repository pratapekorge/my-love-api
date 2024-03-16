import mongoose, { Connection,ConnectOptions } from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/mylove';

let connection: Connection;

export const connectDB = async () => {
    try {
        let connectionOption: ConnectOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
        connection = await mongoose.connect(MONGODB_URI, connectionOption);

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};

export const getConnection = () => {
    if (!connection) {
        throw new Error('MongoDB connection not established');
    }
    return connection;
};
