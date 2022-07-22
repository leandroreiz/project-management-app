import { useState } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Custom Components
import Header from './components/layout/Header';
import CreateProject from './components/project/AddProject';
import { Project } from './components/project/Project.model';
import ProjectList from './components/project/ProjectList';

const App: React.FC = () => {
  const [id, setId] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);

  const addProjectHandler = (prjName: string) => {
    // Set new project
    setProjects((prevState) => {
      return [...prevState, { id: id, name: prjName }];
    });

    // Increment project id
    setId(id + 1);
  };

  return (
    <Container className="px-5">
      <Header />
      <CreateProject onAddProject={addProjectHandler} prjId={id} />
      {projects.length > 0 ? <ProjectList projects={projects} /> : ''}
    </Container>
  );
};

export default App;
