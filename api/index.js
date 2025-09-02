import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MongoDB_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        Success: false,
        statusCode,
        message: 'Internal server error', error: err.message
    });
});

