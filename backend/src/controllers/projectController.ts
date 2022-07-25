import { RequestHandler } from 'express';
import Project from '../models/projectModel';

export const getProjects: RequestHandler = async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).json({
    status: 'success',
    projects,
  });
};

export const createProject: RequestHandler = async (req, res, next) => {
  const doc = await Project.create(req.body);

  res.status(201).json({
    status: 'success',
    data: doc,
  });
};
