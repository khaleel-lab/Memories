import underline from 'colors';
import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(`${error}`.bgRed.underline);
		process.exit(1);
	}
};

export default connectDB;
