import { config } from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import connectDB from './helpers/connect-db';
import courseRoutes from './routes/courses';
import userRoutes from './routes/users';
import userCoursesRoutes from './routes/user-courses';

config();
const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/courses', courseRoutes);
app.use('/user-courses', userCoursesRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
