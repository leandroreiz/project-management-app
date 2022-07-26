// ---------------------------------
// Imports
// ---------------------------------
import express from 'express';
import mongoose from 'mongoose';
import config from './util/config';
import projectRouter from './routes/projectRoutes';

const app = express();
const port = config.PORT;

// ---------------------------------
// Database connection config
// ---------------------------------
const db = config.DB_STRING.replace('<password>', config.DB_PASSWORD);
mongoose.connect(db).then(() => console.info('Database Connected!'));

// ---------------------------------
// Middlewares
// ---------------------------------
app.use(express.json({ limit: '10kb' }));
app.use('/api/v1/projects', projectRouter);

// ---------------------------------
// Start server
// ---------------------------------
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
