import express from 'express';
import { createProject, getProjects } from '../controllers/projectController';

const router = express.Router();

router.get('/', getProjects);
router.post('/new', createProject);

export default router;
