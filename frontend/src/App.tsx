import { useState } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Custom components
import Header from './components/layout/Header';
import CreateProject from './components/project/CreateProject';
import ListProjects from './components/project/ListProjects';
import { Project } from './models/Project.model';

const App: React.FC = () => {
  // Declaring state
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

  const deleteProjectHandler = (id: number) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  // Render
  return (
    <Container className="px-2">
      <Header />
      <CreateProject onAddProject={addProjectHandler} />

      {/* Conditional rendering */}
      {projects.length > 0 ? (
        <ListProjects
          projects={projects}
          onDeleteProject={deleteProjectHandler}
        />
      ) : (
        ''
      )}
    </Container>
  );
};

export default App;
