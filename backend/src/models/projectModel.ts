import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, 'Please inform a name for the project!'],
  },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
