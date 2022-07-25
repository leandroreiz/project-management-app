import { RequestHandler } from 'express';
import Project from '../models/projectModel';

// Create documents
export const createProject: RequestHandler = async (req, res, next) => {
  const data = await Project.create(req.body);

  res.status(201).json({
    status: 'success',
    data,
  });
};

// Read document
export const getProject: RequestHandler = async (req, res, next) => {
  const data = await Project.findById(req.params.id);

  if (!data) throw new Error('No document found with that ID');

  res.status(200).json({
    status: 'success',
    data,
  });
};

// Read documents
export const getProjects: RequestHandler = async (req, res, next) => {
  const data = await Project.find();

  res.status(200).json({
    status: 'success',
    data,
  });
};

// Update document
export const updateProject: RequestHandler = async (req, res, next) => {
  const data = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!data) throw new Error('No document found with that ID');

  res.status(200).json({
    status: 'success',
    data,
  });
};

// Delete document
export const deleteProject: RequestHandler = async (req, res, next) => {
  const data = await Project.findByIdAndDelete(req.params.id);

  if (!data) throw new Error('No document found with that ID');

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
