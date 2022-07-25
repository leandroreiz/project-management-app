import express from 'express';
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
} from '../controllers/projectController';

const router = express.Router();

// Create document
router.post('/new', createProject);

// Read document(s)
router.get('/:id', getProject);
router.get('/', getProjects);

// Update document
router.put('/update/:id', updateProject);

// Delete document
router.delete('/delete/:id', deleteProject);

export default router;
