import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import postRoute from './routes/posts.js';

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoute);

// Another way to connect DB
// mongoose
// 	.connect(process.env.MONGODB_URI)
// 	.then(() =>
// 		app.listen(
// 			port,
// 			console.log(`Server running on port ${port}`.yellow.underline)
// 		)
// 	)
// 	.catch((error) => console.log(`${error}`.bgRed.underline));

app.listen(port, () => {
	console.log(`Server running on port ${port}`.yellow.underline);
});
