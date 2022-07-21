import { useState } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Custom Components
import Header from './components/layout/Header';
import NewProject from './components/project/NewProject';
import { Project } from './components/project/Project.model';
import ProjectList from './components/project/ProjectList';

const App: React.FC = () => {
  // App State
  const [id, setId] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);

  // Controllers
  const newProjectHandler = (prjName: string) => {
    setProjects((prevState) => {
      return [...prevState, { id: id, name: prjName }];
    });

    setId(id + 1);
  };

  return (
    <Container className="px-5">
      <Header />
      <NewProject onAddProject={newProjectHandler} prjId={id} />
      {projects.length > 0 ? <ProjectList projects={projects} /> : ''}
    </Container>
  );
};

export default App;
