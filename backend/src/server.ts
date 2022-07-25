import config from './util/config';
import express from 'express';

import projectRouter from './routes/projectRoutes';
import mongoose from 'mongoose';

const app = express();
const port = config.PORT;
const db = config.DB_STRING.replace('<password>', config.DB_PASSWORD);

mongoose.connect(db).then(() => console.info('Database Connected!'));

app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/projects', projectRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
